import { Button } from "@/components/ui/button";
import { Lock, Brain, Shield, Zap, MessageSquare, Check, Github } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-background font-bold">
              K
            </div>
            <span className="font-semibold text-lg">Keep.AI</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://app.getkeep.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </Button>
            <a
              href="https://github.com/nostrband/keep.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition p-2"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32 flex flex-col items-center text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your life stays private.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Keep.AI is your personal assistant that remembers, plans, and helps — without
            sending a single byte of your data to the cloud.
          </p>

          {/* Visual: Glowing Chat Window */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg blur-2xl animate-glow" />
              <div className="relative bg-card border border-border rounded-lg p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20" />
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-border rounded w-3/4" />
                      <div className="h-2 bg-border rounded w-1/2" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-accent/20 rounded-lg px-4 py-2 w-2/3">
                      <div className="h-2 bg-accent/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-background font-semibold"
              asChild
            >
              <a
                href="https://github.com/nostrband/keep.ai/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card"
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn how it works
            </Button>
          </div>
        </div>
      </section>

      {/* Core Promise Section */}
      <section className="container py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Finally, an assistant that's truly yours.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Remembers for you",
              description:
                "Never forget important details. Keep.AI learns your patterns and surfaces what matters.",
            },
            {
              icon: Zap,
              title: "Helps proactively",
              description:
                "Get suggestions and reminders before you even ask. Your assistant works quietly in the background.",
            },
            {
              icon: Lock,
              title: "Keeps it private",
              description:
                "All processing happens on your device. No servers, no tracking, no data sales.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent/50 transition animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Private by Design Section */}
      <section id="privacy" className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Private by Design.</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Privacy isn't a feature. It's the foundation. Keep.AI is built from the ground up to
            protect your data and autonomy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "Local-first architecture",
                description: "Your data never leaves your device. All processing is local.",
              },
              {
                icon: Lock,
                title: "End-to-end encryption",
                description: "Even if data is synced, it's encrypted with keys only you control.",
              },
              {
                icon: Check,
                title: "Zero access policy",
                description: "We can't access your data. We don't have the keys, and we don't want them.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition"
              >
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-card border border-accent/30 rounded-lg p-8 italic text-center">
            <p className="text-lg text-foreground">
              "Keep.AI can't leak what it never sees."
            </p>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section id="how-it-works" className="container py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          An assistant that works quietly for you.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Remember",
              snippet: "Save a note about your project deadline. Keep.AI reminds you three days before.",
              icon: MessageSquare,
            },
            {
              title: "Plan",
              snippet:
                "Tell Keep.AI your goals. It breaks them into steps and tracks your progress privately.",
              icon: Brain,
            },
            {
              title: "Summarize",
              snippet:
                "End of day recap: what you accomplished, what's next, and what needs attention.",
              icon: Zap,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition"
            >
              <item.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <div className="bg-background/50 rounded p-4 border border-border">
                <p className="text-sm text-muted-foreground italic">{item.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="container py-20 md:py-32">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple. Private. Beautiful.</h2>
          <p className="text-lg text-muted-foreground">
            A clean interface designed for focus, not distraction.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 shadow-2xl">
            <div className="space-y-4">
              {/* Chat mockup */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-border rounded w-3/4" />
                  <div className="h-3 bg-border rounded w-1/2" />
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-accent/20 rounded-lg px-4 py-3 max-w-xs">
                  <div className="h-3 bg-accent/40 rounded w-full" />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-border rounded w-full" />
                  <div className="h-3 bg-border rounded w-5/6" />
                  <div className="h-3 bg-border rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Because privacy is freedom.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your data is yours. Your thoughts are yours. Your life is yours. In a world where
            every interaction is tracked and sold, Keep.AI is different. We believe you deserve an
            assistant that respects your autonomy and protects your privacy. No ads. No tracking.
            No compromises.
          </p>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="container py-20 md:py-32">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Start keeping your life private today.
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Download Keep.AI and take control of your digital privacy.
          </p>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-background font-semibold"
              asChild
            >
              <a
                href="https://github.com/nostrband/keep.ai/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-background font-bold">
                K
              </div>
              <span className="font-semibold">Keep.AI</span>
            </div>

            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition">
                Privacy
              </a>
              <a href="#about" className="hover:text-foreground transition">
                About
              </a>
              <a href="mailto:artur@nostr.band" className="hover:text-foreground transition">
                Contact
              </a>
            </div>

            <p className="text-sm text-muted-foreground text-center md:text-right">
              Keep.AI — your life stays private.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
