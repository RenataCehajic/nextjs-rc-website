import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  return (
    <div>
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
    </div>
  );
}

export default ProjectList;
