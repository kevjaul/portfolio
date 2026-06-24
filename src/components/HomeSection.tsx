import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";
import Card from "./Card";
import PhotoCircles from "./PhotoCircles";
import { Trans, useTranslation } from "react-i18next";

function HomeSection() {
  const { t } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = element ? 200 : 0;
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section
      id={t("sections.home").toLowerCase()}
      className="scroll-mt-[100px] [content-visibility:auto] pb-10"
    >
      <div className="overflow-x-hidden">
        <FadeIn direction="up">
          <div className="flex flex-col items-center mt-[100px] mb-15">
            <p className="xl:text-3xl lg:text-2xl text-xl">
              {t("hero.hello") + " "}
              <TypingText
                speed={100}
                deleteSpeed={100}
                className="font-bold text highlight"
                text={["Kévin", t("hero.collaborator")]}
              />
            </p>
            <p className="xl:text-7xl lg:text-6xl text-5xl font-bold text-center">
              <Trans
                i18nKey="hero.title"
                components={[<span className="highlight" />]}
              />
            </p>
            <div className="xl:w-dvh md:w-2xl w-fit text-center xl:pb-7 pb-3 pt-2 mx-3 border-b-white border-b">
              <p className="xl:text-xl md:text-base text-sm">
                <Trans i18nKey="hero.presentation" components={[<b />]} />
              </p>
            </div>
          </div>
        </FadeIn>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 h-full w-full self-start flex flex-col">
            <FadeIn direction="left" className="w-full flex justify-center">
              <div>
                <Card
                  cardTitle={t("hero.aboutme.title")}
                  cardFooter={
                    <div className="px-6 py-2 flex justify-end gap-3">
                      <button
                        className="border-2 border-white rounded shadow-[0_0_10px_rgba(168,85,247,0.95)] app-btn text-white pulse-button"
                        onClick={() => scrollToSection("contact")}
                      >
                        {t("hero.aboutme.cta1")}
                      </button>

                      <button
                        className="border-2 border-white rounded shadow-[0_0_10px_rgba(168,85,247,0.95)] text-white app-btn"
                        onClick={() => {
                          const link = document.createElement("a");
                          link.href = "CV_2026_FullStack.pdf";
                          link.download = "CV 2026 Fullstack.pdf";
                          link.click();
                        }}
                      >
                        {t("hero.aboutme.cta2")}
                      </button>
                    </div>
                  }
                  className="mx-10 my-3 w-fit lg:max-w-[650px] indent-8 text-justify"
                >
                  <Trans i18nKey="hero.aboutme.content" components={[<b />]} />
                </Card>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="grid xl:grid-cols-3 grid-cols-2 md:gap-5 gap-3 mt-15 mx-10">
                <Card
                  cardTitle={t("hero.mainFacts.experience.title")}
                  cardSubTitle={t("hero.mainFacts.experience.subtitle")}
                  className="text-justify"
                >
                  {t("hero.mainFacts.experience.content")}
                </Card>
                <Card
                  cardTitle={t("hero.mainFacts.project.title")}
                  cardFooter={
                    <div className="px-6 py-2 flex justify-end gap-3">
                      <button
                        className="border-2 border-white rounded shadow-[0_0_10px_rgba(168,85,247,0.95)] text-white app-btn"
                        onClick={() => scrollToSection("token-api-java")}
                      >
                        {t("hero.mainFacts.project.cta")}
                      </button>
                    </div>
                  }
                  className="text-justify"
                >
                  {t("hero.mainFacts.project.content")}
                </Card>
                <Card
                  cardTitle={t("hero.mainFacts.formation.title")}
                  cardSubTitle={t("hero.mainFacts.formation.subtitle")}
                  className="col-span-2 xl:col-span-1 indent-8 text-justify"
                >
                  {t("hero.mainFacts.formation.content")}
                </Card>
              </div>
            </FadeIn>
          </div>
          <PhotoCircles />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
