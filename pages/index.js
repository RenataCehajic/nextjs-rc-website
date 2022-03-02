// our-domain.com/
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";
import image from "../public/images/profilefoto/RenatasFB.jpg";

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
      <Image src={image} alt="RenatasFB" width="400" height="260" />
      <ul>
        <li>
          <Link href="/projects">NextJS Is A Great Framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
