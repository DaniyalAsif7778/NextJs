export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen pt-24 md:pt-0">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-12 px-6 md:py-32 md:px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
              Welcome to MyBrand
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Creating innovative digital experiences for the modern web
            </p>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
            We're a team of passionate creators dedicated to building exceptional products. 
            Whether you're looking to learn more about us or discuss a potential project, we'd love to connect.
          </p>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              href="/about"
              className="flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:w-auto"
            >
              Learn About Us
            </a>
            <a
              href="/contact"
              className="flex h-12 w-full items-center justify-center rounded-full border border-black px-6 text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black md:w-auto"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="mt-24 w-full border-t border-zinc-200 pt-24 dark:border-zinc-800">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                Innovation
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We stay at the forefront of technology to deliver cutting-edge solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                Quality
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Every project is crafted with attention to detail and professional excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-2">
                Support
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                We're here to help and support your journey every step of the way.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
