
import { Button } from '@/components/ui/button';
import { PenTool, TrendingUp, Users, BookOpen } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in">
            Share Your Stories
            <br />
            <span className="text-primary">Inspire the World</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-in">
            Join our community of writers and readers. Discover amazing stories, share your thoughts, 
            and connect with people who share your passions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <PenTool className="w-5 h-5 mr-2" />
              Start Writing
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8">
              Explore Articles
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-light rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-400">Active Writers</div>
            </div>
            
            <div className="glass-light rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">50K+</div>
              <div className="text-gray-400">Published Articles</div>
            </div>
            
            <div className="glass-light rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">1M+</div>
              <div className="text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
