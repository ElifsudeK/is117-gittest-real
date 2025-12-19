import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const principles = [
  { 
    title: "Clarity", 
    desc: "Remove everything that does not support the core message.",
    vibes: "Clean lines, purposeful white space, high contrast." 
  },
  { 
    title: "Warmth", 
    desc: "Minimalism should invite, not alienate.",
    vibes: "Soft grays with beige undertones, warm accent colors, organic shapes." 
  },
  { 
    title: "Intent", 
    desc: "Every pixel must have a reason for existing.",
    vibes: "Deliberate typography choices, measured spacing, functional beauty." 
  },
];

const colorVibe = {
  palette: [
    { name: "Background Warm", color: "#FDFBF7", desc: "Welcoming, not sterile" },
    { name: "Foreground Deep", color: "#262620", desc: "Strong, readable, warm black" },
    { name: "Secondary Soft", color: "#F0EDEA", desc: "Breathing room, approachable" },
    { name: "Accent Warm Sand", color: "#E8DFD5", desc: "Humanizes the space" },
  ],
  mood: "The palette leans into warm neutrals rather than cold whites. This creates an inviting atmosphere while maintaining the clarity of minimalism."
};

export default function PrinciplesPage() {
  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Design System</a></Link>
        <h1 className="text-4xl font-serif mb-6">Core Principles</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">The philosophy guiding every design decision.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {principles.map((p, i) => (
            <Card key={i} className="bg-secondary/10 border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-xl font-serif">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground italic">"{p.vibes}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl font-serif mb-8">Color Vibes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {colorVibe.palette.map((col, i) => (
              <div key={i} className="text-center">
                <div 
                  className="w-full aspect-square rounded-lg mb-3 border border-border shadow-sm" 
                  style={{ backgroundColor: col.color }}
                />
                <p className="font-medium text-sm">{col.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{col.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-secondary/20 p-6 border-l-4 border-primary">
            <p className="text-muted-foreground leading-relaxed">{colorVibe.mood}</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
