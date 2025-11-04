"use client";

import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  CheckCircleIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: LightBulbIcon,
    title: "Innovation First",
    description:
      "We leverage cutting-edge technologies and methodologies to deliver solutions that give you a competitive edge.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "Enterprise Security",
    description:
      "Bank-level security protocols and compliance standards to protect your sensitive data and operations.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: RocketLaunchIcon,
    title: "Rapid Deployment",
    description:
      "Agile development practices and CI/CD pipelines ensure faster time-to-market without compromising quality.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: UserGroupIcon,
    title: "Expert Team",
    description:
      "Senior developers, architects, and consultants with 10+ years of experience in enterprise solutions.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock monitoring, maintenance, and support to ensure your systems run smoothly.",
    gradient: "from-red-500 to-pink-600",
  },
  {
    icon: TrophyIcon,
    title: "Proven Success",
    description:
      "60+ successful projects delivered across various industries with 98% client satisfaction rate.",
    gradient: "from-indigo-500 to-purple-600",
  },
];

export default function ProfessionalWhyChooseUs() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={elementRef} className="relative overflow-hidden bg-white py-24 dark:bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent dark:from-slate-800 dark:to-transparent"></div>
        <div className="absolute left-0 top-0 h-72 w-72 -translate-x-32 -translate-y-32 transform rounded-full bg-blue-200 opacity-10 blur-3xl dark:bg-blue-900"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-32 translate-y-32 transform rounded-full bg-purple-200 opacity-10 blur-3xl dark:bg-purple-900"></div>
      </div>

      <div className="container relative mx-auto px-6">
        {/* Main Content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Content */}
          <motion.div

            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span

              className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
            >
              Why Choose Us
            </motion.span>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">
              Your Trusted
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Technology Partner
              </span>
            </h2>

            <p className="mb-8 text-xl mobile:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              We combine deep technical expertise with business acumen to deliver solutions that not
              only meet your immediate needs but also position you for future growth and success.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    End-to-End Solutions
                  </h4>
                  <p className="text-slate-600 mobile:text-sm dark:text-slate-400">
                    From strategy and design to development and deployment, we handle every aspect
                    of your project.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    Scalable Architecture
                  </h4>
                  <p className="text-slate-600 mobile:text-sm dark:text-slate-400">
                    Built for growth with cloud-native, microservices architecture that scales with
                    your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                    Industry Expertise
                  </h4>
                  <p className="text-slate-600 mobile:text-sm dark:text-slate-400">
                    Deep knowledge across fintech, healthcare, e-commerce, and enterprise software
                    domains.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Reasons Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/20 dark:hover:shadow-blue-500/5">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                    ></div>

                    {/* Icon */}
                    <div
                      className={`inline-flex rounded-xl bg-gradient-to-br p-3 ${reason.gradient} mb-4 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {reason.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {reason.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.gradient} origin-left scale-x-0 transform transition-transform duration-500 group-hover:scale-x-100`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
