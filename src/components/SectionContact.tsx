import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FadeIn from "./animations/FadeIn";
import Card from "./Card";
function SectionContact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w > 1560) setRows(7);
      else if (w >= 1024) setRows(9);
      else setRows(4);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const [hideSuccess, setHideSuccess] = useState(false);

  const displaySuccess = () => {
    setSuccess(true);
    setHideSuccess(false);

    setTimeout(() => {
      setHideSuccess(true);
    }, 4000);

    setTimeout(() => {
      setSuccess(false);
      setHideSuccess(false);
    }, 4400);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
      honeypot: form.get("company"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      displaySuccess();
      e.target.reset();
    }
  };
  return (
    <section
      id={t("sections.contact").toLowerCase()}
      className="scroll-mt-[100px] [content-visibility:auto]"
    >
      <h1 className="text-6xl highlight font-bold text-center md:mb-0 mb-4">
        Contact
      </h1>
      <FadeIn
        direction="left"
        slideLenght={140}
        className="flex w-full items-center justify-center my-10"
      >
        <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-10 w-[inherit] lg:max-w-[75%] mx-10 lg:mx-0">
          <Card
            customTitle={
              <div className="flex flex-col items-center">
                <img
                  width="48"
                  height="48"
                  src="logos/email.svg"
                  alt="email logo"
                />
                <h1 className="2xl:text-3xl xl:text-2xl text-xl font-semibold text-white">
                  Email
                </h1>
              </div>
            }
            className="h-full text-center hidden lg:inline"
          >
            kevin31072002@gmail.com
          </Card>
          <Card
            customTitle={
              <div className="flex flex-col items-center">
                <img width="48" height="48" src="logos/phone.svg" alt="phone" />
                <h1 className="2xl:text-3xl xl:text-2xl text-xl font-semibold text-white">
                  {t("contact.quickInfos.phoneNumber")}
                </h1>
              </div>
            }
            className="h-full text-center hidden lg:inline"
          >
            +33 7 50 61 95 51
          </Card>
          <Card
            customTitle={
              <div className="flex flex-col items-center">
                <img
                  width="48"
                  height="48"
                  src="logos/location.svg"
                  alt="location pointer"
                />
                <h1 className="2xl:text-3xl xl:text-2xl text-xl font-semibold text-white">
                  {t("contact.quickInfos.researchLocation")}
                </h1>
              </div>
            }
            className="h-full text-center hidden lg:inline"
          >
            {t("contact.quickInfos.locations")}
          </Card>
          <Card
            customTitle={
              <h1 className="w-fit 2xl:text-5xl xl:text-4xl lg:text-3xl text-4xl font-semibold bg-gradient-to-r from-[#a855f7f2] from-30% to-white to-80% bg-clip-text text-transparent pb-1">
                {t("contact.contactForm.title")}
              </h1>
            }
            cardSubTitle={t("contact.contactForm.subtitle")}
            className="h-full row-span-3 lg:col-span-2 col-span-3 pt-5 mx-0 w-full"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder={t("contact.contactForm.placeholderName") + "*"}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg"
                  required
                />

                <input
                  name="email"
                  placeholder={t("contact.contactForm.placeholderEmail") + "*"}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg"
                  required
                />

                <input
                  name="phone"
                  placeholder={t("contact.contactForm.placeholderPhone")}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg md:col-span-2"
                />

                <input name="company" className="hidden" />

                <textarea
                  name="message"
                  placeholder={
                    t("contact.contactForm.placeholderMessage") + "*"
                  }
                  rows={rows}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg md:col-span-2"
                  required
                />
              </div>
              <div className="w-full justify-end flex">
                <button
                  type="submit"
                  disabled={loading}
                  className={`highlight my-4 py-3 rounded-lg bg-[#a855f740]/40 hover:bg-[#A855F7F2] app-btn border-2 border-white shadow-[0_0_10px_rgba(168,85,247,0.95)] transition w-1/2 scale-[0.9] flex items-center justify-center ${loading && "disabled:pointer-events-none disabled:bg-gray-400/70 disabled:opacity-60"}`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="mr-3 -ml-1 size-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      {t("contact.contactForm.ctaWait")}
                    </>
                  ) : (
                    t("contact.contactForm.cta")
                  )}
                </button>
              </div>
              {success && (
                <div
                  className={`
        absolute
        top-1/2
        left-1/2
        w-[93%]
        h-[93%]
        rounded-xl
        border-2
        border-emerald-300
        bg-emerald-900/80
        backdrop-blur-sm
        flex
        items-center
        justify-center
        animate-[successPopupIn_250ms_ease-out_forwards]
        ${hideSuccess && "animate-[successPopupOut_400ms_ease-in_forwards]"}
      `}
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="text-5xl">✔</div>

                    <p className="text-lg font-medium text-emerald-300">
                      {t("contact.contactForm.successMessage")}
                    </p>

                    <p className="text-sm text-emerald-200/70">
                      {t("contact.contactForm.successComplement")}
                    </p>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </FadeIn>
    </section>
  );
}

export default SectionContact;
