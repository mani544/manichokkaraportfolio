import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  Phone,
  PhoneCall,
  MessageCircle,
  Calendar,
  Clock,
} from "lucide-react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    try {
      await fetch("http://localhost:5000/schedule-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("manichokkara2438@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-4 bg-background transition-colors duration-500 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text">
            Let’s Build Something Meaningful
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted">
            Research collaborations, startup ideas, or serious engineering work —
            I’m always open to thoughtful conversations.
          </p>
        </div>

        {/* MAIN GRID */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-stretch transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >

          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-6">

            {/* Conversation Banner */}
            <div className="flex-1 relative overflow-hidden rounded-2xl p-8
              bg-gradient-to-r from-[#0f172a] via-[#0b1e2d] to-[#092638]
              border border-primary/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="text-primary" size={22} />
                <h3 className="text-xl font-semibold text-text">
                  Start a Conversation
                </h3>
              </div>

              <p className="text-muted leading-relaxed">
                Tell me <span className="font-semibold text-text">
                what you're building</span> and{" "}
                <span className="font-semibold text-text">
                why it matters</span>.
              </p>

              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            </div>

            {/* Schedule Form */}
            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-lg hover:border-primary/30 transition">
              <h3 className="text-2xl font-semibold text-text mb-6 flex items-center gap-3">
                <Calendar className="text-primary" size={22} />
                Schedule a Call
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text focus:border-primary outline-none"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text focus:border-primary outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-muted" size={18} />
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full pl-10 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text focus:border-primary outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Clock className="absolute left-3 top-3 text-muted" size={18} />
                    <input
                      name="time"
                      type="time"
                      required
                      className="w-full pl-10 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text focus:border-primary outline-none"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text focus:border-primary outline-none resize-none"
                />

                {success && (
                  <p className="text-green-400 text-sm">
                    ✅ Call scheduled successfully!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col space-y-8">

            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-text mb-4">
                MANI CHOKKARA
              </h3>
              <p className="text-muted leading-relaxed">
                Entrepreneur · Data Scientist · AI Systems Builder
                <br />
                Building intelligent products with long-term thinking.
                Collaborate on innovative projects that leverage AI to solve real-world problems.
               </p>
               <br />
                Engineering Early-stage SaaS & startups with a focus on AI-driven solutions. Let's connect and create impactful products together!
              
            </div>

            <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-text mb-6">
                Contact Information
              </h3>

              <div className="space-y-6 text-muted">

                <div className="flex items-start gap-4">
                  <Mail className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text">Email</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="mailto:manichokkara2438@gmail.com"
                        className="hover:text-primary transition"
                      >
                        manichokkara2438@gmail.com
                      </a>
                      <button
                        onClick={handleCopy}
                        className="text-xs px-2 py-1 rounded-md border border-white/10 hover:border-primary transition"
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-primary" size={20} />
                  <div>
                    <p className="text-sm font-medium text-text">WhatsApp</p>
                    <a
                      href="https://wa.me/919652822402"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition"
                    >
                      +91 9652822402
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <h4 className="text-sm font-semibold text-text mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-6">
                  <Github size={22} />
                  <Linkedin size={22} />
                  <Youtube size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTERED CTA */}
 <div className="mt-16 flex justify-center">
  <button
    type="button"
    disabled={loading}
    onClick={() => formRef.current?.requestSubmit()}
    className="relative group inline-flex items-center justify-center
    px-14 py-4 rounded-2xl font-semibold text-lg
    text-[#020617]
    bg-gradient-to-r
    from-[#0EA5A4]
    via-[#14B8A6]
    to-[#38BDF8]
    transition-all duration-500
    shadow-xl shadow-[#0EA5A4]/30
    hover:shadow-2xl hover:shadow-[#0EA5A4]/50
    hover:scale-[1.03]
    overflow-hidden
    disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {/* Shine sweep */}
    <span
      className="absolute top-0 left-[-75%] w-[50%] h-full
      bg-white/30 skew-x-[-20deg]
      transition-all duration-700
      group-hover:left-[125%]"
    />

    <span className="relative flex items-center gap-3 z-10 font-semibold">
      {loading ? "Scheduling..." : "Schedule Call"}
      <PhoneCall
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  </button>
</div>

      </div>
    </section>
  );
};

export default Contact;
