import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <section className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full mb-6 lg:mb-0 lg:mr-8"
          />
          <div>
            <p className="text-lg mb-4">
              Hi! I&apos;m Kyle Cubit, a Software Developer with a strong
              passion for data analysis and building responsive, user-friendly
              web and mobile applications. My journey in tech began at the
              University of West Florida, and since then, I&apos;ve been
              dedicated to honing my skills and staying up-to-date with the
              latest industry trends.
            </p>
            <p className="text-lg mb-4">
              Over the years, I&apos;ve developed a deep understanding of
              various programming languages and frameworks, including React,
              React Native, Next.js, Python, R, and more. My work is focused on
              creating solutions that not only meet the technical requirements
              but also provide an intuitive and engaging user experience.
            </p>
            <p className="text-lg mb-4">
              When I&apos;m not coding, I enjoy learning new things and reading
              books related to computer science. I&apos;m always open to new
              challenges and opportunities to collaborate on exciting projects.
            </p>
            <p className="text-lg">
              If you&apos;re interested in my work or have any questions, feel
              free to reach out. I look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
