import { useRef } from "react";

import FadeIn from "./animations/FadeIn";
import Card from "./Card";
import TechNameTag from "./TechNameTag";

function SectionProjects() {
  type Techs = { name: string; subtitle: string; iconUrl: string };
  const carouselRef = useRef<HTMLDivElement>(null);
  const mainProjectTechs: Techs[] = [
    {
      name: "Spring",
      subtitle: "Boot/Security",
      iconUrl: "logos/spring-logo.png",
    },
    { name: "JUnit", subtitle: "", iconUrl: "logos/junit.svg" },
    { name: "Postgre", subtitle: "", iconUrl: "logos/postgres.svg" },
    { name: "AWS", subtitle: "", iconUrl: "logos/aws.svg" },
    { name: "Git", subtitle: "", iconUrl: "logos/git.svg" },
  ];
  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects">
      <FadeIn direction="left" slideLenght={140}>
        <h1 className="text-6xl highlight font-bold text-center md:mb-10 mb-4">
          Projects
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-10 lg:mx-30">
          <div className="md:col-span-2 md:row-span-2 col-span-4 row-span-1 text-center lg:mr-10">
            <h3 className="text-3xl text-white underline">
              Highlighted Project
            </h3>
            <Card
              cardTitle="Application Credit Management API"
              cardSubTitle={
                <>
                  <div className="py-2 justify-start gap-3 h-15 w-full flex-wrap h-auto sm:flex hidden">
                    {mainProjectTechs.map((tech) => (
                      <TechNameTag
                        key={tech.name}
                        techLogo={tech.iconUrl}
                        subtitle={tech.subtitle}
                      >
                        {tech.name}
                      </TechNameTag>
                    ))}
                  </div>
                  <div className="sm:hidden relative">
                    <button
                      onClick={scrollLeft}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    >
                      ◀
                    </button>

                    <div
                      ref={carouselRef}
                      className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none px-8 py-2"
                    >
                      {mainProjectTechs.map((tech) => (
                        <div key={tech.name} className="snap-start shrink-0">
                          <TechNameTag
                            techLogo={tech.iconUrl}
                            subtitle={tech.subtitle}
                          >
                            {tech.name}
                          </TechNameTag>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={scrollRight}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    >
                      ▶
                    </button>
                  </div>
                </>
              }
              cardImage="token-api-java.png"
              ctaRedirect="http://token-api-java-env.eba-cyz3fx3h.eu-west-1.elasticbeanstalk.com/swagger-ui/index.html"
              ctaMessage={
                <>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent lg:text-5xl md:text-4xl sm:text-5xl text-4xl leading-none">
                    &#x25CF;
                  </span>{" "}
                  Live on AWS →
                </>
              }
              className="mt-4 shadow-[rgba(101,255,177,0.8)] shadow-[0px_0px_50px] max-h-[1000px] lg:max-w-[fit-content]"
              id="token-api-java"
            >
              This project is a Spring Boot backend API focused on secure token
              and application management. It features API key authentication,
              structured request handling, and rate limiting to control usage
              per client. Built with a clean layered architecture, it is
              designed with production deployment and CI/CD integration in mind,
              making it suitable for real-world cloud environments.
            </Card>
          </div>
          <Card className="border"> toto</Card>
          <Card className="border border-red-800 ">toto</Card>
        </div>
      </FadeIn>
    </section>
  );
}

export default SectionProjects;
