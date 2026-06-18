import { useTranslation } from "react-i18next";

function SectionExperience() {
  const { t } = useTranslation();
  return (
    <section
      id={t("sections.experience").toLowerCase()}
      className="scroll-mt-[100px]"
    >
      <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
        {t("sections.experience")}
      </h1>
      <div className="h-[300px] flex items-center justify-center">
        <p className="text-2xl text-center highlight text-bold">
          {t("experience.wip")}
        </p>
      </div>
    </section>
  );
}

export default SectionExperience;
