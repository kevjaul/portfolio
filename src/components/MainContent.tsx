import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";
import Card from "./Card";
import PhotoCircles from "./PhotoCircles";

function MainContent() {
  return (
    <>
      <FadeIn direction="up">
        <div className="flex flex-col items-center mt-[100px] mb-15">
          <p className="lg:text-3xl md:text-2xl text-xl">
            Hey, I'm{" "}
            <TypingText
              speed={100}
              deleteSpeed={100}
              className="font-bold text highlight"
              text={["Kévin", "your future collaborator"]}
            />
          </p>
          <p className="lg:text-7xl md:text-6xl text-5xl font-bold text-center">
            Junior <span className="highlight">Fullstack Developer</span>
          </p>
          <div className="lg:w-dvh md:w-lg w-xl text-center lg:pb-7 pb-3 pt-2 mx-3 border-b-white border-b">
            <p className="lg:text-xl md:text-base text-sm">
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
      <div className="flex flex-col-reverse md:flex-row">
        <FadeIn direction="left" className="md:w-1/2 h-full self-start">
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
