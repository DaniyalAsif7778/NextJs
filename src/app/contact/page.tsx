import React from 'react'

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen pt-24 md:pt-0">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-6 md:px-16 bg-white dark:bg-black sm:items-start md:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col gap-8 w-full">
          <div className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            <p className="mb-8">
              Have questions or want to work with us? We'd love to hear from you. 
              Please fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="name" 
                className="text-base font-semibold text-black dark:text-zinc-50"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="px-4 py-3 rounded-lg border border-zinc-300 bg-white text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="email" 
                className="text-base font-semibold text-black dark:text-zinc-50"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                required
                className="px-4 py-3 rounded-lg border border-zinc-300 bg-white text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="subject" 
                className="text-base font-semibold text-black dark:text-zinc-50"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
                className="px-4 py-3 rounded-lg border border-zinc-300 bg-white text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="message" 
                className="text-base font-semibold text-black dark:text-zinc-50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={6}
                required
                className="px-4 py-3 rounded-lg border border-zinc-300 bg-white text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:placeholder-zinc-400 dark:focus:ring-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 mt-4"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">Email</h3>
                <p className="text-zinc-700 dark:text-zinc-300">hello@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">Phone</h3>
                <p className="text-zinc-700 dark:text-zinc-300">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">Address</h3>
                <p className="text-zinc-700 dark:text-zinc-300">123 Main Street<br />City, State 12345</p>
              </div>
              <div>
                <h3 className="font-semibold text-black dark:text-zinc-50 mb-2">Hours</h3>
                <p className="text-zinc-700 dark:text-zinc-300">Monday - Friday<br />9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}