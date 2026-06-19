import { useTranslation } from "react-i18next";

function SectionExperience() {
  const { t } = useTranslation();
  return (
    <section
      id={t("sections.experience").toLowerCase()}
      className="scroll-mt-[100px] relative py-10"
    >
      <div
        className="
    pointer-events-none absolute top-[-130px] left-0 w-full h-[170px]
    bg-gradient-to-b from-[#05010a]/0 to-[#05010a]/70 z-[-1]"
      />
      <div className="relative z-10 bg-[#05010a]/70">
        <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
          {t("sections.experience")}
        </h1>
        <div className="h-[800px] flex items-center justify-center">
          <p className="text-2xl text-center highlight text-bold">
            {t("experience.wip")}
          </p>
        </div>
      </div>
      <div
        className="
    pointer-events-none absolute bottom-[-130px] left-0 w-full h-[170px]
    bg-gradient-to-t from-[#05010a]/0 to-[#05010a]/70 z-[-1]"
      />
    </section>
  );
}

export default SectionExperience;
