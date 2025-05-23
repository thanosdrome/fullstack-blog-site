
import { BookOpen, Code, Palette, Briefcase, Heart, Globe } from 'lucide-react';

const categories = [
  { name: 'Technology', icon: Code, count: 245, color: 'from-blue-500 to-blue-600' },
  { name: 'Design', icon: Palette, count: 189, color: 'from-purple-500 to-purple-600' },
  { name: 'Business', icon: Briefcase, count: 156, color: 'from-green-500 to-green-600' },
  { name: 'Lifestyle', icon: Heart, count: 203, color: 'from-pink-500 to-pink-600' },
  { name: 'Travel', icon: Globe, count: 134, color: 'from-orange-500 to-orange-600' },
  { name: 'Education', icon: BookOpen, count: 167, color: 'from-indigo-500 to-indigo-600' }
];

export const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-transparent via-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through our diverse collection of topics and find content that interests you.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name}
                className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {category.count} articles
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
