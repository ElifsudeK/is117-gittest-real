import { ClientLayout } from "@/components/layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ClientContact() {
  return (
    <ClientLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="bg-gray-50 p-12 md:p-20 flex flex-col justify-center">
          <h1 className="text-3xl font-light uppercase tracking-widest mb-8">Get In Touch</h1>
          <p className="text-gray-500 mb-12 leading-relaxed max-w-md">
            For general inquiries, press features, or collaborations, please use the form or contact us directly.
          </p>
          
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Studio</h3>
              <p className="text-gray-600">Vesterbrogade 14, Copenhagen</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold mb-1">Email</h3>
              <p className="text-gray-600">hello@nordframestudio.com</p>
            </div>
          </div>
        </div>

        <div className="p-12 md:p-20 flex flex-col justify-center">
          <form className="space-y-6 max-w-md w-full">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
              <Input className="rounded-none border-gray-200 h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
              <Input className="rounded-none border-gray-200 h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
              <Textarea className="rounded-none border-gray-200 min-h-[150px]" />
            </div>
            <Button className="w-full bg-black text-white rounded-none uppercase text-xs tracking-widest py-6">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 relative overflow-hidden grayscale">
         <div className="absolute inset-0 flex items-center justify-center text-gray-400 uppercase tracking-widest text-sm">
            Interactive Map Placeholder
         </div>
      </div>
    </ClientLayout>
  );
}
