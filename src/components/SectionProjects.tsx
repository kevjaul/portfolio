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
    {
      name: "GitLab",
      subtitle: "",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
    },
  ];
  const cryptoProjectTechs: Techs[] = [
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
      <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
        Projects
      </h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 xl:mx-30 md:mx-10 mx-4 ">
        <div className="lg:col-span-1 col-span-2 text-center xl:m-10 m-0">
          <FadeIn direction="left" slideLenght={140}>
            <h3 className="text-3xl text-white underline">Featured Project</h3>
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
              className="mt-4 max-h-[1000px] lg:max-w-[fit-content] indent-8 text-justify"
              id="token-api-java"
              pulse
            >
              This project is a Spring Boot backend API focused on secure token
              and application management. It features API key authentication,
              structured request handling, and rate limiting to control usage
              per client. Built with a clean layered architecture, it is
              designed with production deployment and CI/CD integration in mind,
              making it suitable for real-world cloud environments.
            </Card>
          </FadeIn>
        </div>
        <div className="xl:my-10 md:mx-10 lg:col-span-1 col-span-2">
          <h3 className="text-3xl text-white underline mb-3 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle="CRM Legacy System Enhancement (Internship)"
                cardSubTitle={<TechCarousel techs={crmProjectTechs} />}
                cardImage="temp"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                During this internship, I contributed to the evolution of a
                long-standing CRM platform by implementing{" "}
                <span className="font-bold">new backend services</span>,
                integrating third-party REST APIs,{" "}
                <span className="font-bold">
                  improving the CI/CD pipeline, and reducing technical debt
                </span>
                . A major contribution was the design and implementation of a{" "}
                <span className="font-bold">
                  secure token-based access system integrated
                </span>{" "}
                into the existing architecture.
              </Card>
            </FadeIn>
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle="CI/CD & Kubernetes monitoring plateform"
                cardSubTitle={<TechCarousel techs={metricsProjectTechs} />}
                cardImage="/metrics_project/monitoringCard.svg"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                A DevOps-focused project centered on{" "}
                <span className="font-bold">CI/CD automation</span>, Kubernetes
                orchestration, and observability. The pipeline automatically{" "}
                <span className="font-bold">
                  deploys Dockerized applications to a Kubernetes cluster
                </span>{" "}
                while Grafana dashboards{" "}
                <span className="font-bold">
                  monitor both application metrics and software development KPIs
                </span>
                , providing continuous feedback on system health and team
                productivity.
              </Card>
            </FadeIn>
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle="Secure File Vault System"
                cardSubTitle={<TechCarousel techs={cryptoProjectTechs} />}
                cardImage="/keyVault_project/vaultCard.png"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                A distributed secure file vault built entirely in Python,
                featuring a custom{" "}
                <span className="font-bold">
                  Public Key Infrastructure (PKI)
                </span>{" "}
                ,certificate issuance, mutual authentication using a{" "}
                <span className="font-bold">
                  Zero-Knowledge Proof protocol{" "}
                </span>
                , and end-to-end encryption for{" "}
                <span className="font-bold"> encrypted file storage</span> .
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
