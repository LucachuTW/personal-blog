import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
      <form className="max-w-md mx-auto w-full px-4">
        <div className="mb-4">
          <Input type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Your Message" rows={4} />
        </div>
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  );
}