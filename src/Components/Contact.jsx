import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaEnvelope, FaExclamationCircle, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import { TbLeaf2 } from "react-icons/tb";

const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)
    const [submissionNotice, setSubmissionNotice] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))
        setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }))
        setSubmissionNotice(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const nextErrors = {}
        if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
        if (!formData.email.trim()) {
            nextErrors.email = 'Please enter your email.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            nextErrors.email = 'Please enter a valid email address.'
        }
        if (!formData.message.trim()) nextErrors.message = 'Please enter a message.'

        setErrors(nextErrors)
        if (Object.keys(nextErrors).length > 0) return

        if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
            console.error('EmailJS configuration is missing. Set the VITE_EMAILJS_* values in .env and restart the dev server.')
            setSubmissionNotice({
                type: 'error',
                message: 'The contact form is temporarily unavailable. Please try again later.',
            })
            return
        }

        setIsSending(true)
        setSubmissionNotice(null)
        try {
            const response = await emailjs.send(
                emailJsConfig.serviceId,
                emailJsConfig.templateId,
                formData,
                { publicKey: emailJsConfig.publicKey },
            )
            console.info('EmailJS accepted the contact message:', {
                status: response.status,
                text: response.text,
            })
            setSubmissionNotice({
                type: 'success',
                message: 'Your message is on its way. Thanks for reaching out!',
            })
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS failed to send the contact message:', error)
            setSubmissionNotice({
                type: 'error',
                message: 'We couldn’t send your message. Please try again in a moment.',
            })
        } finally {
            setIsSending(false)
        }
    }

  return (
    <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease: "easeOut"}}
        viewport={{once:false, amount:0.2}}
        id="contact"
        className="py-20 bg-navy-100"
    >
        
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4 tracking-wide text-gray-400">
                Get In 
                <span className="text-teal-500"> Touch</span>
            </h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 tracking-wide">
              Have a problem in your business and want a solution? Let's connect and solve it!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-6xl mx-auto'>
                {/* Contact form */}
                <div>
                    <form className='space-y-6' onSubmit={handleSubmit} noValidate>
                        <div>
                            <label htmlFor="name" className='block text-gray-400 mb-2 tracking-wider'>Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.name)}
                                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                className='w-full bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none'
                            />
                            {errors.name && <p id="contact-name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-gray-400 mb-2 tracking-wider'>Your Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.email)}
                                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                className='w-full bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none'
                            />
                            {errors.email && <p id="contact-email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-gray-400 mb-2 tracking-wider'>Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                className='w-full h-40 bg-navy-200 border border-navy-300 rounded-lg px-4 py-3 outline-none'
                            />
                            {errors.message && <p id="contact-message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>}
                        </div>

                        <button type="submit" disabled={isSending} className='w-full px-6 py-3 bg-teal-500 rounded-lg font-medium hover:bg-teal-300 transition duration-300 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60'>
                            {isSending ? 'Sending...' : 'Send'}
                        </button>
                        {submissionNotice && (
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                role={submissionNotice.type === 'error' ? 'alert' : 'status'}
                                aria-live={submissionNotice.type === 'error' ? 'assertive' : 'polite'}
                                className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg ${
                                    submissionNotice.type === 'success'
                                        ? 'border-teal-500/30 bg-teal-500/10 text-teal-300'
                                        : 'border-red-400/30 bg-red-400/10 text-red-300'
                                }`}
                            >
                                {submissionNotice.type === 'success'
                                    ? <FaCheckCircle className="shrink-0 text-lg" aria-hidden="true" />
                                    : <FaExclamationCircle className="shrink-0 text-lg" aria-hidden="true" />}
                                <span>{submissionNotice.message}</span>
                            </motion.div>
                        )}
                    </form>
                </div>
                {/* Contact information */}
                <div className='space-y-8 my-auto'>
                    <div className='flex items-start '>
                        <div className='text-teal-500 text-2xl mr-4'>
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 tracking-wider'>Location</h3>
                            <p className='text-gray-400 tracking-wider'>Jamshedpur, Kadma</p>
                        </div>
                    </div>
                    <div className='flex items-start '>
                        <div className='text-teal-500 text-2xl mr-4'>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 tracking-wider'>Email</h3>
                            <p className='text-gray-400 tracking-wider'>rashmikiranwork@gmail.com</p>
                        </div>
                    </div>

                    <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4 tracking-wider'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://www.linkedin.com/in/rashmikiran-consulting/" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration'target='_blank' rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.instagram.com/decision_lab_" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration' target='_blank' rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                                <a href="https://happenstance.ai/u/rashmikiran" className='w-12 h-12 rounded-full bg-navy-400 flex items-center justify-center text-teal-500 hover:text-gray-700 hover:bg-teal-500 transition duration'target='_blank' rel="noopener noreferrer">
                                    <TbLeaf2 />
                                </a>
                            </div>

                    </div>
                </div>
            </div>

        </div>

    </motion.div>
  )
}

export default Contact