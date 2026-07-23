import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedEvents from "../../components/FeaturedEvents/FeaturedEvents";
import Categories from "../../components/Categories/Categories";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <FeaturedEvents />
    <Categories />
    <UpcomingEvents />
    <WhyChooseUs />
    <Testimonials />
    <FAQ />
    <Newsletter />
    <Footer />
  </>
);

export default Home;
