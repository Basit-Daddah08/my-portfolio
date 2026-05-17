export default function App() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <span className="text-lg font-semibold tracking-tight">Basit Daddah</span>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <p className="text-zinc-500 text-sm mb-4 tracking-widest uppercase">Frontend Developer · UI Designer · Lagos</p>
        <h1 className="text-6xl font-bold leading-tight mb-6">
          I build interfaces <br />
          <span className="text-zinc-500">people actually enjoy.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mb-10">
          I design in Figma, build in React, and care about every detail —
          from the first pixel to the final interaction.
        </p>
        <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
          See my work
        </a>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-800 max-w-6xl mx-auto px-8 py-24">
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">About</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-3xl font-semibold leading-snug">
            Self-taught, Lagos-based, and always building something.
          </h2>
          <div className="text-zinc-400 space-y-4 text-base leading-relaxed">
            <p>
              I got into frontend development because I care about how things look and feel.
              Good design isn't decoration — it's the difference between something people use and something they don't.
            </p>
            <p>
              I work across the full design-to-code pipeline: wireframes and mockups in Figma,
              built out in React and Tailwind, tested until it works on every screen.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Tailwind CSS", "JavaScript", "Figma", "HTML & CSS", "Node.js", "QA Testing"].map(skill => (
                <span key={skill} className="border border-zinc-700 text-zinc-300 text-xs px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-800 max-w-6xl mx-auto px-8 py-24">
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Portfolio Site",
              desc: "This site — designed in Figma and built from scratch in React and Tailwind.",
              tags: ["React", "Tailwind"],
              status: "Live"
            },
            {
              title: "Component Library",
              desc: "A growing set of reusable UI components — buttons, cards, modals, forms.",
              tags: ["React", "TypeScript"],
              status: "In progress"
            },
            {
              title: "Figma to Code",
              desc: "Took a full Figma design and rebuilt it pixel-perfect in React.",
              tags: ["Figma", "React"],
              status: "Coming soon"
            }
          ].map(project => (
            <div key={project.title} className="border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-base">{project.title}</h3>
                <span className="text-xs text-zinc-500">{project.status}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800 max-w-6xl mx-auto px-8 py-24">
        <p className="text-zinc-500 text-xs tracking-widest uppercase mb-6">Contact</p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-4xl font-semibold max-w-md leading-snug">
            Open to work. Let's talk.
          </h2>
          <a href="mailto:daddahbasit@gmail.com" className="border border-zinc-700 px-6 py-3 rounded-full text-sm hover:bg-zinc-800 transition">
            daddahbasit@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 max-w-6xl mx-auto px-8 py-8">
        <p className="text-zinc-600 text-sm">© 2025 Basit Daddah</p>
      </footer>

    </div>
  )
}