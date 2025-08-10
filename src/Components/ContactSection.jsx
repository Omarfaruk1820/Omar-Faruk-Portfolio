import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import Swal from "sweetalert2";
import { useState } from "react";

const ContactSection = () => {
    const [isformSubmitted,setFormSubmitted]=useState(false)
    const hanldeformSubmit=(e)=>{
        e.preventDefault()
        setFormSubmitted(true)
        setTimeout(()=>{
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Send a message",
  showConfirmButton: false,
  timer: 1500
});
 setFormSubmitted(false)
        },1500)
       
    }
  return (
    <section className="py-24 px-4 relative bg-secondary/30" id="contact">
      <div className="container max-w-5xl mx-auto ">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a projects in mind or want to collaborate? Feel free to reach
          out. I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"></Mail>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mail to:Omarfarukfci9th@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Omarfarukfci9th@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"></Phone>
                </div>
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <a
                    href="Phone to:Omarfarukfci9th@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    01822637989
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a
                    href="Location:Uttara Dhaka"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Uttara Dhaka
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-medium mb-4">Connect With Me</h3>
              <div className="flex space-x-4 justify-center">
                <a
                  href="www.linkedin.com/in/md-omar-faruk-6a592b252"
                  target="_blank"
                >
                  <Linkedin></Linkedin>
                </a>
                <a>
                  <Twitter></Twitter>
                </a>
                <a>
                  <Instagram></Instagram>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <Facebook></Facebook>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={hanldeformSubmit} className="space-y-6">
              <div>
                <label className="label block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Omar Faruk"
                  required
                />
              </div>
              <div>
                <label className="label block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Omarfarukfci9th@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="label block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 resize-none border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hello I'd like to talk about..."
                  required
                />
              </div>
              <button disabled={isformSubmitted} type='submit' className={cn("cosmic-button   w-full flex items-center justify-center gap-2")}>
                {isformSubmitted? "Sending..":"Send Message"}
                <Send size={16}></Send>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
