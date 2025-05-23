
import { BlogCard } from './BlogCard';

const featuredPosts = [
  {
    title: "The Future of Artificial Intelligence in Creative Writing",
    excerpt: "Exploring how AI is transforming the landscape of creative writing and what it means for authors and readers alike. From automated content generation to AI-assisted editing, the creative industry is experiencing a revolutionary shift.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true
  },
  {
    title: "Building Sustainable Communities Through Digital Storytelling",
    excerpt: "How digital platforms are enabling communities to share their stories and create lasting connections across geographical boundaries.",
    author: "Marcus Johnson",
    date: "Dec 14, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
  },
  {
    title: "The Art of Minimalist Design in Modern Web Development",
    excerpt: "Exploring the principles of minimalist design and how they apply to creating beautiful, functional web experiences.",
    author: "Elena Rodriguez",
    date: "Dec 13, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
  },
  {
    title: "Remote Work Culture: Lessons from the Digital Nomad Movement",
    excerpt: "What traditional businesses can learn from digital nomads about creating flexible, productive work environments.",
    author: "David Park",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop"
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Articles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most popular and thought-provoking content from talented writers around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
