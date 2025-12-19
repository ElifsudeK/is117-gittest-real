import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, History, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesignHub() {
  const modules = [
    { title: "History", icon: History, href: "/design_style/history", desc: "Evolution of the aesthetic." },
    { title: "Core Principles", icon: Lightbulb, href: "/design_style/principles", desc: "Design philosophy & approach." },
    { title: "References", icon: BookOpen, href: "/design_style/references", desc: "Inspiration and resources." },
  ];

  return (
    <Layout>
      <Section className="bg-secondary/20">
        <Link href="/">
          <a className="inline-block mb-8 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest">← Back to Home</a>
        </Link>
        <h1 className="text-5xl font-serif mb-6">Design System</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          The foundational elements that define Nordic Minimalism and humanist design philosophy.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((mod, i) => (
            <Link key={i} href={mod.href}>
              <a className="group block h-full">
                <Card className="h-full transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/20">
                  <CardHeader>
                    <mod.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <CardTitle className="font-serif text-2xl">{mod.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{mod.desc}</p>
                    <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
