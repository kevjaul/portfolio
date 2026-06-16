import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";
import Card from "./Card";
import PhotoCircles from "./PhotoCircles";

function HomeSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = element ? 100 : 0;
    const y =
      (element?.getBoundingClientRect()?.top || 0) + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section id="home">
      <FadeIn direction="up">
        <div className="flex flex-col items-center mt-[100px] mb-15">
          <p className="xl:text-3xl lg:text-2xl text-xl">
            Hey, I'm{" "}
            <TypingText
              speed={100}
              deleteSpeed={100}
              className="font-bold text highlight"
              text={["Kévin", "your future collaborator"]}
            />
          </p>
          <p className="xl:text-7xl lg:text-6xl text-5xl font-bold text-center">
            Junior <span className="highlight">Fullstack Developer</span>
          </p>
          <div className="xl:w-dvh md:w-2xl w-fit text-center xl:pb-7 pb-3 pt-2 mx-3 border-b-white border-b">
            <p className="xl:text-xl md:text-base text-sm">
              Passionate about building web applications with modern
              technologies. I speciliaze in{" "}
              <span className="font-bold">
                Java/SpringBoot, React and DevOps
              </span>{" "}
              to deliver maintenable applications.
            </p>
          </div>
        </div>
      </FadeIn>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="lg:w-1/2 h-full w-full self-start flex flex-col">
          <FadeIn direction="left" className="w-full flex justify-center">
            <div>
              <Card
                cardTitle="About me"
                cardFooter={
                  <div className="px-6 py-2 flex justify-end gap-3">
                    <button
                      className="border-2 border-white rounded shadow-[0_0_10px_rgba(168,85,247,0.95)] app-btn text-white pulse-button"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact Me
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
                      Download CV
                    </button>
                  </div>
                }
                className="mx-10 my-3 w-fit lg:max-w-[650px] indent-8 text-justify"
              >
                I enjoy understanding how software works beyond writing code.
                From designing <span className="font-bold">REST APIs</span> and
                implementing backend logic to automating deployments and
                configuring cloud infrastructure, I like building complete,
                maintainable applications. I'm naturally{" "}
                <span className="font-bold">
                  curious and enjoy learning new technologies
                </span>{" "}
                to better understand how modern software systems work as a
                whole.
              </Card>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="grid xl:grid-cols-3 grid-cols-2 md:gap-5 gap-3 mt-15 mx-10">
              <Card
                cardTitle="6 months"
                cardSubTitle="Of fullstack experience"
                className="text-justify"
              >
                Php - Javascript - Cypress - MySQL - APIs Management
              </Card>
              <Card
                cardTitle="1 Personal Project"
                cardFooter={
                  <div className="px-6 py-2 flex justify-end gap-3">
                    <button
                      className="border-2 border-white rounded shadow-[0_0_10px_rgba(168,85,247,0.95)] text-white app-btn"
                      onClick={() => scrollToSection("token-api-java")}
                    >
                      Check it out !
                    </button>
                  </div>
                }
                className="text-justify"
              >
                Spring Boot - PostgreSQL - JUnit - JPA/Hibernate - AWS -
                Pipeline CI/CD
              </Card>
              <Card
                cardTitle="Dual Master's-Level Degrees"
                cardSubTitle="Computer Science & Cybersecurity"
                className="col-span-2 xl:col-span-1 indent-8 text-justify"
              >
                Strong academic foundation combining software engineering
                principles with cybersecurity, enabling me to build reliable and
                secure applications.
              </Card>
            </div>
          </FadeIn>
        </div>
        <PhotoCircles />
      </div>
    </section>
  );
}

export default HomeSection;
