// our-domain.com/projects
import MainNavigation from "../../components/layout/MainNavigation";
import ProjectList from "../../components/projects/ProjectList";

const PROJECTS = [
  {
    id: "p1",
    title: "React Meetups",
    image: "/images/portfolio/ReactMeetUp.jpg",
    description: "Budget app helps you to manage your expenses.",
    tech: "<span class='iconify m-3' data-icon='logos:react'></span><span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>",
  },
  {
    id: "p2",
    title: "Budget App",
    image: "/images/portfolio/BudgetApp.png",
    description: "Budget app helps you to manage your expenses.",
    tech: "<span class='iconify m-3' data-icon='logos:react'></span><span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>",
  },
  {
    id: "p3",
    title: "Great Quotes",
    image: "/images/portfolio/Quote.jpg",
    description:
      "Great Quotes is an app where you can post a quote as an author. This app is made in React and React Router.",
    tech: "<span class='iconify m-3' data-icon='logos:react'></span><span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>",
  },
  {
    id: "p4",
    title: "Movie Search",
    image: "/images/portfolio/MovieSearch.jpg",
    description:
      "Utilizing a movie database API, I created a Simple Movie Search which will return any movie which includes your search term along with the movies release date. Built in GOORM IDE, hosted on Heroku.",
    tech: "<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>",
  },
  {
    id: "p5",
    title: "JavaScript Sound Circles",
    image: "/images/portfolio/JavascriptSoundCircles.jpg",
    description:
      "This project is a clone of the original Patatap Website. The project uses circles of random sizes and an assigned sound to indicate the press of each alphabet key. These circles continuously decrease in size with a changing color hue until they eventually disappear. The position of these circles is randomly generated every time a key is pressed. Paper.js is used to create the circles whereas Howler.js is used to play the assigned sound for each key.",
    tech: "<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='ant-design:github-filled'></span>",
  },
];

function ProjectsPage() {
  return (
    <div>
      <MainNavigation />
      <ProjectList projects={PROJECTS} />
    </div>
  );
}

export default ProjectsPage;
