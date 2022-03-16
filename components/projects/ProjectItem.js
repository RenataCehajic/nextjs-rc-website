/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  return (
    <div className={classes.item}>
      <h1 style={{ display: "none" }}>{props.title}</h1>
      <div className={classes.image}>
        <Image src={props.image} alt={props.title} width={450} height={300} />
      </div>
      <p style={{ display: "none" }}>{props.description}</p>
    </div>
  );
}

export default ProjectItem;
