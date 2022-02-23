import { Image } from "next/image";

function ProjectItem(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Image src={props.image} alt={props.title} />
      <p>{props.description}</p>
      <span>{props.tech}</span>
    </div>
  );
}

export default ProjectItem;
