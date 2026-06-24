import HomeSection from "./HomeSection";
import SectionExperiences from "./SectionExperiences";
import SectionSeparator from "./SectionSeparator";
import SectionProjects from "./SectionProjects";
import SectionContact from "./SectionContact";
import MainFooter from "./MainFooter";

function MainContent() {
  return (
    <>
      <HomeSection />
      <SectionSeparator />
      <SectionExperiences />
      <SectionSeparator />
      <SectionProjects />
      <SectionSeparator />
      <SectionContact />
      <MainFooter />
    </>
  );
}

export default MainContent;
