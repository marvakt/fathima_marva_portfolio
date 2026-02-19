import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/ktmarwa51@gmail.com", {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset();
            }
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#1a1a1b]">
                            Contact<br />me<span className="text-[#ef6d58]">.</span>
                        </h2>
                        <p className="text-gray-500 text-xl font-bold max-w-sm">Have a bold idea? I'm ready to turn it into a reality.</p>
                    </div>

                    <div className="space-y-8">
                        <div className="group flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#f9f9f9] border border-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#ef6d58] transition-all duration-300">
                                <Mail className="text-[#ef6d58] group-hover:text-white" size={28} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                                <span className="text-xl font-bold text-[#1a1a1b] group-hover:text-[#ef6d58] transition-colors">ktmarwa51@gmail.com</span>
                            </div>
                        </div>
                        <div className="group flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#f9f9f9] border border-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#ef6d58] transition-all duration-300">
                                <Phone className="text-[#ef6d58] group-hover:text-white" size={28} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                                <span className="text-xl font-bold text-[#1a1a1b] group-hover:text-[#ef6d58] transition-colors">8157013940</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <form onSubmit={handleSubmit} className="space-y-8 bg-[#f9f9f9] border border-gray-100 p-10 md:p-12 rounded-xl shadow-sm">

                        <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#1a1a1b] uppercase tracking-widest ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-white border border-gray-200 p-5 rounded-md focus:border-[#ef6d58] outline-none transition-all duration-300 text-[#1a1a1b]"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#1a1a1b] uppercase tracking-widest ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-white border border-gray-200 p-5 rounded-md focus:border-[#ef6d58] outline-none transition-all duration-300 text-[#1a1a1b]"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-xs font-black text-[#1a1a1b] uppercase tracking-widest ml-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full bg-white border border-gray-200 p-5 rounded-md focus:border-[#ef6d58] outline-none transition-all duration-300 text-[#1a1a1b] resize-none"
                                placeholder="Describe your vision..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-black text-sm tracking-[0.2em] uppercase px-10 py-6 rounded-md transition-all duration-500 flex items-center justify-center gap-3
                                ${isSubmitted
                                    ? 'bg-[#ef6d58] text-white'
                                    : isSubmitting
                                        ? 'bg-[#ef6d58]/50 text-white cursor-wait'
                                        : 'bg-[#ef6d58] text-white hover:bg-[#1a1a1b] transition-all'
                                }`}
                        >
                            {isSubmitted ? (
                                <>
                                    <CheckCircle2 size={24} />
                                    <span>Sync Complete</span>
                                </>
                            ) : isSubmitting ? (
                                <>
                                    <Loader2 size={24} className="animate-spin" />
                                    <span>Transmitting...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send size={20} className="ml-1" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
