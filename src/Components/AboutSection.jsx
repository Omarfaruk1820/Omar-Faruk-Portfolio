import { Code, ExpandIcon, User } from "lucide-react";
import resumeURL from "../assets/Resume/Md.Omar Faruk Resume (1) (1).pdf"

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl mb-6 md:text-4xl font-bold md-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 mt-10 gap-12 items-center">
          <div className="space-y-6">
            <h3> Passionate Web Developer & Tech Creator</h3>
            <p>
              With over 1 years of experience in web development, I speciallize in
              creating responsive accessible, and performant web application
              using modern  technologies
            </p>
            <p>
              I'm passionate about creating elegant solution to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resumeURL}
              target="_blank" rel="noopener noreferrer"
             
              aria-label="Open resume in a new tab"
                className=" px-6 py-2 cosmic-button text-white rounded-full border-primary  hover:bg-primary/10 transition-colors duration-300 "
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6"></Code>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold text-lg'>Web Development</h1>
                    <p className='text-muted-foreground'>Creating responsive websites and web application modern frameworks</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6"></User>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold text-lg'>UI/UX Design</h1>
                    <p className='text-muted-foreground'>Designing intuitive user inferfaces and seamless user experiences</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ExpandIcon className="h-6 w-6"></ExpandIcon>
                </div>
                <div className='text-left'>
                    <h1 className='font-semibold text-lg'>Projects Management</h1>
                    <p className='text-muted-foreground'>Leading projects from conecption to completion with aglie methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
