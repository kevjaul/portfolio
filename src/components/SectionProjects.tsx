import FadeIn from "./animations/FadeIn";
import Card from "./Card";
import TechCarousel from "./TechCarousel";

function SectionProjects() {
  type Techs = { name: string; subtitle: string; iconUrl: string };
  const mainProjectTechs: Techs[] = [
    {
      name: "Spring",
      subtitle: "Boot/Security",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
    },
    { name: "JUnit", subtitle: "", iconUrl: "logos/junit.svg" },
    {
      name: "Postgre",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "AWS",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Git",
      subtitle: "",
      iconUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
    },
  ];

  const crmProjectTechs: Techs[] = [
    {
      name: "PHP",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
      name: "Javascript",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Bash",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
    },
    {
      name: "MySQL",
      subtitle: "",
      iconUrl: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
    },
    {
      name: "Gitlab",
      subtitle: "Runners & Jobs",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
    },
  ];

  const metricsProjectTechs: Techs[] = [
    {
      name: "Javascript",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Kubernetes",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    },
    {
      name: "Grafana",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    },
  ];
  const hvacProjectTechs: Techs[] = [
    {
      name: "Python",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "Cryptography",
      subtitle: "RSA",
      iconUrl: "/logos/cryptography.png",
    },
    {
      name: "Architecture",
      subtitle: "Client/Server",
      iconUrl: "/logos/blueprint.png",
    },
  ];
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
              cardSubTitle={<TechCarousel techs={mainProjectTechs} />}
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
          <Card
            cardTitle="CRM Legacy System Enhancement (Internship)"
            cardSubTitle={<TechCarousel techs={crmProjectTechs} />}
            cardImage="token-api-java.png"
            className="md:col-span-1 col-span-2"
          >
            toto
          </Card>
          <Card
            cardTitle="HVAC Kubernetes monitoring"
            cardSubTitle={<TechCarousel techs={metricsProjectTechs} />}
            cardImage="token-api-java.png"
            className="md:col-span-1 col-span-2"
          >
            toto
          </Card>
          <Card
            cardTitle="Secure File Vault System"
            cardSubTitle={<TechCarousel techs={hvacProjectTechs} />}
            cardImage="token-api-java.png"
            className="md:col-span-1 col-span-2"
          >
            toto
          </Card>
        </div>
      </FadeIn>
    </section>
  );
}

export default SectionProjects;
