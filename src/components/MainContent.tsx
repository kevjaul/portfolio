import HomeSection from "./HomeSection";
import SectionExperience from "./SectionExperience";
import SectionSeparator from "./SectionSeparator";
import SectionProjects from "./SectionProjects";

function MainContent() {
  return (
    <>
      <HomeSection />
      <SectionSeparator />
      <SectionExperience />
      <SectionSeparator />
      <SectionProjects />
      <SectionSeparator />
    </>
  );
}

export default MainContent;
