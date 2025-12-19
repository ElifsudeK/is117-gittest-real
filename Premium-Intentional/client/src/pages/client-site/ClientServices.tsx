import { ClientLayout } from "@/components/layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { clientServices } from "@/lib/data";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ClientServices() {
  return (
    <ClientLayout>
      <div className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-light uppercase tracking-widest mb-4">Services & Pricing</h1>
        <p className="text-gray-500 max-w-lg mx-auto">Transparent packages for professional needs.</p>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {clientServices.map((service, i) => (
            <div key={i} className="border border-gray-100 p-8 hover:shadow-xl hover:border-gray-200 transition-all duration-300 bg-white">
              <h3 className="text-lg uppercase tracking-widest font-medium mb-4">{service.name}</h3>
              <div className="text-4xl font-light mb-8">{service.price}</div>
              <ul className="space-y-4 mb-8">
                {service.features.map(feat => (
                  <li key={feat} className="flex items-center text-sm text-gray-600">
                    <Check className="w-3 h-3 mr-3 text-gray-900" /> {feat}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-none uppercase text-xs tracking-widest py-6" asChild>
                <Link href="/client_site/book">Select Package</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl text-center uppercase tracking-widest mb-12">Common Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="uppercase tracking-wider text-sm">Do I get the RAW files?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                We provide high-resolution edited JPEGs. RAW files can be purchased for an additional licensing fee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="uppercase tracking-wider text-sm">What is your cancellation policy?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Cancellations made 48 hours in advance are fully refundable. Within 48 hours, we retain the deposit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="uppercase tracking-wider text-sm">Do you travel?</AccordionTrigger>
              <AccordionContent className="text-gray-500">
                Yes, we are available for travel worldwide. Travel expenses are added to the custom quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </ClientLayout>
  );
}
