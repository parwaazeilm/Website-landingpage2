import { useState, useEffect, useRef } from "react";
import { Linkedin, Eye, Target } from "lucide-react";

export default function Index() {
  const [isUrdu, setIsUrdu] = useState(true);
  const [visibleSections, setVisibleSections] = useState({ vision: false, mission: false });
  const visionRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsUrdu((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const mathSymbols = ["π", "∞", "√", "Σ", "∫", "≈", "×", "÷", "±", "≠", "≤", "≥", "∂", "α", "θ", "β", "γ", "Δ", "λ", "μ"];
  const floatingSymbols = Array.from({ length: 100 }, (_, index) => ({
    symbol: mathSymbols[index % mathSymbols.length],
    x: (index * 137) % 1140 + 20,
    y: (index * 83) % 740 + 30,
    size: 26 + ((index * 11) % 30),
    opacity: 0.22 + ((index * 7) % 17) / 100,
    color: index % 2 === 0 ? "#d4af37" : "#005d9f",
    delay: -((index * 13) % 90) / 10,
    duration: 5 + ((index * 17) % 50) / 10,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === visionRef.current) {
              setVisibleSections((prev) => ({ ...prev, vision: true }));
            }
            if (entry.target === missionRef.current) {
              setVisibleSections((prev) => ({ ...prev, mission: true }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);

    return () => {
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style>{`
        @keyframes float1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-30px); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
        .math-symbol { animation: float1 6s ease-in-out infinite; }
        .math-symbol:nth-child(2) { animation: float2 8s ease-in-out infinite; animation-delay: 1s; }
        .math-symbol:nth-child(3) { animation: float3 7s ease-in-out infinite; animation-delay: 2s; }
        .math-symbol:nth-child(4) { animation: float1 7s ease-in-out infinite; animation-delay: 0.5s; }
        .math-symbol:nth-child(5) { animation: float2 6s ease-in-out infinite; animation-delay: 1.5s; }
        .math-symbol:nth-child(6) { animation: float3 8s ease-in-out infinite; animation-delay: 2.5s; }
        .math-symbol:nth-child(7) { animation: float1 9s ease-in-out infinite; animation-delay: 1.2s; }
        .math-symbol:nth-child(8) { animation: float2 7s ease-in-out infinite; animation-delay: 2.8s; }
        .math-symbol:nth-child(9) { animation: float3 8.5s ease-in-out infinite; animation-delay: 0.8s; }
        .math-symbol:nth-child(10) { animation: float1 6.5s ease-in-out infinite; animation-delay: 2.2s; }
        .math-symbol:nth-child(11) { animation: float2 7.5s ease-in-out infinite; animation-delay: 1.8s; }
        .math-symbol:nth-child(12) { animation: float3 8s ease-in-out infinite; animation-delay: 0.3s; }
        .math-symbol:nth-child(13) { animation: float1 6.8s ease-in-out infinite; animation-delay: 2.1s; }
        .math-symbol:nth-child(14) { animation: float2 7.8s ease-in-out infinite; animation-delay: 1.6s; }
        .math-symbol:nth-child(15) { animation: float3 9.2s ease-in-out infinite; animation-delay: 2.4s; }
      `}</style>
      {/* Header */}
      <nav className="sticky top-0 z-50 shadow-lg transition-shadow duration-500" style={{ backgroundColor: "#005d9f" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 sm:gap-6 cursor-pointer group min-w-0">
            {/* Logo Circle */}
            <div className="w-28 h-28 sm:w-44 sm:h-44 flex-shrink-0 bg-white rounded-full p-4 sm:p-5 shadow-lg group-hover:shadow-xl transition-shadow -my-6 sm:-my-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F1f31d0859f844284bd3f572072dce69b%2F51eef5d1bd4241048cc2d9f70630287c?format=webp&width=800&height=1200"
                alt="parwaazeilm logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Animated Text */}
            <div className="relative w-48 sm:w-56 h-10 flex items-center">
              <span
                className={`font-bold text-2xl sm:text-3xl font-display transition-opacity duration-700 absolute whitespace-nowrap ${
                  isUrdu ? "opacity-100" : "opacity-0"
                }`}
                style={{ color: "#ffffff" }}
              >
                پرواز علم
              </span>

              <span
                className={`font-bold text-2xl sm:text-3xl font-display transition-opacity duration-700 absolute whitespace-nowrap ${
                  !isUrdu ? "opacity-100" : "opacity-0"
                }`}
                style={{ color: "#ffffff" }}
              >
                PARWAAZ E ILM
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a
              href="#about"
              className="text-white hover:text-yellow-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 transition-all duration-300 font-semibold text-sm relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full group-focus-visible:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-white hover:text-yellow-300 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 transition-all duration-300 font-semibold text-sm relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full group-focus-visible:w-full transition-all duration-300"></span>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmhtd2nlMXe7gsbZLMpWqEd4p00kTUEF2ZEAvMZtaF5WOkSw/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 bg-yellow-400 text-blue-900 font-semibold text-sm rounded-full hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
            >
              Partner as School
            </a>
            <a
              href="https://www.linkedin.com/company/parwaaz-e-ilm/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white bg-opacity-20 rounded-lg text-white hover:bg-opacity-30 hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 motion-fade">
        <div className="max-w-4xl mx-auto text-center motion-rise">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight" style={{ color: "#005d9f" }}>
            Where Dreams Take Flight
          </h1>

          <p className="text-lg sm:text-xl text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold">Parwaaz-e-Ilm</span> empowers students through conceptual learning, critical thinking, and Olympiad excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/DVoAB0y2ErMK3ZQ7MJVoFS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg rounded-2xl hover:bg-yellow-300 hover:shadow-lg transition-all duration-300"
            >
              Join Our Community
            </a>
            <a
              href="https://calendly.com/parwaazeilm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 border-2 border-blue-900 text-blue-900 font-bold text-lg rounded-2xl hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              Book 1:1
            </a>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section id="about" className="scroll-mt-8 py-24 px-4 sm:px-8 lg:px-12 bg-white relative overflow-hidden motion-fade">
        {/* Floating Math Symbols for this section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" aria-hidden="true">
            {floatingSymbols.map((item, index) => (
              <text
                key={`${item.symbol}-${index}`}
                x={item.x}
                y={item.y}
                className="math-symbol"
                fontSize={item.size}
                fill={item.color}
                opacity={item.opacity}
                fontFamily="Georgia, serif"
                style={{ animationDelay: `${item.delay}s`, animationDuration: `${item.duration}s` }}
              >
                {item.symbol}
              </text>
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Vision Card */}
            <div
              ref={visionRef}
              className={`p-10 rounded-2xl border-2 transition-all duration-1000 transform ${
                visibleSections.vision
                  ? "opacity-100 translate-y-0 border-yellow-400"
                  : "opacity-0 translate-y-12 border-blue-200"
              }`}
              style={{ backgroundColor: "#f0f7ff" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-400 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-900" />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: "#005d9f" }}>
                  Vision
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Eradicate rote learning and cultivate Olympiad culture
              </p>
            </div>

            {/* Mission Card */}
            <div
              ref={missionRef}
              className={`p-10 rounded-2xl border-2 transition-all duration-1000 transform ${
                visibleSections.mission
                  ? "opacity-100 translate-y-0 border-yellow-400"
                  : "opacity-0 translate-y-12 border-blue-200"
              }`}
              style={{ backgroundColor: "#f0f7ff" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-yellow-400 rounded-lg">
                  <Target className="w-6 h-6 text-blue-900" />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: "#005d9f" }}>
                  Mission
                </h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                Provide conceptual learning and awareness about Olympiads
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white motion-fade">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: "#005d9f" }}>
              Our Services
            </h2>
            <p className="text-xl text-slate-600">Tailored programs for students and schools</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: 1 Year Competitive Programming */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-8 relative min-h-96">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#005d9f" }}>
                1 Year Competitive Programming Course
              </h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                Master Competitive Programming from beginner to advanced with structured lessons in algorithms, data structures, and contest-based problem solving.
              </p>

              {/* Status Badge - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <div className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full text-sm">
                  Completed
                </div>
              </div>
            </div>

            {/* Card 2: 3 Month School Programming */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-8 relative min-h-96">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#005d9f" }}>
                3 Month School Programming Course
              </h3>
              <p className="text-slate-700 leading-relaxed mb-8">
                A beginner-friendly 3-month competitive programming course with hands-on learning, concluding in a school-wide contest and awards.
              </p>

              {/* Register Button - Bottom Left */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdmhtd2nlMXe7gsbZLMpWqEd4p00kTUEF2ZEAvMZtaF5WOkSw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-6 px-4 py-2 text-white font-semibold rounded-2xl hover:shadow-md transition-all duration-300 text-sm"
                style={{ backgroundColor: "#005d9f" }}
              >
                Register Your School
              </a>

              {/* Status Badge - Bottom Right */}
              <div className="absolute bottom-6 right-6">
                <div className="px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full text-sm">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="scroll-mt-8 bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8 motion-fade">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F1f31d0859f844284bd3f572072dce69b%2F51eef5d1bd4241048cc2d9f70630287c?format=webp&width=800&height=1200"
                    alt="parwaazeilm logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-white text-lg">Parwaaz e Ilm</span>
              </div>
              <p className="text-slate-400 text-sm">Empowering students through quality education since 2025</p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Inquiry</p>
                  <a
                    href="https://wa.me/923456684112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition text-sm font-semibold"
                  >
                    03456684112
                  </a>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <a
                    href="mailto:sahilsarfraz@gmail.com"
                    className="text-yellow-400 hover:text-yellow-300 transition text-sm font-semibold"
                  >
                    sahilsarfraz@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-white font-bold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <a
                  href="https://www.youtube.com/@parwaazeilm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-yellow-400 transition text-sm font-semibold block"
                >
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/company/parwaaz-e-ilm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-yellow-400 transition text-sm font-semibold block"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Info Section */}
            <div>
              <h3 className="text-white font-bold mb-4">About</h3>
              <div className="space-y-2">
                <p className="text-slate-400 text-sm">Since <span className="text-yellow-400 font-semibold">2025</span></p>
                <p className="text-slate-400 text-sm">Dedicated to empowering the next generation of learners and problem solvers.</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <p className="text-center text-slate-400 text-sm">
              © 2026 Parwaaz e Ilm. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
