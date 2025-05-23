
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, User, Tag } from "lucide-react";

// This would ideally come from an API or backend
const getBlogPost = (id: string) => {
  const featuredPosts = [
    {
      id: "1",
      title: "The Future of Artificial Intelligence in Creative Writing",
      content: `<p>Artificial Intelligence has made remarkable strides in recent years, transforming industries and challenging our understanding of what machines can achieve. Perhaps one of the most fascinating developments is in the realm of creative writing.</p>
      
      <h2>The Current Landscape</h2>
      <p>Today's AI models can generate poetry, draft articles, and even attempt storytelling. These advancements have sparked debates about the nature of creativity and the future role of human writers.</p>
      
      <p>For professional writers, AI tools are increasingly serving as collaborators rather than replacements. They help overcome writer's block, suggest alternative phrasings, and can even adapt content for different audiences.</p>
      
      <h2>Emerging Trends</h2>
      <p>Several key trends are shaping the intersection of AI and creative writing:</p>
      <ul>
        <li>Personalized content generation tailored to individual reader preferences</li>
        <li>AI-assisted editing that goes beyond grammar to suggest structural improvements</li>
        <li>Collaborative workflows where humans and AI alternate in the creative process</li>
        <li>Cross-modal creation, where AI can generate text based on images or music</li>
      </ul>
      
      <h2>Ethical Considerations</h2>
      <p>As these technologies evolve, important ethical questions arise. Who owns AI-generated content? How do we maintain authenticity and prevent misuse? The writing community continues to grapple with these questions as the technology advances.</p>
      
      <p>Despite these concerns, the potential for AI to augment human creativity remains immense. Rather than replacing human writers, the most promising path forward appears to be one of collaboration, where AI handles routine aspects of content creation while humans provide the deeper insights and emotional resonance that readers crave.</p>
      
      <h2>Looking Ahead</h2>
      <p>The next generation of AI writing tools will likely feature more sophisticated understanding of narrative structure, emotional arcs, and cultural context. They may evolve from tools that simply generate text to true partners in the creative process, offering suggestions that challenge and inspire human writers.</p>
      
      <p>For readers, this could mean access to more diverse content, tailored to individual interests yet still carrying the authentic human touch that makes stories meaningful.</p>
      
      <p>The future of writing is neither purely human nor machine, but rather a fascinating hybrid that combines the best of both worlds.</p>`,
      excerpt: "Exploring how AI is transforming the landscape of creative writing and what it means for authors and readers alike. From automated content generation to AI-assisted editing, the creative industry is experiencing a revolutionary shift.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      category: "Technology"
    },
    {
      id: "2",
      title: "Building Sustainable Communities Through Digital Storytelling",
      content: `<p>In an increasingly digital world, communities are finding innovative ways to preserve their identities and forge new connections. Digital storytelling has emerged as a powerful tool for community building, offering a platform for voices that might otherwise go unheard.</p>
      
      <h2>The Power of Shared Narratives</h2>
      <p>Communities thrive on shared experiences and collective memory. Digital platforms now allow these narratives to transcend geographical limitations, connecting people across vast distances while preserving local distinctiveness.</p>
      
      <p>From neighborhood histories documented through interactive maps to intergenerational knowledge transfer through recorded interviews, the possibilities for community storytelling have expanded dramatically.</p>
      
      <h2>Accessibility and Inclusion</h2>
      <p>One of the most significant advantages of digital storytelling is its potential for inclusivity. Tools that once required technical expertise or expensive equipment are now available to anyone with a smartphone.</p>
      
      <p>This democratization of media creation means more diverse stories can be shared, creating a richer tapestry of community narratives.</p>
      
      <h2>Building Bridges</h2>
      <p>Beyond preserving existing communities, digital storytelling creates opportunities for forming new connections across traditional boundaries. When stories are shared online, they can resonate with unexpected audiences, forming bridges between different cultural groups.</p>
      
      <p>This cross-cultural exchange often reveals common human experiences that transcend surface differences, fostering empathy and understanding.</p>
      
      <h2>Sustainability Through Stories</h2>
      <p>Perhaps most importantly, communities that document and share their stories tend to be more resilient. These narratives become resources for navigating change while maintaining a sense of continuity and identity.</p>
      
      <p>As we face global challenges that require collective action, the ability to build and maintain community bonds becomes increasingly valuable. Digital storytelling offers one path toward creating the sustainable communities we need for the future.</p>`,
      excerpt: "How digital platforms are enabling communities to share their stories and create lasting connections across geographical boundaries.",
      author: "Marcus Johnson",
      date: "Dec 14, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      category: "Society"
    },
    {
      id: "3",
      title: "The Art of Minimalist Design in Modern Web Development",
      content: `<p>In the ever-evolving world of web design, minimalism continues to stand the test of time. This approach, characterized by simplicity, clarity, and purpose, has become increasingly relevant as users face growing digital overwhelm.</p>
      
      <h2>The Philosophy of Less</h2>
      <p>Minimalist design isn't simply about using fewer elements—it's about achieving maximum impact with minimum means. Every component on a minimalist webpage serves a specific purpose, with nothing superfluous to distract from the core message or functionality.</p>
      
      <p>This intentionality extends beyond aesthetics to encompass the entire user experience. Loading times, navigation paths, and interaction patterns are all streamlined for efficiency and clarity.</p>
      
      <h2>White Space as a Design Element</h2>
      <p>Perhaps the most characteristic feature of minimalist design is the generous use of white space (or negative space). Far from being empty or wasted, this space serves crucial functions:</p>
      <ul>
        <li>Improving readability by giving text room to breathe</li>
        <li>Creating visual hierarchy without relying on obvious cues</li>
        <li>Directing attention to the most important elements</li>
        <li>Conveying a sense of sophistication and refinement</li>
      </ul>
      
      <h2>Typography in Focus</h2>
      <p>When extraneous elements are stripped away, typography takes center stage. Minimalist designs often feature careful attention to font choice, sizing, and spacing. Clean, readable typefaces combined with thoughtful hierarchical arrangements can communicate effectively without decorative elements.</p>
      
      <h2>Color with Purpose</h2>
      <p>Minimalist color palettes tend to be restrained, but not necessarily monochromatic. Strategic use of accent colors can guide users through an experience or highlight calls to action. What matters isn't the quantity of colors but their purposeful application.</p>
      
      <h2>Responsive by Nature</h2>
      <p>An additional benefit of minimalist design is its inherent adaptability to different screen sizes. With fewer elements to rearrange, minimalist websites often transition smoothly between devices, providing consistent experiences across platforms.</p>
      
      <p>As digital environments become increasingly cluttered, the clarity offered by minimalist design principles becomes more valuable. By focusing on what truly matters and eliminating the rest, designers can create experiences that respect users' attention and serve their needs efficiently.</p>`,
      excerpt: "Exploring the principles of minimalist design and how they apply to creating beautiful, functional web experiences.",
      author: "Elena Rodriguez",
      date: "Dec 13, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      category: "Design"
    },
    {
      id: "4",
      title: "Remote Work Culture: Lessons from the Digital Nomad Movement",
      content: `<p>Long before remote work became mainstream, digital nomads were pioneering location-independent lifestyles. As traditional businesses adapt to distributed teams, there's much to learn from these early adopters of remote work culture.</p>
      
      <h2>Beyond Physical Flexibility</h2>
      <p>While the freedom to work from anywhere is the most visible aspect of digital nomadism, experienced remote workers know that location independence is just one piece of the puzzle. Equally important are temporal flexibility, communication practices, and self-management skills.</p>
      
      <p>Successful digital nomads typically develop robust personal systems for maintaining productivity outside traditional work environments. These include deliberate boundary-setting between work and leisure, despite the blurring of physical spaces.</p>
      
      <h2>Community Without Proximity</h2>
      <p>One misconception about remote work is that it necessarily leads to isolation. Digital nomads have demonstrated that meaningful professional communities can exist without physical proximity.</p>
      
      <p>Through coworking spaces, online forums, and regular virtual gatherings, remote workers build networks that provide both practical support and social connection. These communities often cross company lines, creating valuable opportunities for knowledge exchange.</p>
      
      <h2>Results-Oriented Work Culture</h2>
      <p>Perhaps the most significant contribution of the digital nomad movement is its emphasis on results rather than processes. When teams are distributed, visible busyness becomes irrelevant—output is what matters.</p>
      
      <p>This shift requires clear communication about expectations and deliverables, along with trust that team members will manage their work effectively without constant supervision.</p>
      
      <h2>Intentional Communication</h2>
      <p>Without the benefit of casual office interactions, remote teams must be deliberate about communication. Digital nomads often excel at:</p>
      <ul>
        <li>Asynchronous communication that respects different time zones</li>
        <li>Thorough documentation that reduces dependency on real-time availability</li>
        <li>Careful choice of communication channels based on the nature of the interaction</li>
        <li>Regular check-ins that maintain connection without micromanagement</li>
      </ul>
      
      <h2>Work-Life Integration</h2>
      <p>Rather than striving for perfect work-life balance, many digital nomads pursue thoughtful integration. This might mean working intensively when inspiration strikes, then taking extended breaks for exploration or personal projects.</p>
      
      <p>As traditional workplaces become more flexible, this fluid approach to managing energy and attention offers an alternative to rigid scheduling.</p>
      
      <p>The lessons from digital nomadism aren't about eliminating offices entirely, but rather about creating more humane, flexible work environments that accommodate diverse needs and working styles. By adopting these principles, organizations can build resilient remote cultures that enhance both productivity and well-being.</p>`,
      excerpt: "What traditional businesses can learn from digital nomads about creating flexible, productive work environments.",
      author: "David Park",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop",
      category: "Lifestyle"
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const post = featuredPosts.find(post => post.id === id);
      resolve(post || null);
    }, 500); // Simulate network delay
  });
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getBlogPost(id)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="w-3/4 h-12" />
              <div className="flex gap-4">
                <Skeleton className="w-32 h-6" />
                <Skeleton className="w-32 h-6" />
                <Skeleton className="w-32 h-6" />
              </div>
              <Skeleton className="w-full h-64" />
              <Skeleton className="w-full h-32" />
              <Skeleton className="w-full h-32" />
            </div>
          ) : post ? (
            <>
              <div className="glass-card rounded-xl overflow-hidden mb-8 animate-fade-in">
                {post.image && (
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                )}
                <div className="p-8">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary mb-6">
                    <Tag className="w-4 h-4 mr-2" />
                    {post.category}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-xl p-6 md:p-10 blog-content animate-fade-in">
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-white">Post not found</h2>
              <p className="text-gray-400 mt-2">The post you are looking for might have been removed or is temporarily unavailable.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
