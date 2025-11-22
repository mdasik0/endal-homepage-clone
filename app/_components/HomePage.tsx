import Brands from "./Brands/Brands"
import HeroSection from "./hero-section/HeroSection"
import PreviewSection from "./preview-section/PreviewSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <PreviewSection />
    </div>
  )
}

export default HomePage