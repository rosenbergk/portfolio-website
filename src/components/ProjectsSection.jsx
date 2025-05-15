import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tile Typer",
    description:
      "A fast-paced typing game where players clear falling word tiles by quickly typing the correct words before they reach the bottom.",
    image: "/projects/cover-images/TileTyper.png",
    tags: ["C#", "Unity", "2D Game Development"],
    demoUrl: "#", // PUT GAME URL HERE
    githubUrl: "https://github.com/rosenbergk/TileTyper",
  },
  {
    id: 2,
    title: "Hooked Horizons",
    description:
      "A first-person fishing simulator that challenges players to cast, reel, and catch fish with realistic mechanics and immersive gameplay.",
    image: "/projects/cover-images/HookedHorizons.png",
    tags: ["C#", "Unity", "3D Game Development"],
    demoUrl: "#", // PUT GAME URL HERE
    githubUrl: "https://github.com/rosenbergk/hooked-horizons",
  },
  {
    id: 3,
    title: "Pollination Rotation",
    description:
      "A physics-based puzzle game where you rotate the environment to guide a bug to a flower while avoiding birds and other obstacles.",
    image: "/projects/cover-images/PollinationRotation.png",
    tags: ["C#", "Unity", "2D Game Development"],
    demoUrl: "#", // PUT GAME URL HERE
    githubUrl: "https://github.com/SamZombie/DISGameJam",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          created with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
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
            href="https://github.com/rosenbergk"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check Out My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
