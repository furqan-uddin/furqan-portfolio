import ProductCaseStudy from "../components/ProductCaseStudy";
import ProjectsSection from "../components/ProjectsSection";
import quizifyCaseStudy from "../data/quizifyCaseStudy";
import skillForgeCaseStudy from "../data/skillForgeCaseStudy";

function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-batBlack">
      <ProjectsSection />

      <ProductCaseStudy
        title={skillForgeCaseStudy.title}
        sections={skillForgeCaseStudy.sections}
      />

      <ProductCaseStudy
        title={quizifyCaseStudy.title}
        sections={quizifyCaseStudy.sections}
      />
    </div>
  );
}

export default Projects;
