import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground p-6">
      <h1 className="text-9xl font-serif font-medium opacity-10 mb-4">404</h1>
      <h2 className="text-3xl font-serif mb-4">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved. 
        Let's get you back on track.
      </p>
      
      <Link href="/">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Button>
      </Link>
    </div>
  );
}
