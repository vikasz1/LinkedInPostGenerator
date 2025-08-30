import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { postGenerationRequestSchema, type PostGenerationRequest } from "@shared/schema";
import { Wand2, RotateCcw, Hash } from "lucide-react";

interface PostGeneratorFormProps {
  onSubmit: (data: PostGenerationRequest) => void;
  isLoading: boolean;
}

export function PostGeneratorForm({ onSubmit, isLoading }: PostGeneratorFormProps) {
  const [selectedTheme, setSelectedTheme] = useState<"professional" | "thought-leadership" | "conversational">("professional");
  const [selectedLength, setSelectedLength] = useState<300 | 400 | 500>(400);

  const form = useForm<PostGenerationRequest>({
    resolver: zodResolver(postGenerationRequestSchema),
    defaultValues: {
      topic: "",
      theme: "professional",
      length: 400,
      includeHashtags: true,
    },
  });

  const watchedTopic = form.watch("topic");
  const charCount = watchedTopic?.length || 0;

  const handleSubmit = (data: PostGenerationRequest) => {
    onSubmit({
      ...data,
      theme: selectedTheme,
      length: selectedLength,
    });
  };

  const handleReset = () => {
    form.reset();
    setSelectedTheme("professional");
    setSelectedLength(400);
  };

  const themeOptions = [
    { value: "professional" as const, label: "Professional" },
    { value: "thought-leadership" as const, label: "Thought Leadership" },
    { value: "conversational" as const, label: "Conversational/Storytelling" },
  ];

  const lengthOptions = [
    { value: 300 as const, label: "Short (~300 words)" },
    { value: 400 as const, label: "Medium (~400 words)" },
    { value: 500 as const, label: "Long (~500 words)" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-sm border-border">
          <CardContent className="p-6 lg:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-3">
                Generate Your LinkedIn Post
              </h2>
              <p className="text-secondary">Enter your topic and customize your post preferences</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                {/* Topic Input */}
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground">
                        Topic or Description
                        <span className="text-destructive ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          data-testid="input-topic"
                          placeholder="Enter the topic or idea you want to create a LinkedIn post about. E.g., 'The importance of networking in career growth' or 'How AI is transforming marketing strategies'"
                          className="h-32 resize-none focus:ring-2 focus:ring-ring transition-all duration-200"
                          maxLength={500}
                        />
                      </FormControl>
                      <div className="flex justify-between items-center text-sm">
                        <div className="text-muted-foreground">
                          {charCount > 0 && charCount <= 10 && (
                            <span>Tip: More detail helps generate better posts.</span>
                          )}
                        </div>
                        <div className="text-muted-foreground">{charCount}/500</div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Theme Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground">Post Theme</label>
                  <div className="flex flex-wrap gap-2">
                    {themeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        data-testid={`button-theme-${option.value}`}
                        onClick={() => setSelectedTheme(option.value)}
                        className={cn(
                          "segmented-pill px-4 py-2 rounded-full border border-border text-sm font-medium transition-colors",
                          selectedTheme === option.value
                            ? "active bg-primary text-primary-foreground"
                            : "bg-background text-foreground hover:bg-muted"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Choose the tone that best fits your personal brand and audience
                  </p>
                </div>

                {/* Length Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-foreground">Post Length</label>
                  <div className="flex flex-wrap gap-2">
                    {lengthOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        data-testid={`button-length-${option.value}`}
                        onClick={() => setSelectedLength(option.value)}
                        className={cn(
                          "segmented-pill px-4 py-2 rounded-full border border-border text-sm font-medium transition-colors",
                          selectedLength === option.value
                            ? "active bg-primary text-primary-foreground"
                            : "bg-background text-foreground hover:bg-muted"
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Longer posts often perform better on LinkedIn's algorithm
                  </p>
                </div>

                {/* Hashtag Toggle */}
                <FormField
                  control={form.control}
                  name="includeHashtags"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <Hash className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium text-foreground">Add Hashtags</div>
                            <div className="text-sm text-secondary">
                              Include 3-5 relevant hashtags to increase discoverability
                            </div>
                          </div>
                        </div>
                        <FormControl>
                          <Switch
                            data-testid="switch-hashtags"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    data-testid="button-generate"
                    disabled={isLoading}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-6 h-auto"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        Generate Posts
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    data-testid="button-reset"
                    onClick={handleReset}
                    className="sm:flex-initial border-border text-foreground font-medium py-3 px-6 h-auto"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
