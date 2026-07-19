import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Download, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="border-l-4 border-navy-800 pl-4 mb-12">
          <p className="text-[10px] uppercase font-bold text-teal-500 tracking-wider">Inquiries</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950">Let's Connect</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              I am interested in opportunities where I can combine business intelligence, reporting automation, stakeholder collaboration, and data-driven problem-solving. Feel free to contact me directly using the details below or send a message via the form.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="h-9 w-9 rounded-lg bg-navy-800 flex items-center justify-center text-teal-400">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Phone</p>
                  <p className="text-xs font-bold text-navy-950 mt-0.5">689-249-6405</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="h-9 w-9 rounded-lg bg-navy-800 flex items-center justify-center text-teal-400">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">Email</p>
                  <a 
                    href="mailto:panitakanaguduru.18@gmail.com"
                    className="text-xs font-bold text-navy-950 hover:text-teal-600 transition-colors mt-0.5"
                  >
                    panitakanaguduru.18@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <div className="h-9 w-9 rounded-lg bg-navy-800 flex items-center justify-center text-teal-400">
                  <Linkedin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-extrabold text-slate-400 tracking-wider">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/panitak" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs font-bold text-navy-950 hover:text-teal-600 transition-colors mt-0.5"
                  >
                    linkedin.com/in/panitak
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="Panita_Vaishnavi_Kanaguduru_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-navy-800 text-white hover:bg-navy-700 w-full sm:w-auto transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4 text-teal-400" />
                Download Resume PDF
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-sm font-extrabold text-navy-950 mb-6 uppercase tracking-wider">
              Send a Message
            </h3>

            {submitted && (
              <div 
                className="mb-6 p-4 bg-teal-50 border border-teal-200 text-teal-700 text-xs rounded-lg flex items-start gap-2.5 animate-in fade-in duration-300"
                role="alert"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold">Form Submitted Successfully!</span> Thank you for reaching out. I will respond to your message shortly.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.name ? 'border-rose-450 bg-rose-50/20' : 'border-slate-300'
                    }`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.email ? 'border-rose-450 bg-rose-50/20' : 'border-slate-300'
                    }`}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="Enterprise Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                      errors.subject ? 'border-rose-450 bg-rose-50/20' : 'border-slate-300'
                    }`}
                    placeholder="BI Opportunity"
                  />
                  {errors.subject && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                    errors.message ? 'border-rose-450 bg-rose-50/20' : 'border-slate-300'
                  }`}
                  placeholder="Tell me about your project or resource needs..."
                />
                {errors.message && <p className="text-[10px] text-rose-500 font-semibold mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 text-right">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-teal-500 text-white hover:bg-teal-600 transition-colors cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
