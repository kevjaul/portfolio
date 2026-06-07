import FadeIn from "./animations/FadeIn";
import TypingText from "./animations/TypingText";

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
              technologies. I speciliaze in Java/SpringBoot, React and DevOps to
              deliver maitenable applications.
            </p>
          </div>
        </div>
      </FadeIn>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 h-full self-start">
          <div className="flex h-auto flex-col rounded-2xl border border-white/10 bg-white/5 mx-10 mt-3 max-w-[650px] max-h-[450px]">
            <div className="border-b border-white/50 p-5">
              <h2 className="text-3xl font-semibold text-white">About me</h2>
            </div>

            <div className="flex-1 p-5 overflow-auto text-white">
              I enjoy understanding how software works beyond writing code. From
              designing REST APIs and implementing backend logic to automating
              deployments and configuring cloud infrastructure, I like building
              complete, maintainable applications. I'm naturally curious and
              enjoy learning new technologies to better understand how modern
              software systems work as a whole.
            </div>

            <div className="border-t border-white/10 px-5 py-2">
              <div className="px-6 py-2 flex justify-end gap-3">
                <button className="border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] px-4 py-2 text-white cursor-pointer hover:bg-emerald-400">
                  Contact Me
                </button>

                <button className="border-2 border-white rounded shadow-[0_0_10px_rgba(101,255,177,0.6)] px-4 py-2 text-white cursor-pointer hover:bg-emerald-400">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center md:justify-end md:overflow-hidden justify-center md:w-1/2">
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
      </div>
    </>
  );
}

export default MainContent;
