import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Elegant Restraint
 * - Luxury wellness aesthetic with editorial design
 * - Warm taupe, soft sage, and deep burgundy palette
 * - Playfair Display for headlines, Lato for body
 * - Subtle, slow interactions reflecting "Rest and Intention"
 */

const tiers = [
  {
    name: "Keynote",
    price: "$7,500",
    duration: "60 minutes",
    description: "High-impact address to galvanize the entire organization",
    impact: "Establishes the business case for Rest as a performance metric across all levels",
    value: "Awareness & Alignment",
  },
  {
    name: "Half-Day Intensive",
    price: "$8,500",
    duration: "3 hours",
    description: "Deep-dive session focused on actionable, immediate behavioral shifts",
    impact: "Provides leaders with the tools to implement 'Intention as Infrastructure' immediately",
    value: "Skill Transfer & Adoption",
  },
  {
    name: "Workshop Series",
    price: "$9,500",
    duration: "Full day",
    description: "Modular engagement designed for sustained, cohort-based learning",
    impact: "Builds a shared language and internal support system for high-value leaders, driving retention",
    value: "Systemic Change & Retention",
  },
  {
    name: "Executive Roundtable",
    price: "$10,000",
    duration: "90 minutes",
    description: "Exclusive, confidential session for senior leadership and C-Suite",
    impact: "Secures top-down commitment and integrates the framework into policy",
    value: "Strategic Planning & Buy-in",
  },
];

export default function Home() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: '"Playfair Display", serif' }}>
            Elevated Movements
          </div>
          <div className="flex items-center gap-8">
            <a href="#partnership" className="text-sm text-foreground hover:text-primary transition-colors duration-500" style={{ fontFamily: '"Lato", sans-serif' }}>
              Partnership
            </a>
            <a href="#tiers" className="text-sm text-foreground hover:text-primary transition-colors duration-500" style={{ fontFamily: '"Lato", sans-serif' }}>
              Options
            </a>
            <Button
              className="bg-primary text-primary-foreground hover:bg-accent transition-colors duration-500"
              size="sm"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/40" />
        <div className="relative container max-w-3xl mx-auto px-4 text-center">
          <div className="mb-6 inline-block">
            <span className="text-sm font-semibold text-accent tracking-widest uppercase" style={{ fontFamily: '"Lato", sans-serif' }}>
              Strategic Partnership
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
            Securing Human Capital
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
            Reverse asset depreciation among high-performing women of color with evidence-based Gallup Strengths coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-500 px-8"
            >
              Explore Partnership <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 transition-all duration-500"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section id="partnership" className="py-20 md:py-32 bg-background border-t border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                The Strategic Imperative
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                High-performing women of color are a critical, high-value asset within your organization's leadership pipeline. Yet systemic burnout is creating an unacceptable risk of talent flight.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                The Elevated Movements B2B Partnership, anchored by Shria's certification as a <span className="font-bold text-accent">Gallup Strengths Coach</span>, provides the superior, asset-based framework necessary to institutionalize Rest and Intention as core leadership infrastructure.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Evidence-Based Approach</p>
                    <p className="text-sm text-foreground/70">Gallup research shows individuals who focus on their strengths are six times more likely to be engaged at work.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Asset-Based Framework</p>
                    <p className="text-sm text-foreground/70">Unlike deficit-based models, we maximize innate talent to achieve peak performance and sustained engagement.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground">Financial Impact</p>
                    <p className="text-sm text-foreground/70">Mitigate the $360k–$2.25M cost of losing a single high-value leader with a strategic investment of $7.5k–$10k.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border border-border">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>About Shria</h3>
                <div className="h-1 w-12 bg-accent mb-6" />
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                Shria is a certified Gallup Strengths Coach with a deep commitment to helping high-performing women of color build sustainable leadership practices rooted in their natural talents.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                Through the Elevated Movements framework, Shria integrates Rest and Intention as core infrastructure—not as luxuries, but as strategic imperatives for sustained performance and organizational health.
              </p>
              <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded">
                <p className="text-sm text-foreground" style={{ fontFamily: '"Lato", sans-serif' }}>
                  <span className="font-bold">Gallup Certification:</span> Strengths Coach, specializing in executive leadership development and organizational culture transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section id="tiers" className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
              Partnership Tiers
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto" style={{ fontFamily: '"Lato", sans-serif' }}>
              Four distinct engagement options, each designed to deliver immediate strategic impact and secure Q2 availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="group relative bg-background rounded-lg border border-border p-8 transition-all duration-500 hover:shadow-lg hover:border-primary cursor-pointer"
                onMouseEnter={() => setHoveredTier(index)}
                onMouseLeave={() => setHoveredTier(null)}
              >
                {/* Accent bar on hover */}
                <div
                  className={`absolute top-0 left-0 h-1 bg-accent rounded-t-lg transition-all duration-500 ${
                    hoveredTier === index ? "w-full" : "w-0"
                  }`}
                />

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                    {tier.name}
                  </h3>
                  <p className="text-accent font-bold text-lg">{tier.price}</p>
                  <p className="text-sm text-foreground/60 mt-1" style={{ fontFamily: '"Lato", sans-serif' }}>{tier.duration}</p>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed" style={{ fontFamily: '"Lato", sans-serif' }}>
                  {tier.description}
                </p>

                <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded mb-6">
                  <p className="text-sm text-foreground" style={{ fontFamily: '"Lato", sans-serif' }}>
                    <span className="font-bold">Impact:</span> {tier.impact}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-secondary">
                    {tier.value}
                  </span>
                  <ArrowRight
                    className={`h-5 w-5 text-primary transition-all duration-500 ${
                      hoveredTier === index ? "translate-x-2" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground border-t border-border">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Secure Your Q2 Engagement
          </h2>
          <p className="text-lg mb-8 leading-relaxed opacity-90" style={{ fontFamily: '"Lato", sans-serif' }}>
            The path to securing your high-performing women of color is clear. Authorize your preferred tier to initiate the Statement of Work and lock in the Q2 delivery date.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-500 px-8"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold text-primary mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                Elevated Movements
              </h4>
              <p className="text-sm text-foreground/70" style={{ fontFamily: '"Lato", sans-serif' }}>
                Strategic partnerships for human capital development and organizational transformation.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#partnership" className="text-foreground/70 hover:text-primary transition-colors duration-300">Partnership</a></li>
                <li><a href="#tiers" className="text-foreground/70 hover:text-primary transition-colors duration-300">Options</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Get in Touch</h4>
              <p className="text-sm text-foreground/70" style={{ fontFamily: '"Lato", sans-serif' }}>
                Ready to transform your leadership pipeline?
              </p
              <p className="text-sm text-foreground/70" style={{ fontFamily: "'Lato', sans-serif" }}>
              <a href="tel:+14085982650" className="text-primary hover:underline">(408) 598-2650</a>
              </p> 
              
              
              
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60" style={{ fontFamily: '"Lato", sans-serif' }}>
            <p>&copy; 2026 Elevated Movements. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
/
