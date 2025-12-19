import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PalettePage() {
  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Hub</a></Link>
        <h1 className="text-4xl font-serif mb-12">Palette & Typography</h1>
        
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl mb-6">Color System</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-24 bg-background border border-border"></div>
                <p className="text-xs font-mono">Background</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-foreground"></div>
                <p className="text-xs font-mono">Foreground</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-secondary"></div>
                <p className="text-xs font-mono">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-accent"></div>
                <p className="text-xs font-mono">Accent</p>
              </div>
               <div className="space-y-2">
                <div className="h-24 bg-muted"></div>
                <p className="text-xs font-mono">Muted</p>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-2xl mb-6">Typography</h2>
             <div className="space-y-8 border-l px-8">
               <div>
                 <p className="text-sm text-muted-foreground mb-2">Display (Playfair Display)</p>
                 <div className="text-6xl font-serif">Aa Bb Cc</div>
               </div>
               <div>
                 <p className="text-sm text-muted-foreground mb-2">Body (Inter)</p>
                 <div className="text-6xl font-sans">Aa Bb Cc</div>
               </div>
               <div>
                 <p className="text-sm text-muted-foreground mb-2">Monospace (JetBrains Mono)</p>
                 <div className="text-4xl font-mono">print("Hello World")</div>
               </div>
             </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
