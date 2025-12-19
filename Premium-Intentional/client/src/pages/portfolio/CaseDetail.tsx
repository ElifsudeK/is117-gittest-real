import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function CaseDetail() {
  const [match, params] = useRoute("/portfolio/:slug");
  
  if (!match) return <NotFound />;
  
  const project = caseStudies.find(cs => cs.slug === params.slug);
  
  if (!project) return <NotFound />;

  return (
    <Layout>
      {/* Detail Hero */}
      <div className="w-full h-[60vh] relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="container mx-auto max-w-5xl">
            <Link href="/portfolio">
              <a className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
              </a>
            </Link>
            <div className="flex gap-4 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 border border-white/30 text-xs uppercase tracking-wider bg-black/20 backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{project.title}</h1>
            <p className="text-xl text-white/80 md:w-2/3">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <Section className="border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Client</h4>
            <p className="text-lg font-medium">{project.client}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</h4>
            <p className="text-lg font-medium">{project.timeline}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</h4>
            <p className="text-lg font-medium">Lead Design & Dev</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Primary Outcome</h4>
            <p className="text-lg font-medium text-emerald-600">{project.metric}</p>
          </div>
        </div>
      </Section>

      {/* Content Body */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-8 space-y-16">
            <div>
              <h2 className="text-3xl font-serif mb-6">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem} 
                <br/><br/>
                The client was facing significant operational friction due to disconnected systems. 
                Data was siloed, processes were manual, and the user experience for internal tools was neglected.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif mb-6">The Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.approach}
                <br/><br/>
                We started by mapping the entire workflow, identifying bottlenecks, and then designing a solution that prioritized clarity. 
                Visual hierarchy was used to guide users through complex data sets without overwhelming them.
              </p>
            </div>

            <div className="bg-secondary/20 p-8 md:p-12 border-l-4 border-primary">
              <h3 className="text-2xl font-serif mb-6">Key Results</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.results.map((res, i) => (
                  <div key={i}>
                    <div className="text-4xl font-bold mb-1">{res.value}</div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold mb-6 border-b pb-2">Tech Stack</h3>
              <ul className="space-y-3">
                {project.stack.map(tech => (
                  <li key={tech} className="flex items-center text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 mr-3 text-primary/60" /> {tech}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary text-primary-foreground p-8">
              <h3 className="text-2xl font-serif mb-4">Ready to build?</h3>
              <p className="text-sm text-white/70 mb-6">
                Let's apply this same rigorous methodology to your next project.
              </p>
              <Button variant="secondary" className="w-full rounded-none" asChild>
                <a href="/#contact">Request System</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section background="muted" className="text-center">
        <h2 className="text-3xl mb-8">Next Project</h2>
        <Link href="/portfolio">
          <Button variant="outline" size="lg" className="rounded-none">
            View All Work
          </Button>
        </Link>
      </Section>
    </Layout>
  );
}
