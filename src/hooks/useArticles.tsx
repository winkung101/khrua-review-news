
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  featured: boolean;
  read_time: number;
  published_at: string;
  categories: {
    name: string;
    slug: string;
  };
  profiles: {
    full_name: string;
  };
}

export const useArticles = (categorySlug?: string) => {
  return useQuery({
    queryKey: ['articles', categorySlug],
    queryFn: async () => {
      let query = supabase
        .from('articles')
        .select(`
          *,
          categories(name, slug),
          profiles(full_name)
        `)
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (categorySlug && categorySlug !== 'ทั้งหมด') {
        query = query.eq('categories.slug', categorySlug);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }
      
      return data as Article[];
    },
  });
};

export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          categories(name, slug),
          profiles(full_name)
        `)
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching article:', error);
        throw error;
      }

      // อัปเดตการดูบทความ
      await supabase
        .from('articles')
        .update({ views_count: (data.views_count || 0) + 1 })
        .eq('id', data.id);

      return data as Article;
    },
  });
};
