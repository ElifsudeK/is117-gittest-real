import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Work" },
    { href: "/design_style", label: "Design System" },
    { href: "/client_site", label: "Client Site" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container-wide h-20 flex items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl font-medium tracking-tight hover:opacity-80 transition-opacity">
            Studio Nordic
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  location === link.href || (link.href !== "/" && location.startsWith(link.href))
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button asChild variant="default" className="rounded-none px-6">
            <a href="/#contact">Book a Call</a>
          </Button>
        </div>

        {/* Mobile menu placeholder - implementation if needed later */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
             <span className="sr-only">Menu</span>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16">
      <div className="container-wide grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link href="/">
            <a className="font-serif text-xl font-medium tracking-tight mb-4 block">
              Studio Nordic
            </a>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Crafting digital experiences with intentionality, warmth, and Nordic minimalism.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/portfolio"><a className="hover:text-foreground/70 transition-colors">Work</a></Link></li>
            <li><Link href="/design_style"><a className="hover:text-foreground/70 transition-colors">Design System</a></Link></li>
            <li><Link href="/client_site"><a className="hover:text-foreground/70 transition-colors">Client Example</a></Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Social</h4>
           <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-foreground/70 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-foreground/70 transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-foreground/70 transition-colors">Instagram</a></li>
           </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
          <a href="mailto:hello@studionordic.com" className="text-sm hover:underline underline-offset-4">hello@studionordic.com</a>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Studio Nordic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
