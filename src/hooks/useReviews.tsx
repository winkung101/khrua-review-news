
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Review {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  rating: number;
  price_range: string;
  views_count: number;
  meta_title: string;
  meta_description: string;
  og_title: string;
  og_description: string;
  og_image: string;
  published_at: string;
  author_id: string;
  categories: {
    name: string;
    slug: string;
  };
}

export const useReviews = (categorySlug?: string) => {
  return useQuery({
    queryKey: ['reviews', categorySlug],
    queryFn: async () => {
      let query = supabase
        .from('reviews')
        .select(`
          *,
          categories(name, slug)
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (categorySlug && categorySlug !== 'ทั้งหมด') {
        query = query.eq('categories.slug', categorySlug);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching reviews:', error);
        throw error;
      }
      
      return data as Review[];
    },
  });
};

export const useReview = (slug: string) => {
  return useQuery({
    queryKey: ['review', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select(`
          *,
          categories(name, slug)
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching review:', error);
        throw error;
      }

      // อัปเดตการดูรีวิว
      await supabase
        .from('reviews')
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq('id', data.id);

      return data as Review;
    },
  });
};
