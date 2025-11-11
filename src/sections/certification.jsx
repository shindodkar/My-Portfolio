import { Award } from "lucide-react";
import { useState } from "react";

const Certificate = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Participation Certification",
      issuer: "HackManthan- Eventeye",
      pdfUrl: "/assets/HackManthan.jpeg",
      thumbnail: "/assets/HackManthan.jpeg",
    },
    {
      id: 2,
      title: "Participation Certification",
      issuer: "Founder's talk- Capabl",
      pdfUrl: "/assets/capabl.pdf",
      thumbnail: "/assets/cap.png",
    },
  ];

  return (
    <section
      className="relative flex items-center justify-center c-space section-spacing overflow-hidden"
      id="certificates"
      style={{
        background: `linear-gradient(to bottom, transparent 0%, #030412 100%)`,
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes animated-dark-bg {
          0% { filter: hue-rotate(0deg) brightness(0.4); }
          50% { filter: hue-rotate(40deg) brightness(0.55); }
          100% { filter: hue-rotate(0deg) brightness(0.4); }
        }

        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(-30px, -10px) scale(1.05); }
        }

        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-30px, 10px) scale(0.9); }
          50% { transform: translate(20px, -30px) scale(1.1); }
          75% { transform: translate(10px, 20px) scale(0.95); }
        }

        .dark-animated-bg {
          background: radial-gradient(circle at center, #0f0f1a, #050510, #000000);
          animation: animated-dark-bg 12s ease-in-out infinite;
        }

        .blob {
          position: absolute;
          mix-blend-mode: screen;
          opacity: 0.35;
          filter: blur(55px);
        }

        .blob-1 { animation: blob-1 10s infinite ease-in-out; }
        .blob-2 { animation: blob-2 11s infinite ease-in-out; }
      `}</style>

      {/* DARKER, MORE ANIMATED BACKGROUND */}
      <div className="absolute inset-0 -z-40 bg-[#030412]" />

      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700 blob blob-1 -z-30 opacity-40" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-700 blob blob-2 -z-30 opacity-40" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-fuchsia-600 rounded-full blur-3xl opacity-20 -z-30 animate-pulse" />

      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="text-center animate-pulse">
          <h2 className="text-heading text-white mb-2">Certifications</h2>
          <p className="text-neutral-400 text-sm">
            Professional credentials and achievements
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {certificates.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative w-80 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/40 hover:shadow-xl cursor-pointer"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Award className="w-6 h-6 text-purple-300 group-hover:text-purple-400 transition-all duration-300 flex-shrink-0 mt-1" />
                  <h3 className="text-sm font-semibold text-white group-hover:text-purple-200 transition-all duration-300 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-all duration-300 flex items-center gap-1">
                  {cert.issuer}
                  <span className="opacity-0 group-hover:opacity-100 transition-all">
                    ↗
                  </span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
