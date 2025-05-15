import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Student Developer with a Focus on Backend, Games, and AI
            </h3>
            <p className="text-muted-foreground">
              I'm a curious and driven student with a strong interest in backend
              systems, game development, and AI. I enjoy designing
              infrastructure that’s fast, reliable, and built to scale.
            </p>

            <p className="text-muted-foreground">
              Whether powering the logic behind a web app, crafting gameplay
              mechanics, or experimenting with machine learning models, I aim to
              create experiences that are both seamless and engaging. I’m always
              exploring new tools and techniques to sharpen my skills and take
              on new challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/cv/Kyle_Rosenberg_CV.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Backend Development
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating robust backend systems and APIs using modern
                    technologies to power reliable and scalable applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Scalable and Reliable
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Supporting every user action with backend systems built for
                    scale and stability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Professional Experience
                  </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Gained hands-on experience as a software engineering intern,
                    contributing to real-world projects and collaborating with
                    industry professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
