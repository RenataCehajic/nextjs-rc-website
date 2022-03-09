// our-domain.com/
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import image from "../public/images/profilefoto/RenatasFB.jpg";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.about}>
        <div className={classes.image}>
          <Image src={image} alt="RenatasFB" width="450" height="300" />
        </div>
        <div className={classes.intro}>
          <p>
            Hi there!&emsp;I'm Renata. I{" "}
            <a className="link" href="https://www.wearetheguild.net/">
              <strong>code</strong>
            </a>
            ,{" "}
            <a className="link" href="https://www.tatasteeleurope.com/nl/home">
              <strong>analyze</strong> big IT systems
            </a>
            , and{" "}
            <Link href="/projects">
              <a className="link">
                <strong>doodle</strong>
              </a>
            </Link>
            . Sometimes I{" "}
            <div>
              <Link href="https://hardlopenamsterdam.nl/">
                <a className="link">
                  <strong>run</strong>
                </a>
              </Link>{" "}
              or{" "}
              <Link href="https://www.pagat.com/tarot/sltarok.html">
                <a className="link">
                  play<strong> tarok</strong>
                </a>
              </Link>
              , and in the past 10 years I've been actively{" "}
              <a className="link" href="https://cargocollective.com/kvhku">
                learning <strong>Dutch</strong>.
              </a>
            </div>
            Also I studied <strong>business science</strong> and learned many{" "}
            <a className="link" href="https://content.klve.nl/s/thb.pdf">
              <strong>interesting</strong>
            </a>{" "}
            <a className="link" href="https://content.klve.nl/s/thm.pdf">
              <strong>things</strong>
            </a>
            .
          </p>
        </div>
      </div>
      <div className={classes.vesna}>
        photo taken in New York by Vesna, my love
      </div>
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
