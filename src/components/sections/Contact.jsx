import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Contact from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contact" className="section-padding relative" aria-label="Contact">
      <div className="section-container">
        <SectionHeading
          tag="Get In Touch"
          title="Let's Connect"
          subtitle="Have an internship opportunity or project in mind? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Feel free to reach out for collaborations, internships, or just a friendly hello.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-primary-400 dark:text-slate-400"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-sm sm:text-base">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-violet/20">
                    <MapPin className="h-5 w-5 text-accent-violet" />
                  </div>
                  <span className="text-sm sm:text-base">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-slate-500">Connect on social media</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8" noValidate>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-emerald-400"
                  role="status"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Opening your email client to send the message...</span>
                </motion.div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-900 placeholder-slate-500 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-white"
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-900 placeholder-slate-500 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-white"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-900 placeholder-slate-500 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-white"
                  placeholder="Internship Opportunity"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-900 placeholder-slate-500 transition-colors focus:border-primary-500/50 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:text-white"
                  placeholder="Tell me about the opportunity..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-8">
                <Button type="submit" icon={Send} className="w-full sm:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
