// our-domain.com/
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import image from "../public/images/profilefoto/RenatasFB.jpg";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <MainNavigation />
        <div className={classes.main}>
          <div className={classes.image}>
            <Image src={image} alt="RenatasFB" width="450" height="300" />
            <p className={classes.vesna}>
              photo taken in New York by Vesna, my love
            </p>
          </div>
          <div className={classes.introduction}>
            <p>
              Hi there!&emsp;I'm Renata. I{" "}
              <a className="link" href="https://www.wearetheguild.net/">
                <strong>code</strong>
              </a>
              ,{" "}
              <a
                className="link"
                href="https://www.tatasteeleurope.com/nl/home"
              >
                <strong>analyze</strong> big IT systems
              </a>
              , and{" "}
              <Link href="https://netzo-amsterdam.nl/netzo-teams/">
                <a className="link">
                  <strong>sport</strong>
                </a>
              </Link>
              . Sometimes I
              <Link href="https://hardlopenamsterdam.nl/">
                <a className="link">
                  <strong> run</strong>
                </a>
              </Link>{" "}
              or{" "}
              <Link href="https://www.pagat.com/tarot/sltarok.html">
                <a className="link">
                  play<strong> tarok</strong>
                </a>
              </Link>
              , and in the past 10 years I've been actively{" "}
              <a
                className="link"
                href="https://www.languagepartners.nl/blog/nederlands-nt2/10-interesting-facts-about-the-dutch-language/"
              >
                practising <strong>Dutch</strong>.
              </a>{" "}
              Also, I studied{" "}
              <a
                className="link"
                href="https://vu.nl/nl/onderwijs/master/business-administration"
              >
                <strong>business science</strong>
              </a>{" "}
              and learned many{" "}
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"
              >
                <strong>interesting things</strong>
              </a>
              .
              <p className={classes.personal}>
                {" "}
                &emsp;Some things that <strong>fascinate</strong> me are, among
                others: <item className={classes.item}>1</item>
                <em>Dutch weather</em> (being unpredictable and changeable makes
                me curious about what is to come, so that I can respond to it);
                <item className={classes.item}>2</item>
                <em>People</em> (and in particular history and culture);
                <item className={classes.item}>3</item>
                <em>Code and IT analysis</em> (a topic I previously studied on
                my own and now practise pragmatically).
              </p>
              <p className={classes.personal}>
                {" "}
                &emsp;You will typically find me: doing{" "}
                <item className={classes.item2}>IT analysis</item>, writing
                <item className={classes.item2}>JS code</item>, watching cult
                classic
                <item className={classes.item2}>movies</item>, trying to make
                sense of the political world, or playing with my daughter, my{" "}
                <item className={classes.item2}>treasure</item> in the world.
              </p>
              <p className={classes.personal}>
                {" "}
                &emsp;Here's my{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link indent-0"
                  href="https://content.klve.nl/s/cv.pdf"
                >
                  <span className={classes.linkToCv}>
                    <strong>CV</strong>
                  </span>
                </a>
                .
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
