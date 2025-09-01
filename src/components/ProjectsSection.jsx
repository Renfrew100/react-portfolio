import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Space Fusion Inc.",
    description: "A development site for research and development of launch vehicles",
    image: "/projects/project1-1.png",
    tags: ["React", "Vue.js", "CSS"],
    demoUrl: "https://spacefusioninc-3ff97f804c73.herokuapp.com/",
    githubUrl: "https://github.com/Renfrew100/SpaceFusionInc",
  },
  {
    id: 2,
    title: "Journaspect",
    description:
      "A journalism application that was created in Hack the North 2021 that allows users to add, delete, and modify journalists",
    image: "/projects/project2-2.png",
    tags: ["React MUI", "MongoDB", "Express",],
    githubUrl: "https://github.com/Renfrew100/journaspect",
  },
  {
    id: 3,
    title: "Software For Love",
    description:
      "Software For Love is a non-profit organization that focuses on providing software solutions. We are a team of young professionals who are passionate about technology and seek to give back to our community.",
    image: "/projects/project3-3.png",
    tags: ["Gatsby.js", "Node.js", "Netlify"],
    demoUrl: "https://www.softwareforlove.com/",
    githubUrl: "https://github.com/Software-For-Love/software-for-love-site",
  },
    {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A software engineering capstone merchandise application",
    image: "/projects/project4-4.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 5,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Renfrew100"
          >
            Check My Github <ArrowRight size={20} />
          </a>
        </div> 
      </div>
    </section>
  );
};
