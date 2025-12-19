import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ExamplesPage() {
  return (
    <Layout>
      <Section>
        <Link href="/design_style"><a className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"><ArrowLeft className="w-4 h-4 mr-2"/> Back to Hub</a></Link>
        <h1 className="text-4xl font-serif mb-12">Component Examples</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="space-y-4">
             <div className="bg-background p-8 border border-border shadow-sm">
                <h3 className="text-xl font-serif mb-2">Card Component</h3>
                <p className="text-muted-foreground text-sm mb-4">A standard content container.</p>
                <div className="h-32 bg-secondary/30 rounded-sm"></div>
             </div>
             <p className="text-xs text-muted-foreground text-center">Standard Card</p>
           </div>
           
           <div className="space-y-4">
             <div className="bg-primary p-8 text-primary-foreground shadow-lg">
                <h3 className="text-xl font-serif mb-2">Dark Surface</h3>
                <p className="text-white/70 text-sm mb-4">Inverted context for emphasis.</p>
                <div className="h-32 bg-white/10 rounded-sm backdrop-blur-sm"></div>
             </div>
             <p className="text-xs text-muted-foreground text-center">High Contrast</p>
           </div>
        </div>
      </Section>
    </Layout>
  );
}
