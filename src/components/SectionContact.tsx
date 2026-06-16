import { useState, useEffect } from "react";
import FadeIn from "./animations/FadeIn";
import Card from "./Card";
function SectionContact() {
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
      setSuccess(true);
      e.target.reset();
    }
  };
  return (
    <section id="contact">
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
                  Phone Number
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
                  Sector
                </h1>
              </div>
            }
            className="h-full text-center hidden lg:inline"
          >
            Nantes and periphery, Cholet, Saint-Nazaire
          </Card>
          <Card
            customTitle={
              <h1 className="w-fit 2xl:text-5xl xl:text-4xl lg:text-3xl text-4xl font-semibold bg-gradient-to-r from-[#a855f7f2] from-30% to-white to-80% bg-clip-text text-transparent pb-1">
                Let's work together !
              </h1>
            }
            cardSubTitle="Interested in my profile or have an opportunity to discuss ? I'd be happy to hear from you and explore how can I contribute to your team."
            className="h-full row-span-3 lg:col-span-2 col-span-3 pt-5 mx-0 w-full"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  placeholder="Name / Firstname*"
                  className="bg-white/5 border border-white/10 p-3 rounded-lg"
                  required
                />

                <input
                  name="email"
                  placeholder="Email*"
                  className="bg-white/5 border border-white/10 p-3 rounded-lg"
                  required
                />

                <input
                  name="phone"
                  placeholder="Phone (optional)"
                  className="bg-white/5 border border-white/10 p-3 rounded-lg md:col-span-2"
                />

                <input name="company" className="hidden" />

                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows={rows}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg md:col-span-2"
                  required
                />
              </div>
              <div className="w-full justify-end flex">
                <button
                  type="submit"
                  disabled={loading}
                  className="highlight my-4 py-3 rounded-lg bg-[#a855f740]/40 hover:bg-[#A855F7F2] app-btn border-2 border-white shadow-[0_0_10px_rgba(168,85,247,0.95)] transition w-1/2 scale-[0.9] flex items-center justify-center"
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
                      Envoi...
                    </>
                  ) : (
                    "Envoyer"
                  )}
                </button>
              </div>
              {success && (
                <p className="text-emerald-300 text-center">
                  Message envoyé avec succès ✔
                </p>
              )}
            </form>
          </Card>
        </div>
      </FadeIn>
    </section>
  );
}

export default SectionContact;
