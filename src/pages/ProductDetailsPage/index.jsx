import Navbar from "../../components/Navbar";
import HeroSection from "./Sections/HeroSection";
import ContentSection from "./Sections/ContentSection";
import ReviewSection from "../MainPage/Sections/ReviewSection";
import PoliciesSection from "./Sections/PoliciesSection";
import FaqSection from "./Sections/FaqSection";
import FeaturedSection from "../MainPage/Sections/FeaturedSection";
import Footer from "../../components/Footer";

const policies = [
  {
    id: 1,
    title: "10 Million +",
    desc: "Happy customers from 65+ countries all around.",
  },
  {
    id: 2,
    title: "10 Million +",
    desc: "Happy customers from 65+ countries all around.",
  },
  {
    id: 3,
    title: "10 Million +",
    desc: "Happy customers from 65+ countries all around.",
  },
  {
    id: 4,
    title: "10 Million +",
    desc: "Happy customers from 65+ countries all around.",
  },
];

const faqs = [
  {
    id: 1,
    title: "More On Switzerland Tourism",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    title: "More On Switzerland Tourism",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    title: "More On Switzerland Tourism",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    title: "More On Switzerland Tourism",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 5,
    title: "More On Switzerland Tourism",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const ProductDetailsPage = () => {
  return (
    <>
      <Navbar details="details" />
      <HeroSection />
      <ContentSection />
      <ReviewSection />
      <PoliciesSection item={policies} />
      <FaqSection item={faqs} />
      <FeaturedSection />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
