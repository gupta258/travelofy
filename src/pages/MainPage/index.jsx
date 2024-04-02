import HeroSection from "./Sections/HeroSection";
import FeaturedSection from "./Sections/FeaturedSection";
import ProductsSection from "./Sections/ProductsSection";
import ProductImage from "../../assets/ProductImage.png";
import Nine from "../../assets/Nine.png";
import Ten from "../../assets/Ten.png";
import Eleven from "../../assets/Eleven.png";
import Twelve from "../../assets/Twelve.png";
import BenefitsSection from "./Sections/BenefitsSection";
import ReviewSection from "./Sections/ReviewSection";
import Footer from "../../components/Footer";

const productsCardData = [
  {
    id: 1,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
  {
    id: 2,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
  {
    id: 3,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
  {
    id: 4,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
  {
    id: 5,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
  {
    id: 6,
    image: ProductImage,
    name: "Glimpse Of Switzerland | FREE FIFA Museum Tickets",
    price: "USD 1,196",
    cuttedPrice: "USD 1593",
    offerTag: "SAVE USD 396",
    days: "5 days & 4 nights",
    rating: "4.9",
    reviews: "(326)",
  },
];

const benefitsCardData = [
  {
    id: 1,
    image: Nine,
    name: "Innovative",
    description:
      "Our innovative holiday company creates cutting-edge travel experiences that exceed expectations and inspire lifelong memories",
  },
  {
    id: 2,
    image: Ten,
    name: "Personalised",
    description:
      "Experience your dream vacation with our bespoke travel packages, tailored to your unique interests and preferences",
  },
  {
    id: 3,
    image: Eleven,
    name: "Customer-focused",
    description:
      "From start to finish, our customer-focused travel services prioritize your comfort, convenience, and satisfaction",
  },
  {
    id: 4,
    image: Twelve,
    name: "Trustworthy",
    description:
      "Travel with peace of mind, as our trustworthy and reliable services prioritize your safety and security",
  },
];

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSection title={`Explore World’s Top Destinations`} />
      <ProductsSection title="Switzerland" item={productsCardData} />
      <ProductsSection title="Mumbai" item={productsCardData} />
      <FeaturedSection />
      <BenefitsSection
        title="Check out really cool benefits of travelling with us"
        item={benefitsCardData}
      />
      <ReviewSection title="Hear from our happiest travellers" />
      <Footer />
    </>
  );
};

export default MainPage;
