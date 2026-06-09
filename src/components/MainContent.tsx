import HomeSection from "./HomeSection";
import SectionSeparator from "./SectionSeparator";
import SectionProjects from "./SectionProjects";

function MainContent() {
  return (
    <>
      <HomeSection />
      <SectionSeparator />
      <section id="experience">
        <div className="h-[1000px]"></div>
      </section>
      <SectionSeparator />
      <SectionProjects />
    </>
  );
}

export default MainContent;
