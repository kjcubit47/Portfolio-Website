import Image from "next/image";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "CodeMesa",
      description:
        "Code Mesa is a comprehensive programming tutorial website designed to help users learn coding, data science, machine learning, artificial intelligence, and more. Offering a wide range of courses and resources, Code Mesa caters to beginners and advanced learners alike, with content that is categorized by difficulty level, tags, and programming languages.",
      technologies: ["Next.js", "JavaScript", "React", "Firebase"],
      demoLink: "https://code-mesa.net",
      demoButtonText: "Visit CodeMesa",
      image: "/Mesa-test-logo.png",
    },
    {
      title: "Ticked",
      description:
        "Ticked is a minimalistic and intuitive to-do list app built with React Native and Expo. Designed to help you stay organized and on top of your tasks, Ticked allows you to easily create, manage, and complete tasks with a simple and user-friendly interface.",
      technologies: ["React Native", "Expo", "Redux"],
      githubLink: "https://github.com/kjcubit47/Ticked",
      image: "/TickedBG.jpeg",
      demoButtonText: "",
    },
    {
      title: "Diabetes Progression Prediction Using Machine Learning",
      description:
        "Predicting diabetes progression using machine learning models: Linear Regression, Random Forest, and Gradient Boosting. Includes data preprocessing, exploratory analysis, and performance evaluation (MSE, R²). Visualizes insights with heatmaps, distribution plots, and model comparison charts. Built with Scikit-learn, Pandas, and Seaborn",
      technologies: ["Python, Scikit-Learn, Seaborn"],
      githubLink:
        "https://github.com/kjcubit47/Diabetes-Progression-Prediction-Using-Machine-Learning",
      image: "diabetes-proj-image.png",
      demoLink: "/demos/diabetes-progression",
      demoButtonText: "Demo Notebook",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8">
      <section className="w-full max-w-6xl">
        <h1 className="text-4xl font-bold mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            return <ProjectCard project={proj} key={proj.title}></ProjectCard>;
          })}
        </div>
      </section>
    </main>
  );
}
