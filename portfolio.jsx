import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "career", label: "Career" },
  { id: "ethics", label: "Ethics" },
  { id: "contact", label: "Contact" },
];

const TECH_PILLS = [
  "DevOps",
  "AI & ML",
  "Red Hat & Ubuntu Linux",
  "Python",
  "Bash",
  "Ansible",
  "OpenStack",
  "IBM Cloud",
  "Git",
];

const ACADEMIC_CHRONICLES = [
  {
    id: "wisdom",
    title: "Launching into the World of Wisdom",
    badge: "Sathyabama University",
    accent: "cyan",
    description:
      "From mastering the intricacies of computer engineering to honing essential life skills, my journey at Sathyabama University was a transformative odyssey. Four years of academic immersion, culminating in a real-time project during the final year, paved the way for my entry into the IT industry.",
  },
  {
    id: "quiz",
    title: "Quiz Champion: A Science Quiz Triumph",
    badge: "1st Prize • IEEE Forum",
    accent: "yellow",
    description:
      "The pinnacle of my academic experience was marked by a notable achievement — a first prize in a Science quiz conducted by IEEE forum at Sathyabama University.",
  },
  {
    id: "class-2013",
    title: "Class of 2013: BE Graduation Unsung Anthem",
    badge: "Class of 2013 • Resilience",
    accent: "purple",
    description:
      "In the dynamic tapestry of my academic journey, the Class of 2013 holds a unique melody. As a shy, reserved introvert, wearing the cloak of determination on the graduation day, I navigated challenges throughout my university years. The path to graduation didn't unfold in the traditional ceremony. Yet, within this unconventional tale lies a testament to tenacity and resilience. In the year 2013, armed with a degree earned through persistence, I stepped into the vast realms of Information Technology, proving that success, though delayed, is ultimately inevitable.",
  },
];

const CAREER_TIMELINE = [
  {
    period: "2014 – 2017",
    title: "Embarking on the IT Odyssey",
    company: "Mindtree LTD",
    role: "Junior System Engineer",
    accent: "cyan",
    description:
      "Joining Mindtree LTD in 2014 as Junior System Engineer, I delved into the realm of IT, providing robust support for Linux servers and hosted middlewares, mastering Bash shell scripting, and venturing into the world of Solaris.",
    tags: ["Linux Servers", "Middleware", "Bash Scripting", "Solaris"],
  },
  {
    period: "2017 – 2022",
    title: "Formalities and Fidelity",
    company: "Fidelity Investments",
    role: "Team FSC & Server Operations",
    accent: "purple",
    description:
      "At Fidelity Investments, I initially contributed to Team FSC, honing formal communication skills and breaking through personal barriers. Transitioning again back to the Server Operations team, I managed Red Hat Linux, delved into OpenStack, and flexed my scripting muscles with Python, Shell scripting, and Ansible automation.",
    tags: ["Red Hat Linux", "OpenStack", "Python", "Shell Scripting", "Ansible"],
  },
  {
    period: "2022 – Present",
    title: "Cloudscape Chronicles at HCL",
    company: "HCL Technologies",
    role: "Cloud & Linux Infrastructure",
    accent: "cyan",
    description:
      "In 2022, I stepped into HCL Technologies, navigating the intricacies of IBM cloud infrastructure. Armed with Ubuntu Linux prowess, Shell scripting finesse, Python proficiency, and Git wizardry, I continue to shape the digital future.",
    tags: ["IBM Cloud", "Ubuntu Linux", "Python", "Shell Scripting", "Git"],
  },
];

const ETHICS_PILLARS = [
  {
    title: "The Harmony of Success: Empathy, Politeness, and Truth",
    quote:
      '"Success, to me, is the harmonious blend of empathy, politeness, truthfulness, humility, and honest negotiation—an unwavering commitment where rudeness has no place."',
    accent: "cyan",
  },
  {
    title: "Promise Keeper: Trust-Fueled Success Beyond Dollars",
    quote:
      '"Where trust is valued, and promises are sacred, success takes precedence over mere monetary gains in my journey."',
    accent: "purple",
  },
  {
    title: "Global Harmony Advocate",
    quote:
      'Wholeheartedly embracing a Purananuru perspective, "I am a world citizen. Every citizen is my own kith and kin."',
    subtitle: "Yaadhum Oore Yaavarum Kelir",
    accent: "cyan",
  },
  {
    title: "Zero Tolerance Towards Any Hatred",
    quote:
      '"I stand against all discrimination. From gender to color, race to caste, varna to linguistic differences, culture to nationality, and religion to sexual preference — I champion a world where inclusivity triumphs over prejudice."',
    accent: "purple",
  },
  {
    title: "Knowledge Unchained",
    quote:
      "In my professional ethos, I firmly believe that knowledge is meant to be shared, not locked away in a vault. Sharing not only enriches others but also refines our mastery, making it irrational not to contribute to the collective pool of wisdom.",
    accent: "cyan",
  },
  {
    title: "Do the Right Thing",
    quote:
      '"As a firm believer in following one\'s conscience, my professional ethos revolves around a dedicated commitment to doing justice to the job. It\'s a journey where passion and purpose intertwine, creating a harmonious blend of fulfillment."',
    accent: "purple",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "sathyasheelan.gnu@gmail.com";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2600);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2600);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-cyan-400/30 selection:text-cyan-200">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .cyber-grid-bg {
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid-pattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3e%3cpath d='M 80 0 L 0 0 0 80' fill='none' stroke='rgb(34 211 238 / 0.08)' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid-pattern)'/%3e%3c/svg%3e");
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.06); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 7s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="fixed inset-0 cyber-grid-bg pointer-events-none -z-20" />
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/4 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-purple-600/20 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute bottom-8 left-1/3 w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full bg-cyan-400/15 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-lg border-b border-cyan-400/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <span className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 font-mono text-xs font-bold">
              &gt;_
            </span>
            <span className="font-bold tracking-wide text-base sm:text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sathya sheelan J
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 shadow-sm shadow-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden px-3 py-2 rounded-lg bg-white/5 border border-cyan-400/25 text-cyan-400 hover:bg-cyan-400/10 transition-colors cursor-pointer text-sm font-mono"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-cyan-400/20 px-4 pt-2 pb-4 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="opacity-60">›</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="about" className="pt-28 sm:pt-36 pb-20">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/25 via-purple-500/25 to-cyan-500/25 blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-2xl bg-black/70 backdrop-blur-lg border border-cyan-400/25 p-6 sm:p-10 lg:p-12 shadow-2xl">
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
                <span>DevOps • AI &amp; ML • Continuous Learner • Chennai, India</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-500 bg-clip-text text-transparent">
                Sathya sheelan J
              </h1>

              <div className="space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed">
                <p className="text-xl sm:text-2xl font-semibold text-cyan-300">
                  Greetings!
                </p>
                <p>
                  I&apos;m a passionate computer science enthusiast based in the vibrant city of{" "}
                  <span className="text-cyan-400 font-medium">Chennai</span>.
                </p>
                <p>
                  Armed with a degree in computer science engineering, my journey in the tech world
                  has been nothing short of exhilarating. Inspired by{" "}
                  <span className="text-purple-300 font-medium">Socrates</span>, who learned a melody
                  on the flute even in the face of adversity, I embrace challenges as opportunities
                  for growth. My commitment extends beyond personal development.
                </p>
                <p>
                  Currently immersed in the realms of{" "}
                  <span className="text-cyan-400 font-medium">DevOps</span>,{" "}
                  <span className="text-purple-400 font-medium">AI</span>, and{" "}
                  <span className="text-cyan-400 font-medium">ML</span>, I embody the spirit of
                  continuous learning.
                </p>
                <p>
                  Having navigated the intricacies of programming and computer technology through
                  perseverance, I&apos;m dedicated to making the learning process smoother for others.
                  My mission is to share knowledge far and wide, facilitating an environment where
                  learning is both enjoyable and accessible.
