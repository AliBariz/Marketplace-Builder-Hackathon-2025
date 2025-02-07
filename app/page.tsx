import HeroSection from "./components/Hero/Hero";
import FeaturedProducts from "./components/Products/featuredProducts";
import TopCategories from "./components/TopCategories/TopCategories";
import BelowTopCategories from "./components/TopCategories/BelowTopCategories"
import ProductGrid from "./components/Products/ProductGrid";
import Footer from "./components/Footer/Footer";


const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <TopCategories />
      <BelowTopCategories />
      <ProductGrid />
      <Footer />
    </div>
  );
}

export default App