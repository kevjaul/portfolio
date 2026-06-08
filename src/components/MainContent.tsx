import HomeSection from "./HomeSection";
import SectionSeparator from "./SectionSeparator";

function MainContent() {
  return (
    <>
      <HomeSection />
      <SectionSeparator />
      <section id="experience">
        <div className="h-[1000px]"></div>
      </section>
    </>
  );
}

export default MainContent;
