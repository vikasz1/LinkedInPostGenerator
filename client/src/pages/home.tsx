import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LinkedinIcon, Clock, TrendingUp } from "lucide-react";
import { PostGeneratorForm } from "@/components/post-generator-form";
import { PostVariations } from "@/components/post-variations";
import { Card, CardContent } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { toast } from "@/hooks/use-toast";
import type { PostGenerationRequest, PostGenerationResponse, GeneratedPost } from "@shared/schema";

export default function Home() {
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPost[]>([]);
  const [showResults, setShowResults] = useState(false);

  const generatePostsMutation = useMutation({
    mutationFn: async (data: PostGenerationRequest): Promise<PostGenerationResponse> => {
      const response = await apiRequest("POST", "/api/generate-posts", data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success && data.posts) {
        setGeneratedPosts(data.posts);
        setShowResults(true);
        // Scroll to results
        setTimeout(() => {
          document.getElementById("results-section")?.scrollIntoView({ 
            behavior: "smooth", 
            block: "start" 
          });
        }, 100);
      } else {
        toast({
          title: "Generation Failed",
          description: data.error || "Something went wrong while generating your posts. Please try again.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate posts. Please check your connection and try again.",
        variant: "destructive",
      });
    },
  });

  const handleGeneratePosts = (data: PostGenerationRequest) => {
    generatePostsMutation.mutate(data);
  };

  const handleRegenerateAll = () => {
    setShowResults(false);
    setGeneratedPosts([]);
    // Scroll back to form
    document.getElementById("generator-form")?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <LinkedinIcon className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">PostGen</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-secondary hover:text-primary transition-colors duration-200">
                About
              </a>
              <a href="#pricing" className="text-secondary hover:text-primary transition-colors duration-200">
                Pricing
              </a>
              <a href="#faq" className="text-secondary hover:text-primary transition-colors duration-200">
                FAQ
              </a>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md text-secondary hover:text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left side - Headline and description */}
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                  Create Professional 
                  <span className="text-primary"> LinkedIn Posts</span> 
                  in Seconds
                </h1>
                <p className="text-xl text-secondary leading-relaxed mb-8">
                  Transform your ideas into engaging LinkedIn content with AI. Choose your tone, set your length, and generate three professional variations instantly.
                </p>
                <div className="flex items-center space-x-4 text-secondary">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span>Save hours of writing time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span>Boost engagement</span>
                  </div>
                </div>
              </div>

              {/* Right side - Abstract pattern */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
                <div className="relative p-8">
                  {/* Abstract LinkedIn-style pattern */}
                  <div className="grid grid-cols-4 gap-4 opacity-20">
                    <div className="h-16 bg-primary rounded-lg"></div>
                    <div className="h-12 bg-accent rounded-lg mt-4"></div>
                    <div className="h-20 bg-primary/60 rounded-lg"></div>
                    <div className="h-8 bg-accent/60 rounded-lg mt-8"></div>
                    <div className="h-12 bg-accent/40 rounded-lg"></div>
                    <div className="h-16 bg-primary/40 rounded-lg"></div>
                    <div className="h-8 bg-primary rounded-lg mt-4"></div>
                    <div className="h-14 bg-accent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <div id="generator-form">
          <PostGeneratorForm 
            onSubmit={handleGeneratePosts}
            isLoading={generatePostsMutation.isPending}
          />
        </div>

        {/* Results Section */}
        <div id="results-section">
          {showResults && (
            <PostVariations
              posts={generatedPosts}
              isLoading={generatePostsMutation.isPending}
              onRegenerateAll={handleRegenerateAll}
            />
          )}
        </div>

        {/* Feature Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                Why Professionals Choose PostGen
              </h2>
              <p className="text-secondary">Powerful features designed for busy professionals</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
                  <p className="text-secondary">
                    Generate three unique post variations in under 30 seconds. No more staring at blank screens.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Multiple Tones</h3>
                  <p className="text-secondary">
                    Professional, thought leadership, or conversational - choose the tone that matches your brand.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg mb-4">
                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Optimized Length</h3>
                  <p className="text-secondary">
                    Choose from 300, 400, or 500 words - lengths proven to maximize LinkedIn engagement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <LinkedinIcon className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">PostGen</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-secondary">
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PostGen. Empowering professionals to create better LinkedIn content.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
