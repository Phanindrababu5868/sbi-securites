import Testimonials from "./Testimonials/page";

import Carousel from "./carousel/page";
import Articals from "./Articals/page";
import Awards from "./Awards/page";
import Services from "./Services/page";
import OpenAct from "./openAct/page";
import TradingPlatform from "./TradingPlatforms/page";

const cards = [
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
];

const posts = [
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
  {
    postName: "Investment Tips for Short Term, Mid Term & Long Term Goals",
    authorName: "Post By Hans Murazik",
    postDetails:
      "There are no shortcuts to financial success. One of the few straightforward rules for making.",
    postDate: "05 Feb 2022",
  },
];
const HomePage = () => {
  return (
    <>
      <Carousel />
      <Services />
      <TradingPlatform />
      <Testimonials cards={cards} />
      <Awards />
      <OpenAct />
      <Articals cards={posts} />
    </>
  );
};

export default HomePage;
