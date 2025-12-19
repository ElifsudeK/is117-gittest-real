import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { assets, services, founder } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.hero} 
            alt="Minimalist Workspace" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6"
          >
            Design with <br/> <span className="italic text-muted-foreground">Intention.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Crafting digital systems that blend Nordic minimalism with warm, humanist functionality. No clutter, just clarity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/portfolio">
              <Button size="lg" className="rounded-none text-base px-8 h-12">
                View Work
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="rounded-none text-base px-8 h-12 bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80" asChild>
              <a href="#contact">Book a Call</a>
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* What I Do Section */}
      <Section container="wide" spacing="loose">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-3xl md:text-4xl mb-6">Expertise</h2>
            <p className="text-muted-foreground">
              Specialized in bridging the gap between aesthetic design and functional automation systems.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Card key={i} className="border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors duration-300 shadow-none rounded-sm">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Choose Your Path */}
      <Section background="muted" spacing="loose">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Explore the System</h2>
          <p className="text-muted-foreground">Select a pathway to discover more.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Portfolio", desc: "Case studies & results", link: "/portfolio", bg: "bg-white" },
            { title: "Design System", desc: "The philosophy behind the work", link: "/design_style", bg: "bg-[#FDFBF7]" },
            { title: "Client Site", desc: "Live example: NordFrame Studio", link: "/client_site", bg: "bg-white" },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <a className="group block h-full">
                <div className={cn("h-full p-10 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500 flex flex-col justify-between min-h-[300px]", item.bg)}>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4 block">0{i+1}</span>
                    <h3 className="text-2xl font-serif mb-2 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                  <div className="self-end opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Section>

      {/* About Teaser */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] overflow-hidden bg-secondary/20 max-w-md mx-auto relative">
              <img 
                src={assets.portrait} 
                alt="Elifsude" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-medium uppercase tracking-wider">
                {founder.title}
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-primary/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-primary/20 -z-10" />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl mb-8 leading-tight">
              Humanizing the <br/> digital process.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I believe that automation shouldn't feel robotic, and minimalism shouldn't feel empty. 
                My work exists at the intersection of rigorous system architecture and warm, intuitive design.
              </p>
              <p>
                Based in the Nordics, working globally with brands that value clarity over noise.
              </p>
            </div>
            <div className="mt-10">
              <Link href="/portfolio">
                <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white px-8 h-12">
                  Read My Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Social Proof */}
      <Section background="muted" spacing="default" className="border-t border-border/50">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
          {["LogiTech", "SupportFlow", "Balance", "NordFrame", "Apex"].map((brand) => (
            <span key={brand} className="text-xl font-serif font-bold tracking-tight">{brand}</span>
          ))}
        </div>
      </Section>

      <div id="contact"></div>
    </Layout>
  );
}
