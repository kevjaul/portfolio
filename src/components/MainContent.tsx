import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";
import Card from "./Card";
import PhotoCircles from "./PhotoCircles";

function MainContent() {
  return (
    <>
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
          <div className="xl:w-dvh lg:w-lg w-xl text-center xl:pb-7 pb-3 pt-2 mx-3 border-b-white border-b">
            <p className="xl:text-xl lg:text-base text-sm">
              Passionate about building web applications with modern
              technologies. I speciliaze in
              <span className="font-bold">
                Java/SpringBoot, React and DevOps
              </span>
              to deliver maintenable applications.
            </p>
          </div>
        </div>
      </FadeIn>
      <div className="flex flex-col-reverse lg:flex-row">
        <FadeIn direction="left" className="lg:w-1/2 h-full w-fullself-start">
          <Card
            cardTitle="About me"
            cardFooter={
              <div className="px-6 py-2 flex justify-end gap-3">
                <button className="border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] px-4 py-2 text-white cursor-pointer hover:bg-emerald-400">
                  Contact Me
                </button>

                <button className="border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] px-4 py-2 text-white cursor-pointer hover:bg-emerald-400">
                  Download CV
                </button>
              </div>
            }
          >
            I enjoy understanding how software works beyond writing code. From
            designing <span className="font-bold">REST APIs</span> and
            implementing backend logic to automating deployments and configuring
            cloud infrastructure, I like building complete, maintainable
            applications. I'm naturally{" "}
            <span className="font-bold">
              curious and enjoy learning new technologies
            </span>{" "}
            to better understand how modern software systems work as a whole.
          </Card>
        </FadeIn>
        <PhotoCircles />
      </div>
    </>
  );
}

export default MainContent;
