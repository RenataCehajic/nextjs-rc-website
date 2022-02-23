import ProjectItem from "./ProjectItem";

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
