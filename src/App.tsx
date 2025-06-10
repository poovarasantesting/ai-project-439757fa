import { ContactForm } from "./components/ContactForm";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h1>
          <p className="text-muted-foreground">
            Have a question or need assistance? Fill out the form below and we'll get back to you shortly.
          </p>
        </header>
        
        <main>
          <ContactForm />
        </main>
      </div>
      <Toaster />
    </div>
  );
}

export default App;