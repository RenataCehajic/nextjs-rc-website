import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const PROJECTS = [
  {
    id: "p5",
    title: "JavaScript Sound Circles",
    image: "images/portfolio/JavaScriptSoundCircles.jpg",
    // website: "https://renata-soundcircles.netlify.app/",
    // code: "https://github.com/RenataCehajic/SoundCircles",
    description:
      "This project is a clone of the original Patatap Website. The project uses circles of random sizes and an assigned sound to indicate the press of each alphabet key. These circles continuously decrease in size with a changing color hue until they eventually disappear. The position of these circles is randomly generated every time a key is pressed. Paper.js is used to create the circles whereas Howler.js is used to play the assigned sound for each key.",
    tech: "<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='ant-design:github-filled'></span>",
    // codeLink: "https://github.com/RenataCehajic/SoundCircles",
  },
];

function ProjectList(props) {
  return (
    <ul>
      {props.projects.map((project) => {
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tech={project.tech}
        />;
      })}
    </ul>
  );
}

export default ProjectList;
