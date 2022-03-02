// our-domain.com/
import Link from "next/link";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
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
