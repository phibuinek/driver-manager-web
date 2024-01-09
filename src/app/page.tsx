 "use client"
import Footer from "./components/Footer";
import FeaturesSection from "./components/Home/FeaturesSection";
import Header from "./components/Home/Header";
import HeroSection from "./components/Home/HeroSection";
import ProductSection from "./components/Home/ProductSection";
import ForgotPasswordPage from "./ForgotPassword/page";
import LoginPage from "./Login/page";

//rafce
export default function Home() {
  return (
    <div className="h-screen bg-primary font-Poppins">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <ProductSection/>
      <Footer/>
    </div>
  )
}
