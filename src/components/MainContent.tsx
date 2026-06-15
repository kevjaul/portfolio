import HomeSection from "./HomeSection";
import SectionExperience from "./SectionExperience";
import SectionSeparator from "./SectionSeparator";
import SectionProjects from "./SectionProjects";
import SectionContact from "./SectionContact";

function MainContent() {
  return (
    <>
      <HomeSection />
      <SectionSeparator />
      <SectionExperience />
      <SectionSeparator />
      <SectionProjects />
      <SectionSeparator />
      <SectionContact />
    </>
  );
}

export default MainContent;
