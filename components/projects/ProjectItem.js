/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
  return (
    <div>
      <div className={classes.item}>
        <h1 style={{ display: "none" }}>{props.title}</h1>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={280} height={250} />
        </div>
        <p style={{ display: "none" }}>{props.description}</p>
      </div>
      <div style={{ width: "250px" }} className={classes.button}>
        <a className="link" href={props.websiteUrl}>
          <button className={classes.button_1}>Website</button>
        </a>
        <a className="link" href={props.codeUrl}>
          <button className={classes.button_1}>Code</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
