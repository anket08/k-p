import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, MessageSquare } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        setMounted(true);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "49293c7a-2fe6-4aa6-942d-f7010fcd17f8",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact from Portfolio: ${formData.name}`,
                    from_name: "Portfolio Notification",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => {
                    onClose();
                    setSubmitStatus('idle');
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 isolate selection:bg-white/20 selection:text-white">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-lg z-10"
                    >
                        <div className="clean-card relative overflow-hidden p-8 bg-surface/95 backdrop-blur-2xl">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2 z-20"
                            >
                                <X size={20} />
                            </button>

                            <h2 className="text-3xl font-bold text-white mb-2 relative z-10">Let's Connect</h2>
                            <p className="text-gray-400 mb-8 font-medium relative z-10">I'm currently open to new opportunities. Send me a message and let's chat!</p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <User size={18} />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-white/[0.02] border border-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-all font-medium"
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"
                                        className="w-full bg-white/[0.02] border border-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-all font-medium"
                                    />
                                </div>

                                <div className="relative group">
                                    <div className="absolute top-3 left-0 pl-3 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <MessageSquare size={18} />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Your Message..."
                                        className="w-full bg-white/[0.02] border border-border rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-all font-medium resize-none custom-scrollbar"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitStatus === 'success'}
                                    className="mt-2 w-full bg-white text-black hover:bg-zinc-200 transition-colors font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10">
                                        {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                    </span>
                                    {!isSubmitting && submitStatus !== 'success' && (
                                        <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    )}
                                </button>

                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Please try again later.</p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ContactModal;
