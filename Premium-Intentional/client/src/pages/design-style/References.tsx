import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ReferencesPage() {
  const refs = [
    { title: "Nielsen Norman Group", note: "Usability heuristics and research-backed design." },
    { title: "Dieter Rams: Ten Principles", note: "\"Good design is as little design as possible.\"" },
    { title: "Laws of UX", note: "Psychology-driven principles for interface design." },
    { title: "Typewolf", note: "Font pairing inspiration and typography trends." },
  ];

  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Design System</a></Link>
        <h1 className="text-4xl font-serif mb-12">References & Inspiration</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {refs.map((ref, i) => (
            <div key={i} className="p-6 border border-border hover:bg-secondary/10 transition-colors rounded-sm">
              <h3 className="font-serif text-lg mb-2">{ref.title}</h3>
              <p className="text-muted-foreground text-sm">{ref.note}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
