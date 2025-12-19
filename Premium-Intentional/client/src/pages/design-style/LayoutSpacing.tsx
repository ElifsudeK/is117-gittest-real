import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function LayoutSpacingPage() {
  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Hub</a></Link>
        <h1 className="text-4xl font-serif mb-12">Layout & Spacing</h1>
        
        <div className="space-y-12">
          <div className="bg-secondary/10 p-8">
            <h3 className="mb-4 font-mono text-sm">Spacing Scale</h3>
            <div className="flex items-end gap-4">
              <div className="w-4 h-4 bg-primary/20"></div>
              <div className="w-8 h-8 bg-primary/40"></div>
              <div className="w-16 h-16 bg-primary/60"></div>
              <div className="w-24 h-24 bg-primary/80"></div>
              <div className="w-32 h-32 bg-primary"></div>
            </div>
          </div>
          
          <div className="bg-secondary/10 p-8">
             <h3 className="mb-4 font-mono text-sm">Container Widths</h3>
             <div className="space-y-4">
               <div className="w-full h-8 bg-border flex items-center justify-center text-xs">Full</div>
               <div className="w-3/4 h-8 bg-border flex items-center justify-center text-xs">Wide (1200px)</div>
               <div className="w-1/2 h-8 bg-border flex items-center justify-center text-xs">Default (Container)</div>
               <div className="w-1/3 h-8 bg-border flex items-center justify-center text-xs">Narrow (Reading)</div>
             </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
