
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import ImageUpload from '@/components/ImageUpload';
import Navigation from '@/components/Navigation';

interface SiteImage {
  id: string;
  name: string;
  url: string;
  alt_text: string | null;
  description: string | null;
  category: string | null;
  created_at: string;
}

const Admin = () => {
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('site_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      toast.error('Erreur lors du chargement des images');
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: string, url: string) => {
    try {
      // Extract file path from URL
      const urlParts = url.split('/');
      const fileName = urlParts[urlParts.length - 1];

      // Delete from storage
      await supabase.storage
        .from('site-images')
        .remove([fileName]);

      // Delete from database
      const { error } = await supabase
        .from('site_images')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setImages(images.filter(img => img.id !== id));
      toast.success('Image supprimée avec succès');
    } catch (error) {
      toast.error('Erreur lors de la suppression');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation showNavItems={false} />
      
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gold mb-8">Administration des Images</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ImageUpload />
            </div>
            
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Images du site ({images.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <p>Chargement...</p>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      {images.map((image) => (
                        <Card key={image.id} className="overflow-hidden">
                          <div className="aspect-video relative">
                            <img
                              src={image.url}
                              alt={image.alt_text || image.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">{image.name}</h3>
                            {image.category && (
                              <Badge variant="secondary" className="mb-2">
                                {image.category}
                              </Badge>
                            )}
                            {image.description && (
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                {image.description}
                              </p>
                            )}
                            <div className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(image.url, '_blank')}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => deleteImage(image.id, image.url)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
