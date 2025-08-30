import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, RotateCcw, Plus, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import type { GeneratedPost } from "@shared/schema";

interface PostVariationsProps {
  posts: GeneratedPost[];
  isLoading: boolean;
  onRegenerateAll: () => void;
  className?: string;
}

export function PostVariations({ posts, isLoading, onRegenerateAll, className }: PostVariationsProps) {
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);

  const handleCopy = async (content: string, postId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedPostId(postId);
      toast({
        title: "Copied to clipboard!",
        description: "The post has been copied to your clipboard.",
        duration: 2000,
      });
      
      setTimeout(() => setCopiedPostId(null), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getThemeVariation = (index: number) => {
    const variations = [
      { label: "Variation 1", theme: "Professional Tone", badgeColor: "bg-primary" },
      { label: "Variation 2", theme: "Thought Leadership", badgeColor: "bg-accent" },
      { label: "Variation 3", theme: "Conversational", badgeColor: "bg-success" },
    ];
    return variations[index] || variations[0];
  };

  if (isLoading) {
    return (
      <section className={cn("py-8", className)}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-sm border-border">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Bot className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Generating Your LinkedIn Posts
                <span className="loading-dots"></span>
              </h3>
              <p className="text-secondary">Our AI is crafting three unique variations tailored to your preferences</p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className={cn("py-16 fade-in", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
            Your Generated LinkedIn Posts
          </h2>
          <p className="text-secondary">Choose the variation that best matches your voice and style</p>
        </div>

        {/* Desktop: Side-by-side layout, Mobile: Vertical stack */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, index) => {
            const variation = getThemeVariation(index);
            return (
              <Card key={post.id} className="post-card shadow-sm border-border overflow-hidden">
                {/* Card Header */}
                <div className="border-b border-border p-4 bg-muted/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        className={cn(variation.badgeColor, "text-white")}
                        data-testid={`badge-variation-${index + 1}`}
                      >
                        {variation.label}
                      </Badge>
                      <span className="text-sm text-secondary">{variation.theme}</span>
                    </div>
                    <span className="text-sm text-muted-foreground" data-testid={`text-word-count-${index + 1}`}>
                      ~{post.wordCount} words
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <CardContent className="p-6">
                  <div 
                    className="prose prose-sm max-w-none text-foreground leading-relaxed whitespace-pre-line"
                    data-testid={`text-post-content-${index + 1}`}
                  >
                    {post.content}
                  </div>
                </CardContent>

                {/* Card Actions */}
                <div className="border-t border-border p-4 bg-muted/10">
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={() => handleCopy(post.content, post.id)}
                      data-testid={`button-copy-${index + 1}`}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copiedPostId === post.id ? "Copied!" : "Copy Post"}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      data-testid={`button-regenerate-${index + 1}`}
                      className="text-secondary hover:text-primary"
                      title="Regenerate this variation"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Generate New Posts Button */}
        <div className="text-center mt-12">
          <Button
            onClick={onRegenerateAll}
            data-testid="button-generate-new"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            size="lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Generate New Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
