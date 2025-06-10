import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="container py-12 mx-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        
        <ContactForm />
        
        <div className="text-center pt-6">
          <p className="text-sm text-muted-foreground">
            You can also reach us at <a href="mailto:info@example.com" className="underline hover:text-primary">info@example.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}