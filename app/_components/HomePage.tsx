import Brands from "./Brands/Brands"
import HeroSection from "./hero-section/HeroSection"
import PreviewSection from "./preview-section/PreviewSection"
import BackedByScienceSection from "./backed-by-science-section/BackedByScienceSection"
import EndelMobileApp from "./endel-mobile-app/EndelMobileApp"
import EndelAppleWatchSec from "./endel-apple-watch/EndelAppleWatchSec"
import EndelAmazonAlexaSec from "./endel-amazon-alexa/EndelAmazonAlexaSec"
import EndelDesktopSec from "./endel-desktop/EndelDesktopSec"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Brands />
      <PreviewSection />
      <BackedByScienceSection />
      <EndelMobileApp />
      <EndelAppleWatchSec />
      <EndelAmazonAlexaSec />
      {/* endel for tv */}
      <EndelDesktopSec />
      {/* endel on streaming platforms */}
      {/* appriciated by exparts */}
      {/* join endel on discord */}
      {/* faq */}
      {/* footer */}
    </div>
  )
}

export default HomePage