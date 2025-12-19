import { ClientLayout } from "@/components/layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { assets, clientServices } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ClientHome() {
  return (
    <ClientLayout>
      {/* Hero */}
      <div className="relative h-[80vh] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={assets.client.hero} alt="Studio" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-sm"
          >
            Light. Space. Emotion.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl tracking-wide mb-10 font-light"
          >
            A contemporary photography studio for brands and individuals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/client_site/gallery">
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-10 py-6 text-xs uppercase tracking-[0.2em]">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-400 block mb-4">What We Do</span>
          <h2 className="text-3xl font-light text-gray-900 uppercase tracking-wide">Studio Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {clientServices.map((service, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="h-64 bg-gray-100 mb-6 overflow-hidden relative">
                 <img 
                   src={i === 0 ? assets.client.service1 : i === 1 ? assets.client.service2 : `https://picsum.photos/seed/${50 + i}/800/600`}
                   alt={service.name}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <h3 className="text-lg uppercase tracking-widest font-medium mb-2">{service.name}</h3>
              <p className="text-gray-500 text-sm mb-4">Starting at {service.price}</p>
              <Link href="/client_site/services"><a className="text-xs underline underline-offset-4 decoration-gray-300 hover:decoration-gray-900 transition-all">Learn More</a></Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
           <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-gray-600 mb-8">
             "NordFrame captured exactly what our brand stands for. Clean, honest, and beautiful imagery that elevated our entire launch."
           </blockquote>
           <cite className="not-italic text-xs uppercase tracking-widest font-bold text-gray-900">
             — Sarah Jenkins, Creative Director
           </cite>
        </div>
      </div>
    </ClientLayout>
  );
}
