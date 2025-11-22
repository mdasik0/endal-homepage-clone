import Brands from "./Brands/Brands"
import HeroSection from "./hero-section/HeroSection"
import PreviewSection from "./preview-section/PreviewSection"
import BackedByScienceSection from "./backed-by-science-section/BackedByScienceSection"
import EndelMobileApp from "./endel-mobile-app/EndelMobileApp"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <PreviewSection />
      <BackedByScienceSection />
      <EndelMobileApp />
    </div>
  )
}

export default HomePage