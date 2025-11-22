import Brands from "./Brands/Brands"
import HeroSection from "./hero-section/HeroSection"
import PreviewSection from "./preview-section/PreviewSection"
import BackedByScienceSection from "./backed-by-science-section/BackedByScienceSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <PreviewSection />
      <BackedByScienceSection />
    </div>
  )
}

export default HomePage