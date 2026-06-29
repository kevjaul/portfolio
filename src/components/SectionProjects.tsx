import { Trans, useTranslation } from "react-i18next";
import FadeIn from "./animations/FadeIn";
import Card from "./Card";
import TechCarousel from "./TechCarousel";

function SectionProjects() {
  const { t } = useTranslation();
  type Techs = { name: string; subtitle?: string; iconUrl: string };
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
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "AWS",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Git",
      iconUrl: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg",
    },
  ];

  const crmProjectTechs: Techs[] = [
    {
      name: "PHP",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
    },
    {
      name: "Javascript",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Bash",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg",
    },
    {
      name: "MySQL",
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
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Kubernetes",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    },
    {
      name: "Grafana",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    },
    {
      name: "GitLab",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/35/GitLab_icon.svg",
    },
  ];
  const cryptoProjectTechs: Techs[] = [
    {
      name: "Python",
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
      className="scroll-mt-[100px] [content-visibility:auto] py-10"
    >
      <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
        {t("sections.projects")}
      </h1>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 xl:mx-30 md:mx-10 mx-4 ">
        <div className="lg:col-span-1 col-span-2 text-center xl:m-10 m-0">
          <FadeIn direction="left" slideLength={140}>
            <h3 className="text-3xl text-white underline">
              {t("projects.featuredProject.title")}
            </h3>
            <div className="will-change-transform">
              <Card
                cardTitle={t("projects.featuredProject.cardTitle")}
                cardSubTitle={<TechCarousel techs={mainProjectTechs} />}
                cardImage="token-api-java.png"
                ctaRedirect="https://d1aydfl79q48gt.cloudfront.net/swagger-ui/index.html"
                ctaMessage={
                  <p className="indent-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.25)_3%,rgba(0,0,0,0.2)_50%,transparent_90%)] pb-4 px-2 overflow-visible">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent lg:text-5xl md:text-4xl sm:text-5xl text-4xl">
                      &#x25CF;
                    </span>
                    <span className="highlight">
                      {t("projects.featuredProject.cta")} →
                    </span>
                  </p>
                }
                className="mt-4 max-h-[1000px] lg:max-w-[fit-content] indent-8 text-justify"
                id="token-api-java"
                pulse
              >
                {t("projects.featuredProject.projectDescription")}
              </Card>
            </div>
          </FadeIn>
        </div>
        <div className="xl:my-10 md:mx-10 lg:col-span-1 col-span-2">
          <h3 className="text-3xl text-white underline mb-3 text-center">
            {t("projects.otherProjects.title")}
          </h3>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
            <div className="flex flex-col gap-4 sm:flex-1 sm:w-[48%]">
              <FadeIn
                direction="right"
                slideLength={140}
                className="sm:mx-0 mx-10"
              >
                <div className="will-change-transform">
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
                </div>
              </FadeIn>
              <FadeIn
                direction="right"
                slideLength={140}
                className="sm:mx-0 mx-10"
              >
                <div className="will-change-transform">
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
                </div>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-4 sm:flex-1 sm:w-[48%]">
              <FadeIn
                direction="right"
                slideLength={140}
                className="sm:mx-0 mx-10"
              >
                <div className="will-change-transform">
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
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
