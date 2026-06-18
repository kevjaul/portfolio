import { Trans, useTranslation } from "react-i18next";
import FadeIn from "./animations/FadeIn";
import Card from "./Card";
import TechCarousel from "./TechCarousel";

function SectionProjects() {
  const { t } = useTranslation();
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
    <section
      id={t("sections.projects").toLowerCase()}
      className="scroll-mt-[100px]"
    >
      <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
        {t("sections.projects")}
      </h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 xl:mx-30 md:mx-10 mx-4 ">
        <div className="lg:col-span-1 col-span-2 text-center xl:m-10 m-0">
          <FadeIn direction="left" slideLenght={140}>
            <h3 className="text-3xl text-white underline">
              {t("projects.featuredProject.title")}
            </h3>
            <Card
              cardTitle={t("projects.featuredProject.cardTitle")}
              cardSubTitle={<TechCarousel techs={mainProjectTechs} />}
              cardImage="token-api-java.png"
              ctaRedirect="http://token-api-java-env.eba-cyz3fx3h.eu-west-1.elasticbeanstalk.com/swagger-ui/index.html"
              ctaMessage={
                <>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent lg:text-5xl md:text-4xl sm:text-5xl text-4xl leading-none">
                    &#x25CF;
                  </span>
                  {t("projects.featuredProject.cta")} →
                </>
              }
              className="mt-4 max-h-[1000px] lg:max-w-[fit-content] indent-8 text-justify"
              id="token-api-java"
              pulse
            >
              {t("projects.featuredProject.projectDescription")}
            </Card>
          </FadeIn>
        </div>
        <div className="xl:my-10 md:mx-10 lg:col-span-1 col-span-2">
          <h3 className="text-3xl text-white underline mb-3 text-center">
            {t("projects.otherProjects.title")}
          </h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle={t("projects.otherProjects.firstCard.title")}
                cardSubTitle={<TechCarousel techs={crmProjectTechs} />}
                cardImage="temp"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                <Trans
                  i18nKey="projects.otherProjects.firstCard.description"
                  components={[<b />]}
                />
              </Card>
            </FadeIn>
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle={t("projects.otherProjects.secondCard.title")}
                cardSubTitle={<TechCarousel techs={metricsProjectTechs} />}
                cardImage="/metrics_project/monitoringCard.svg"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                <Trans
                  i18nKey="projects.otherProjects.secondCard.description"
                  components={[<b />]}
                />
              </Card>
            </FadeIn>
            <FadeIn
              direction="right"
              slideLenght={140}
              className="col-span-2 sm:col-span-1 sm:mx-0 mx-10"
            >
              <Card
                cardTitle={t("projects.otherProjects.thirdCard.title")}
                cardSubTitle={<TechCarousel techs={cryptoProjectTechs} />}
                cardImage="/keyVault_project/vaultCard.png"
                textExpansion={true}
                className="indent-8 text-justify"
              >
                <Trans
                  i18nKey="projects.otherProjects.thirdCard.description"
                  components={[<b />]}
                />
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
