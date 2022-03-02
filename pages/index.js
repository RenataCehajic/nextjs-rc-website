// our-domain.com/
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import image from "../public/images/profilefoto/RenatasFB.jpg";
import classes from "./styles.module.css";

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.image}>
        <Image src={image} alt="RenatasFB" width="450" height="300" />
      </div>
      <div className={classes.vesna}>photo taken by Vesna, My Love</div>
    </Fragment>
  );
}

export default HomePage;

// <ul>
//   <li>
//     <Link href="/projects">NextJS Is A Great Framework</Link>
//   </li>
//   <li>Something Else</li>
// </ul>;
