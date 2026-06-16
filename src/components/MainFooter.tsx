function MainFooter() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-8 text-white/80">
        <div className="flex flex-col gap-2 sm:w-1/3 w-full">
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Kévin Jaulin
          </h3>
          <p className="text-sm text-white/50">
            Fullstack Developer • React / Spring
          </p>
        </div>
        <div className="sm:grid sm:grid-cols-2 flex flex-row sm:w-2/3 w-auto sm:justify-items-center justify-between">
          <div className="flex flex-col gap-2 text-sm">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-1">
              Navigation
            </span>
            <a href="#home" className="hover:text-[#A855F7F2]">
              Home
            </a>
            <a href="#projects" className="hover:text-[#A855F7F2]">
              Projects
            </a>
            <a href="#experience" className="hover:text-[#A855F7F2]">
              Experience
            </a>
            <a href="#contact" className="hover:text-[#A855F7F2]">
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-2 text-sm justify-self-end text-right md:text-left">
            <span className="text-white/50 text-xs uppercase tracking-widest mb-1">
              Connect
            </span>
            <a
              href="https://github.com/kevjaul"
              target="_blank"
              className="hover:text-[#A855F7F2]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jaulinkev/"
              target="_blank"
              className="hover:text-[#A855F7F2]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kevin31072002@gmail.com"
              target="_blank"
              className="hover:text-[#A855F7F2]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Kévin Jaulin — Build with React,
        Tailwind & Resend
      </div>
    </footer>
  );
}

export default MainFooter;
