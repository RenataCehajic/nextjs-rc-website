// our-domain.com/
import Link from "next/link";
import { Fragment } from "react";
import MainNavigation from "../components/layout/MainNavigation";

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
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
