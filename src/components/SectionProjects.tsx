import FadeIn from "./animations/FadeIn";
import Card from "./Card";
import TechNameTag from "./TechNameTag";

function SectionProjects() {
  type Techs = { name: string; subtitle: string; iconUrl: string };

  const mainProjectTechs: Techs[] = [
    {
      name: "Spring",
      subtitle: "Boot/Security",
      iconUrl: "logos/spring-logo.png",
    },
    { name: "React", subtitle: "", iconUrl: "logos/react.svg" },
    { name: "Postgre", subtitle: "", iconUrl: "logos/postgres.svg" },
    { name: "Git", subtitle: "", iconUrl: "logos/git.svg" },
  ];
  return (
    <section id="projects" className="h-[1000px]">
      <FadeIn direction="left" slideLenght={140}>
        <h1 className="text-6xl highlight font-bold text-center mb-10">
          Projects
        </h1>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 mx-10">
          <Card
            cardTitle="Application Credit Management API"
            cardSubTitle={
              <div className=" py-2 flex justify-start gap-3 h-15 w-full flex-wrap h-auto">
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
            }
            cardImage="token-api-java.png"
            className="md:col-span-2 md:row-span-2 col-span-4 row-span-1"
            id="token-api-java"
          >
            This project is a Spring Boot backend API focused on secure token
            and application management. It features API key authentication,
            structured request handling, and rate limiting to control usage per
            client. Built with a clean layered architecture, it is designed with
            production deployment and CI/CD integration in mind, making it
            suitable for real-world cloud environments.
          </Card>
          <Card className="border"> toto</Card>
          <Card className="border border-red-800 ">toto</Card>
        </div>
      </FadeIn>
    </section>
  );
}

export default SectionProjects;
