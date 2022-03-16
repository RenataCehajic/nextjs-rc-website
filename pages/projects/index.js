// our-domain.com/projects
import MainNavigation from "../../components/layout/MainNavigation";
import ProjectList from "../../components/projects/ProjectList";

const PROJECTS = [
  {
    id: "p1",
    title: "React Meetups",
    image: "/images/portfolio/ReactMeetUp.jpg",
    description: "Budget app helps you to manage your expenses.",
    websiteUrl: "https://nextjs-meetup-app-silk.vercel.app/",
    codeUrl: "https://github.com/RenataCehajic/nextjs-meetup-app",
  },
  {
    id: "p2",
    title: "Running App",
    image: "/images/portfolio/RunningApp.jpg",
    description: "Running app over running clubs in Amsterdam",
    websiteUrl: "https://we-run-the-city.netlify.app/",
    codeUrl: "https://github.com/RenataCehajic/We-Run-The-City-client",
  },
  {
    id: "p3",
    title: "Great Quotes",
    image: "/images/portfolio/Quote.jpg",
    description:
      "Great Quotes is an app where you can post a quote as an author. This app is made in React and React Router.",
    websiteUrl: "https://react-router-app-9537f.web.app/quotes",
    codeUrl: "https://github.com/RenataCehajic/quote-react-app",
  },
  {
    id: "p4",
    title: "Movie Search",
    image: "/images/portfolio/MovieSearch.jpg",
    description:
      "Utilizing a movie database API, I created a Simple Movie Search which will return any movie which includes your search term along with the movies release date. Built in GOORM IDE, hosted on Heroku.",
    websiteUrl: "https://peaceful-ocean-11576.herokuapp.com/",
    codeUrl: "https://github.com/RenataCehajic/movie-search-app",
  },
  {
    id: "p5",
    title: "JavaScript Sound Circles",
    image: "/images/portfolio/JavascriptSoundCircles.jpg",
    description:
      "This project is a clone of the original Patatap Website. The project uses circles of random sizes and an assigned sound to indicate the press of each alphabet key. These circles continuously decrease in size with a changing color hue until they eventually disappear. The position of these circles is randomly generated every time a key is pressed. Paper.js is used to create the circles whereas Howler.js is used to play the assigned sound for each key.",
    websiteUrl: "https://renata-soundcircles.netlify.app/",
    codeUrl: "https://github.com/RenataCehajic/SoundCircles",
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
