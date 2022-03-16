import ProjectItem from "./ProjectItem";

import classes from "./ProjectList.module.css";

function ProjectList(props) {
  console.log(props);
  return (
    <div className={classes.project}>
      {props.projects.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            id={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;
