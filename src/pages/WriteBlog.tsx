
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Image as ImageIcon,
  Save,
  Eye
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// List of categories
const categories = [
  "Technology", 
  "Design", 
  "Business", 
  "Lifestyle", 
  "Travel", 
  "Education"
];

const WriteBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatText = (format: string) => {
    const textarea = document.getElementById("editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    let formattedText = "";
    let cursorOffset = 0;

    switch (format) {
      case "bold":
        formattedText = `<strong>${selectedText}</strong>`;
        cursorOffset = 8;
        break;
      case "italic":
        formattedText = `<em>${selectedText}</em>`;
        cursorOffset = 4;
        break;
      case "underline":
        formattedText = `<u>${selectedText}</u>`;
        cursorOffset = 3;
        break;
      case "ul":
        formattedText = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
        cursorOffset = 9;
        break;
      case "ol":
        formattedText = `<ol>\n  <li>${selectedText}</li>\n</ol>`;
        cursorOffset = 9;
        break;
      case "h1":
        formattedText = `<h1>${selectedText}</h1>`;
        cursorOffset = 4;
        break;
      case "h2":
        formattedText = `<h2>${selectedText}</h2>`;
        cursorOffset = 4;
        break;
      default:
        return;
    }

    const newContent = 
      content.substring(0, start) + 
      formattedText + 
      content.substring(end);
    
    setContent(newContent);
    
    // Set cursor position after formatting - for better UX
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = start + formattedText.length - cursorOffset;
      textarea.selectionEnd = start + formattedText.length - cursorOffset;
    }, 0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // For this example, we'll just use URL.createObjectURL
    // In a real app, you would upload to your server or a storage service
    const imageUrl = URL.createObjectURL(file);
    setCoverImage(imageUrl);
  };

  const insertImage = () => {
    // In a real implementation, this would open a file picker and upload the image
    const imageUrl = prompt("Enter image URL:");
    if (!imageUrl) return;

    const imageTag = `<img src="${imageUrl}" alt="Blog image" class="my-4 rounded-lg max-w-full" />`;
    const textarea = document.getElementById("editor") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const newContent = 
      content.substring(0, start) + 
      imageTag + 
      content.substring(start);
    
    setContent(newContent);
  };

  const handlePublish = () => {
    if (!title) {
      toast.error("Please enter a title for your blog post");
      return;
    }

    if (!category) {
      toast.error("Please select a category for your blog post");
      return;
    }

    if (!content) {
      toast.error("Please add some content to your blog post");
      return;
    }

    setIsSubmitting(true);

    // Simulate publishing process
    setTimeout(() => {
      toast.success("Blog post published successfully!");
      setIsSubmitting(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-xl p-6 mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-6">Create New Blog Post</h1>

            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter blog title..." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt/Summary (will appear in previews)</Label>
                <Textarea 
                  id="excerpt" 
                  placeholder="Enter a brief summary of your post..." 
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={category} 
                    onValueChange={setCategory}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="cover-image">Cover Image</Label>
                  <div className="mt-2">
                    {coverImage ? (
                      <div className="relative mb-3">
                        <img 
                          src={coverImage} 
                          alt="Cover preview" 
                          className="w-full h-32 object-cover rounded-md" 
                        />
                        <Button 
                          variant="destructive" 
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setCoverImage(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : null}
                    <Input
                      id="cover-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="editor">Content</Label>
                <div className="bg-secondary rounded-t-md p-2 mt-2 flex flex-wrap gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("bold")}
                    title="Bold"
                  >
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("italic")}
                    title="Italic"
                  >
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("underline")}
                    title="Underline"
                  >
                    <Underline className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("h1")}
                    title="Heading 1"
                  >
                    <Heading1 className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("h2")}
                    title="Heading 2"
                  >
                    <Heading2 className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("ul")}
                    title="Bullet List"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => formatText("ol")}
                    title="Numbered List"
                  >
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={insertImage}
                    title="Insert Image"
                  >
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                </div>
                <Tabs defaultValue="write">
                  <TabsList className="bg-secondary rounded-none border-x border-t border-white/10">
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  <TabsContent value="write" className="mt-0">
                    <Textarea 
                      id="editor" 
                      placeholder="Write your blog content here... Use the formatting buttons above to style your text."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[400px] rounded-t-none"
                    />
                  </TabsContent>
                  <TabsContent value="preview" className="mt-0">
                    <div 
                      className="min-h-[400px] p-4 border border-white/10 rounded-b-md bg-background prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: content || "<p class='text-gray-400'>No content to preview</p>" }}
                    />
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex justify-end gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handlePublish}
                  disabled={isSubmitting}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <>Publishing...</>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Publish Post
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WriteBlog;
