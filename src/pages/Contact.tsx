import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import locationMap from "../images/map.png";

import "../css/contactpage.css";

export default function Contact(): JSX.Element {
  return (
    <section className="py-20 px-6 project-card min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">
            CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let’s Build Something Together
          </h2>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* ========== LEFT CONTENT ========== */}
          <div className="text-white space-y-6">
            <h3 className="text-4xl font-bold leading-tight">
              Connect with <span className="text-purple-400">Me</span>
            </h3>

            <p className="text-white/70 text-lg">
              Have an idea, project, or just want to say hello?
              I’m always open to discussing new opportunities,
              creative ideas, or collaborations.
            </p>

            <ul className="space-y-3 text-white/80">
              <li>🚀 Web Development & UI Design</li>
              <li>🤖 Machine Learning & AI Projects</li>
              <li>🧠 Research & Experimental Work</li>
              <li>📩 Freelance & Collaboration</li>
            </ul>

            <p className="text-white/60">
              Drop a message and I’ll get back to you as soon as possible.
            </p>
          </div>

          {/* ========== RIGHT FORM ========== */}
          <Card className="bg-white/20 border-none text-white p-8">
            <form className="grid gap-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 outline-none focus:border-white/40 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        


        {/* ================= FAQ SECTION ================= */}
<div className="mb-12 margin-top-faq ">
  <h3 className="text-center text-white text-2xl md:text-3xl font-semibold mb-8">
    Frequently Asked Questions
  </h3>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        q: "Do you take freelance projects?",
        a: "Yes, I’m open to freelance work as well as long-term collaborations depending on the project scope."
      },
      {
        q: "Are you open to research-based work?",
        a: "Absolutely. I’m especially interested in AI, Machine Learning, and experimental research projects."
      },
      {
        q: "What technologies do you usually work with?",
        a: "I primarily work with React, JavaScript, Python, Machine Learning frameworks, and modern UI tools."
      },
      {
        q: "How soon can I expect a response?",
        a: "I usually respond within 24 hours after receiving a message."
      },
    ].map((faq, idx) => (
      <Card
        key={idx}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white hover:bg-white/15 transition"
      >
        <h4 className="font-semibold mb-2 text-lg">
          {faq.q}
        </h4>
        <p className="text-white/70 text-sm leading-relaxed">
          {faq.a}
        </p>
      </Card>
    ))}
  </div>
</div>


        {/* ================= MAP SECTION ================= */}
        <div className="margin-top-map">
          <h3 className="text-center text-white text-2xl font-semibold mb-6">
            Our Location
          </h3>

          <Card className="bg-white/20 border-none overflow-hidden">
            <img
              src={locationMap}
              alt="Location Map"
              className="w-full map-height object-cover"
            />
          </Card>
        </div>

      </div>
    </section>
  );
}
