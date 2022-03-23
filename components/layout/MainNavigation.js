import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <header className={classes.header}>
      <div className={classes.nav}>
        <a href="mailto:renata.cehajic@gmail.com">
          <strong className={classes.emailBold}>renata</strong>
          .cehajic@gmail.com
        </a>
      </div>
      <div className={classes.about}>
        <Link href="/">
          <a className={path === "/" ? classes.active : ""}>about.</a>
        </Link>

        <Link href="/projects">
          <a className={path === "/projects" ? classes.active : ""}>
            projects.
          </a>
        </Link>
      </div>
    </header>
  );
}

export default MainNavigation;
