import HomeSection from "./HomeSection";
import SectionExperience from "./SectionExperience";
import SectionSeparator from "./SectionSeparator";
import SectionProjects from "./SectionProjects";
import SectionContact from "./SectionContact";
import MainFooter from "./MainFooter";

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
      <MainFooter />
    </>
  );
}

export default MainContent;
