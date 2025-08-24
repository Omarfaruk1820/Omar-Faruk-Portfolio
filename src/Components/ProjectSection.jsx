import { ArrowBigRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing page",
    description: "A beautiful landing page app using React and Tailwind",
    image: "https://i.ibb.co.com/n3ym1Dw/Yb-Wcqcw9q-MMC314oy-SPCOykr-X9-Qr-T3r-S4t-Zjy-Dtp.jpg",
    tags: ["React", "TailwindCSS", "Axios"],
    demoUrl: "https://github.com/Omarfaruk1820",
    githubUrl: "https://www.youtube.com/",
  },
  {
    id: 2,
    title: "SaaS Landing page",
    description: "A beautiful landing page app using React and Tailwind",
    image: "https://i.ibb.co.com/HHdFw5h/M1-MWKkv-K89-Ws-NZKLHYHCd-Fq-Ngo-R68-Rp-ZECAq5jw-T.png",
    tags: ["React", "TailwindCSS", "Axios"],
    demoUrl: "https://github.com/Omarfaruk1820",
    githubUrl: "https://www.youtube.com/",
  },
  {
    id: 3,
    title: "SaaS Landing page",
    description: "A beautiful landing page app using React and Tailwind",
    image: "https://i.ibb.co.com/v4YqzVn/6eb112b5-9301-4e19-b740-54c231ef628a.png",
    tags: ["React", "TailwindCSS", "Axios"],
    demoUrl: "https://musical-sorbet-e6a054.netlify.app/",
    githubUrl: "https://github.com/Omarfaruk1820/A-Online-Restaurant-Management-Software",
  },
  {
    id: 4,
    title: "SaaS Landing page",
    description: "A beautiful landing page app using React and Tailwind",
    image: "https://i.ibb.co.com/2cM2rLM/32ioy-DF3-ZGpo07-BSy3-Dw-SJ8-Ubf-AGCRXE3-FAEagl-B.png",
    tags: ["React", "TailwindCSS", "Axios"],
    demoUrl: "https://github.com/Omarfaruk1820",
    githubUrl: "https://www.youtube.com/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto ">
        <h1 className="text-3xl md:text-4xl  font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are the some of recent projects. Each project was carefully
          crafted with attention to detail, performance and user expricence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={project.image}
                  alt="Photos"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs bg-primary/20 font-medium rounded-full bg-secondary border text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
             
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {" "}
                    <ExternalLink size={20}></ExternalLink>{" "}
                  </a>
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    {" "}
                    <Github size={20}></Github>{" "}
                  </a>
                </div>
              </div>
               </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
            <a  href="https://github.com/Omarfaruk1820" target="_blank" className='cosmic-button w-fit flex items-center mx-auto'>Check my github <ArrowBigRight size={16}></ArrowBigRight>  </a>

        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
