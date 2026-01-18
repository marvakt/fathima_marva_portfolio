import { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/ktmarwa51@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset();
                setTimeout(() => setIsSubmitted(false), 5000); // Reset success message after 5s
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                        Ready to start your next project? Let's talk about how I can help you achieve your goals.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-5 text-gray-300 group">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                                <Mail className="text-primary" size={24} />
                            </div>
                            <span className="text-lg group-hover:text-white transition-colors">ktmarwa51@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-5 text-gray-300 group">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                                <Phone className="text-primary" size={24} />
                            </div>
                            <span className="text-lg group-hover:text-white transition-colors">8157013940</span>
                        </div>
                        <div className="flex items-center gap-5 text-gray-300 group">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <span className="text-lg group-hover:text-white transition-colors">Malappuram, Kerala</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                    {/* Hidden Inputs for FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-black/20 border border-white/10 p-4 rounded-xl focus:border-primary focus:bg-black/40 outline-none transition-all duration-300 text-white placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-black/20 border border-white/10 p-4 rounded-xl focus:border-primary focus:bg-black/40 outline-none transition-all duration-300 text-white placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 relative z-10">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            required
                            className="w-full bg-black/20 border border-white/10 p-4 rounded-xl focus:border-primary focus:bg-black/40 outline-none transition-all duration-300 text-white placeholder:text-gray-600"
                            placeholder="Project Inquiry"
                        />
                    </div>

                    <div className="space-y-2 relative z-10">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-widest pl-1">Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            className="w-full bg-black/20 border border-white/10 p-4 rounded-xl focus:border-primary focus:bg-black/40 outline-none transition-all duration-300 text-white placeholder:text-gray-600 resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 relative z-10 shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] flex items-center justify-center gap-2
                            ${isSubmitted
                                ? 'bg-green-500 text-black cursor-default'
                                : isSubmitting
                                    ? 'bg-primary/70 text-black/70 cursor-wait'
                                    : 'bg-primary text-black hover:bg-[#00cc76] active:scale-[0.98]'
                            }`}
                    >
                        {isSubmitted ? (
                            <>
                                <CheckCircle2 size={24} />
                                <span>Message Sent!</span>
                            </>
                        ) : isSubmitting ? (
                            <>
                                <Loader2 size={24} className="animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send size={20} className="ml-1" />
                            </>
                        )}
                    </button>
                    {isSubmitted && (
                        <p className="text-green-400 text-center text-sm mt-2 animate-fade-in">
                            Thanks for reaching out! I'll get back to you soon.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
