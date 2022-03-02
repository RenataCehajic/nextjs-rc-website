import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <a href="mailto:renata.cehajic@gmail.com">
          <strong className={classes.emailBold}>renata</strong>
          .cehajic@gmail.com
        </a>
      </div>
      <nav>
        <div className={classes.about}>
          <ul>
            <li>
              <Link className={classes.a} href="/">
                about.
              </Link>
            </li>
            <li>
              <Link href="/projects">projects.</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
