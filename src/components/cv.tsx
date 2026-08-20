import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const skills = [
  { label: "Web Development", value: "JavaScript/TypeScript, React, Express, Jest" },
  { label: "Databases & BaaS", value: "SQLite, MongoDB, Redis, Firebase" },
  { label: "DevOps & Cloud", value: "GCP, Terraform, Docker, GitHub Actions" },
  { label: "Other Languages", value: "C, Java, Python, PHP" },
];

const languages = [
  { name: "Japanese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "German", level: "C1" },
  { name: "Swedish", level: "A2–B1" },
];

const experience = [
  {
    role: "Software Developer",
    company: "IKEA",
    period: "2024 - Present",
    bullets: [
      "Built and maintained internal SEO-customization tools used by the specialist team to manage and optimize content faster.",
      "Improved application performance and load times, streamlining daily workflows for the SEO/SEM team.",
      "Automated recurring SEO processes, including metadata updates, using AI-assisted tooling.",
      "Partnered with cross-functional teams to translate business needs into technical solutions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "GreenCarLane",
    period: "2024",
    bullets: [
      "Led development of a multi-functional company website used to showcase the business model at exhibitions.",
      "Introduced development guidelines and a mentorship program to raise code quality and speed up onboarding.",
      "Supported recruitment of frontend developers, helping build out the development team.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "PLUSCLASS SPORTS INCUBATION",
    period: "2022 - 2024",
    bullets: [
      "Improved application performance by over 80% by optimizing server- and client-side rendering and introducing caching.",
      "Maintained and developed a B2B web application used by 8,000+ active users.",
      "Ran team task management and code reviews to keep delivery quality high.",
    ],
  },
];

const education = [
  {
    school: "Tokyo Online University",
    program: "B.A., Information and Management",
    period: "2021 - Present",
  },
  {
    school: "Technigo Coding Bootcamp",
    program: "Web Development Program",
    period: "2023 - 2024",
  },
];

export function Cv() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#2A2A28] py-10 px-4 sm:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="border-b border-[#E3DFD6] pb-8 mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-[#C97B84] font-semibold mb-2">
            Full Stack Developer
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#211F1D]">
            Sakura Tanaka
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-sm text-[#5B564E]">
            <a
              href="mailto:sito6496t@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#C97B84] transition-colors"
            >
              <Mail className="w-4 h-4" />
              sito6496t@gmail.com
            </a>
            <a
              href="https://github.com/sansan-sakura"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C97B84] transition-colors"
            >
              <Github className="w-4 h-4" />
              github.com/sansan-sakura
            </a>
            <a
              href="https://www.linkedin.com/in/sakura-tanaka-kalix/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#C97B84] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/sakura-tanaka-kalix
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Kalix, Sweden
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="space-y-8">
            <section>
              <h2 className="font-serif text-lg mb-3 text-[#211F1D]">Summary</h2>
              <p className="text-sm leading-relaxed text-[#5B564E]">
                Full-stack developer with 4 years across an early-stage startup and a large
                enterprise, shipping internal tools, B2B applications, and performance-critical
                front ends. Comfortable owning a feature end to end, from planning through
                deployment.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-lg mb-3 text-[#211F1D]">Skills</h2>
              <div className="space-y-3">
                {skills.map((s) => (
                  <div key={s.label}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#C97B84]">
                      {s.label}
                    </p>
                    <p className="text-sm text-[#5B564E] mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-lg mb-3 text-[#211F1D]">Languages</h2>
              <ul className="space-y-1.5">
                {languages.map((l) => (
                  <li key={l.name} className="flex justify-between text-sm text-[#5B564E]">
                    <span>{l.name}</span>
                    <span className="text-[#8A857A]">{l.level}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* Main column */}
          <main className="space-y-10">
            <section>
              <h2 className="font-serif text-lg mb-5 text-[#211F1D]">Experience</h2>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div
                    key={job.role + job.company}
                    className="relative pl-5 border-l-2 border-[#E3DFD6]"
                  >
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#C97B84]" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-medium text-[#211F1D]">{job.role}</h3>
                      <span className="text-xs text-[#8A857A]">{job.period}</span>
                    </div>
                    <p className="text-sm text-[#C97B84] font-medium mb-2">{job.company}</p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-sm leading-relaxed text-[#5B564E] flex gap-2">
                          <span className="text-[#C97B84] mt-1.5 block w-1 h-1 rounded-full bg-[#C97B84] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-lg mb-5 text-[#211F1D]">Education</h2>
              <div className="space-y-4">
                {education.map((ed) => (
                  <div
                    key={ed.school}
                    className="flex flex-wrap items-baseline justify-between gap-x-3"
                  >
                    <div>
                      <h3 className="font-medium text-[#211F1D] text-sm">{ed.school}</h3>
                      <p className="text-sm text-[#5B564E]">{ed.program}</p>
                    </div>
                    <span className="text-xs text-[#8A857A]">{ed.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Cv;
