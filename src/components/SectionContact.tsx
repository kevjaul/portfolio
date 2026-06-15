import { useState } from "react";
import FadeIn from "./animations/FadeIn";
import Card from "./Card";
function SectionContact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
            cardTitle="Email"
            className="h-full text-center hidden lg:inline"
          >
            kevin31072002@gmail.com
          </Card>
          <Card
            cardTitle="Phone Number"
            className="h-full text-center hidden lg:inline"
          >
            +33 7 50 61 95 51
          </Card>
          <Card
            cardTitle="Sector"
            className="h-full text-center hidden lg:inline"
          >
            Nantes and periphery, Cholet, Saint-Nazaire
          </Card>
          <Card
            cardTitle="Want's to collabor ? Contact me !"
            cardSubTitle="I will be happy to work with you !"
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
                  rows={4}
                  className="bg-white/5 border border-white/10 p-3 rounded-lg md:col-span-2"
                  required
                />
              </div>
              <div className="w-full justify-end flex">
                <button
                  type="submit"
                  disabled={loading}
                  className="highlight my-4 py-3 rounded-lg bg-[#a855f740]/40 hover:bg-[#a855f740] app-btn border-2 border-white shadow-[0_0_10px_rgba(168,85,247,0.95)] transition w-1/2 scale-[0.9]"
                >
                  {loading ? "Envoi..." : "Envoyer"}
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
