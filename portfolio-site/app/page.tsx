import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="z-10 w-full max-w-5xl flex flex-col items-center justify-center font-mono text-sm lg:flex-row lg:justify-between lg:text-left">
        <h1 className="text-4xl font-bold mb-6 lg:mb-0">
          Welcome to My Portfolio
        </h1>
        <p className="text-center lg:text-right">
          Crafted using Next.js & React.
        </p>
      </header>

      <section className="flex flex-col items-center mt-12">
        <Image
          src="/profile-pic.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h2 className="text-3xl font-semibold">Hi, I&apos;m Kyle Cubit</h2>
        <p className="text-lg mt-2 text-center max-w-xl">
          I&apos;m a Software Developer passionate about data analysis and
          crafting responsive, user-friendly web and mobile applications.
          Explore my work below!
        </p>
      </section>

      <section className="grid text-center lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:gap-6 lg:text-left mt-16">
        <a
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore the projects I&apos;ve worked on.
          </p>
        </a>

        <a
          href="/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Me{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about my background and experience.
          </p>
        </a>

        <a
          href="/contact"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Contact{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Get in touch with me for opportunities or collaborations.
          </p>
        </a>
      </section>

      <footer className="flex flex-col items-center mt-16">
        <p className="text-sm text-center">
          © 2024 Kyle Cubit. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/kjcubit47"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github-icon.png" alt="GitHub" width={36} height={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/kyle-cubit-120b2217a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn"
              width={41}
              height={40}
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
