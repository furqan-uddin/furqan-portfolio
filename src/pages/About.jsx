import AboutSection from "../components/AboutSection";
import LifeBeyondCode from "../components/LifeBeyondCode";
import SkillsSection from "../components/SkillsSection";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-batBlack">
      <AboutSection />
      <SkillsSection />
      <LifeBeyondCode />
    </div>
  );
}

export default About;
