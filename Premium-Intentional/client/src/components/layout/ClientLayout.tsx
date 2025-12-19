import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ClientNavbar() {
  const [location] = useLocation();
  
  const navLinks = [
    { href: "/client_site", label: "Home" },
    { href: "/client_site/services", label: "Services" },
    { href: "/client_site/gallery", label: "Gallery" },
    { href: "/client_site/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto max-w-6xl px-6 h-24 flex items-center justify-between">
        <Link href="/client_site">
          <a className="font-sans text-xl tracking-[0.2em] uppercase font-bold text-gray-900 hover:opacity-80 transition-opacity">
            NordFrame<span className="font-light text-gray-400">Studio</span>
          </a>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-xs uppercase tracking-widest font-medium transition-colors hover:text-black",
                  location === link.href 
                    ? "text-black border-b border-black pb-1"
                    : "text-gray-500"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <Button asChild variant="outline" className="rounded-none border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white uppercase text-xs tracking-widest px-8">
            <Link href="/client_site/book">Book Session</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export function ClientFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-20 text-center">
      <div className="container mx-auto px-6">
        <h3 className="font-sans text-2xl tracking-[0.2em] uppercase font-bold text-gray-900 mb-8">
          NordFrame<span className="font-light text-gray-400">Studio</span>
        </h3>
        <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
          Capturing moments with clarity, light, and intention. Based in Copenhagen, available worldwide.
        </p>
        <div className="flex justify-center gap-6 text-xs uppercase tracking-widest text-gray-400 mb-12">
          <a href="#" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Pinterest</a>
          <a href="#" className="hover:text-black transition-colors">Email</a>
        </div>
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} NordFrame Studio. Part of Studio Nordic Portfolio.
        </p>
      </div>
    </footer>
  );
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 selection:bg-gray-900 selection:text-white">
      <ClientNavbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <ClientFooter />
    </div>
  );
}
