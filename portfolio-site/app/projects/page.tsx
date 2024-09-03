import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "React Native Essentials",
      description:
        "A mobile app built with React Native that showcases the essential features of the framework, including navigation, state management, and API integration.",
      technologies: ["React Native", "JavaScript", "Expo", "Redux"],
      liveDemo: "https://example.com/react-native-essentials",
      github: "https://github.com/yourusername/react-native-essentials",
      image: "/images/react-native-essentials.png",
    },
    {
      title: "Data Science with R: Titanic EDA",
      description:
        "An in-depth exploratory data analysis of the Titanic dataset using R, focusing on data cleaning, visualization, and statistical analysis to uncover key insights.",
      technologies: ["R", "ggplot2", "dplyr", "tidyverse"],
      liveDemo: "https://example.com/titanic-eda",
      github: "https://github.com/yourusername/titanic-eda",
      image: "/images/titanic-eda.png",
    },
    {
      title: "Next.js Portfolio Website",
      description:
        "A responsive and modern portfolio website built with Next.js, showcasing my work and skills. It features server-side rendering, dynamic routing, and API integration.",
      technologies: ["Next.js", "React", "CSS", "Vercel"],
      liveDemo: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio-website",
      image: "/images/portfolio-website.png",
    },
    {
      title: "Machine Learning with Python",
      description:
        "A series of machine learning projects implemented using Python, covering algorithms like linear regression, decision trees, and neural networks with real-world datasets.",
      technologies: ["Python", "scikit-learn", "TensorFlow", "Pandas"],
      liveDemo: "https://example.com/ml-python",
      github: "https://github.com/yourusername/ml-python-projects",
      image: "/images/ml-python.png",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <section className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
