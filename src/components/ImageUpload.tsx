
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Image } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    alt_text: '',
    description: '',
    category: ''
  });

  const categories = [
    'hero',
    'historical',
    'testimonies',
    'aftermath',
    'sources',
    'introduction',
    'revolt'
  ];

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Vous devez sélectionner une image à uploader.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('site-images')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data } = supabase.storage
        .from('site-images')
        .getPublicUrl(filePath);

      // Save to database
      const { error: dbError } = await supabase
        .from('site_images')
        .insert([
          {
            name: formData.name || file.name,
            url: data.publicUrl,
            alt_text: formData.alt_text,
            description: formData.description,
            category: formData.category
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      toast.success('Image uploadée avec succès!');
      setFormData({ name: '', alt_text: '', description: '', category: '' });
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Erreur lors de l\'upload');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Image className="h-5 w-5" />
          Ajouter une image
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name">Nom de l'image</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Tirailleurs en marche"
          />
        </div>

        <div>
          <Label htmlFor="category">Catégorie</Label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choisir une catégorie" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="alt_text">Texte alternatif</Label>
          <Input
            id="alt_text"
            value={formData.alt_text}
            onChange={(e) => setFormData({ ...formData, alt_text: e.target.value })}
            placeholder="Description pour l'accessibilité"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description détaillée de l'image"
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="image">Fichier image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={uploadImage}
            disabled={uploading}
          />
        </div>

        <Button 
          className="w-full" 
          disabled={uploading}
          onClick={() => document.getElementById('image')?.click()}
        >
          <Upload className="h-4 w-4 mr-2" />
          {uploading ? 'Upload en cours...' : 'Sélectionner et uploader'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ImageUpload;
