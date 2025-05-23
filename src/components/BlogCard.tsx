
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

export const BlogCard = ({ title, excerpt, author, date, readTime, image, featured = false }: BlogCardProps) => {
  return (
    <article className={`group cursor-pointer animate-fade-in ${featured ? 'md:col-span-2' : ''}`}>
      <div className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 h-full">
        {image && (
          <div className="relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                featured ? 'h-64' : 'h-48'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className={`font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-3">
            {excerpt}
          </p>
          
          <Button 
            variant="ghost" 
            className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
          >
            Read more 
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </article>
  );
};
