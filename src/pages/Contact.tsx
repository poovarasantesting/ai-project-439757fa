import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground">
            Have a question or want to work together? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
}