import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  console.log(props);
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}

export default ProjectList;
