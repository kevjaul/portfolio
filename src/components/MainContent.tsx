import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";
import "./MainContent.scss";

function MainContent() {
  return (
    <>
      <FadeIn direction="up">
        <div className="flex flex-col items-center mt-[100px]">
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
              technologies. I speciliaze in Java/SpringBoot, React and DevOps to
              deliver maitenable applications.
            </p>
          </div>

          <div className="hidden md:flex gap-4">
            <button>Contact Me !</button>
            <button>Download CV</button>
          </div>
        </div>
      </FadeIn>
      <div>
        <div className="relative flex items-center md:justify-end md:overflow-hidden justify-center lg:overflow-visible">
          <div className="relative md:translate-x-1/5">
            <div className="lg:w-200 lg:h-200 md:w-150 md:h-150 w-80 h-80 rounded-full border-white border-2 relative overflow-hidden transition-all duration-800">
              <div className="absolute md:inset-10 inset-7 rounded-full border-white/80 border-2 bg-[radial-gradient(circle_at_center,_#65ffb1f2_20%,_transparent_60%)] overflow-hidden transition-all duration-800" />
              <div className="relative lg:translate-x-1/2 md:translate-x-1/4 bottom-0 md:h-auto md:w-[400px] transition-all duration-800">
                <FadeIn direction="down">
                  <img
                    className="object-cover lg:-translate-y-[-6vh] lg:scale-[1.6] md:scale-[1.1] scale-[0.7] h-10vh transition-all duration-800"
                    src="/KJ-detouree.svg"
                    alt=""
                  ></img>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[30vh] h-[72vh] overflow-hidden">
          <div className="flex items-center justify-center text-white">
            <h1> toto</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
