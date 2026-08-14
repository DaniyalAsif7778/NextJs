import Link from 'next/link';


export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black min-h-screen pt-24 md:pt-0">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-start py-12 px-6 md:px-16 md:py-24 bg-white dark:bg-black mx-auto md:mx-0 md:ml-auto">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 mb-8 w-full">
          About Us
        </h1>
        
        <div className="flex flex-col gap-8 text-lg leading-8 text-zinc-700 dark:text-zinc-300 w-full">
          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Our Mission
            </h2>
            <p>
              We are dedicated to creating innovative solutions that make a difference in people s lives. 
              Our mission is to build products and services that are intuitive, reliable, and empower our users to achieve their goals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Who We Are
            </h2>
            <p>
              Our team consists of passionate developers, designers, and strategists who collaborate to deliver exceptional 
              digital experiences. With years of experience across various industries, we bring diverse perspectives and expertise 
              to every project we undertake.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Innovation:</strong> We embrace creativity and continuously explore new technologies</li>
              <li><strong>Quality:</strong> We maintain high standards in everything we create</li>
              <li><strong>Collaboration:</strong> We believe in working together to achieve great results</li>
              <li><strong>Integrity:</strong> We conduct our business with honesty and transparency</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-4">
              Get Involved
            </h2>
            <p>
              Interested in joining our team or learning more about what we do? Wed love to hear from you! 
              Feel free to reach out through our contact page.
            </p>
          </section>
        </div>

        <div className="mt-12 w-full">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Get In Touch
          </Link>
        </div>
      </main>
    </div>
  )
}
