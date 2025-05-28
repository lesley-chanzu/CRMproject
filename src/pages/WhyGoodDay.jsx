import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "🚀 Boost Productivity",
    description:
      "Goodday helps teams focus on what matters. Automate routine tasks, reduce meetings, and manage your entire workflow from a single dashboard.",
  },
  {
    title: "📊 Data-Driven Decisions",
    description:
      "Access real-time analytics and performance metrics that help you understand team output, customer trends, and pipeline progress instantly.",
  },
  {
    title: "🤝 Seamless Collaboration",
    description:
      "Unite your sales, marketing, and support teams with a centralized communication platform. Share notes, assign tasks, and close deals faster.",
  },
  {
    title: "🛠️ Customizable to Fit You",
    description:
      "Adapt Goodday to your business needs. From custom pipelines to tailored notifications and integrations, it’s CRM your way.",
  },
  {
    title: "🔒 Enterprise-Grade Security",
    description:
      "Your data is protected with top-tier encryption, role-based access, and regular backups — because trust is everything.",
  },
  {
    title: "⚙️ Scalable Infrastructure",
    description:
      "Whether you're a startup or an enterprise, Goodday grows with you. Enjoy fast performance and reliability at every stage of your business.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const WhyGoodDay = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-900 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Why Choose Goodday?</h2>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            At Goodday, we combine innovation, usability, and performance to help businesses scale with confidence.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-purple-700 bg-opacity-60 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-purple-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Company Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Built by Experts. Powered by Passion.</h3>
          <p className="text-purple-200 text-md">
            Our team brings years of experience in building robust SaaS platforms used by thousands globally. We are committed to
            providing fast, secure, and user-centric solutions that adapt to your growth.
          </p>
          <p className="text-purple-300 mt-4">
            With Goodday, you're not just getting a CRM — you're getting a growth partner that puts your team's success first.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGoodDay;
