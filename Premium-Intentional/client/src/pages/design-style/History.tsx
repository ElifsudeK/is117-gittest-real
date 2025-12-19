import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function HistoryPage() {
  const timeline = [
    { year: "1920s", title: "Bauhaus", desc: "Form follows function. The roots of modernism." },
    { year: "1950s", title: "Swiss Style", desc: "Grid systems, sans-serif typography, and objective photography." },
    { year: "1960s", title: "Scandinavian Design", desc: "Adding warmth, natural materials, and democratization of design." },
    { year: "2010s", title: "Digital Product Design", desc: "Flat design removing skeuomorphism for screen clarity." },
    { year: "2024", title: "Humanist Minimalism", desc: "Reintroducing texture, depth, and personality to sterile interfaces." },
  ];

  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Design System</a></Link>
        <h1 className="text-4xl font-serif mb-12">Design History</h1>
        
        <div className="border-l-2 border-border ml-4 md:ml-8 space-y-12 pl-8 md:pl-12 relative">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[41px] md:-left-[57px] top-1 w-5 h-5 rounded-full border-4 border-background bg-primary" />
              <div className="text-sm font-bold text-primary/60 mb-1">{item.year}</div>
              <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
              <p className="text-muted-foreground max-w-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
