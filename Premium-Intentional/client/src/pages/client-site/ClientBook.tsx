import { ClientLayout } from "@/components/layout/ClientLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  package: z.string().min(1, "Please select a package."),
  date: z.string().optional(),
  message: z.string().optional(),
});

export default function ClientBook() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      package: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
    toast({
      title: "Request Received",
      description: "We will be in touch shortly to confirm your session.",
    });
  }

  if (submitted) {
    return (
      <ClientLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-light uppercase tracking-widest mb-6">Thank You</h1>
          <p className="text-gray-500 max-w-md mb-8">
            Your booking request has been received. We'll review your details and get back to you within 24 hours.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-none uppercase text-xs tracking-widest">
            Submit Another Request
          </Button>
        </div>
      </ClientLayout>
    );
  }

  return (
    <ClientLayout>
      <div className="container mx-auto px-6 py-20 max-w-xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-light uppercase tracking-widest mb-4">Book a Session</h1>
          <p className="text-gray-500 text-sm">Secure your spot with NordFrame.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs tracking-widest text-gray-500">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} className="rounded-none border-gray-200 focus:border-black h-12 bg-gray-50/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs tracking-widest text-gray-500">Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="jane@example.com" {...field} className="rounded-none border-gray-200 focus:border-black h-12 bg-gray-50/50" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="package"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs tracking-widest text-gray-500">Package Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border-gray-200 h-12 bg-gray-50/50">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait Session (€250)</SelectItem>
                      <SelectItem value="brand">Brand Campaign (€850)</SelectItem>
                      <SelectItem value="product">Product Pack (€450)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs tracking-widest text-gray-500">Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your vision..." 
                      {...field} 
                      className="rounded-none border-gray-200 focus:border-black min-h-[120px] bg-gray-50/50" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 rounded-none uppercase text-xs tracking-widest py-6">
              Confirm Booking Request
            </Button>
          </form>
        </Form>
      </div>
    </ClientLayout>
  );
}
