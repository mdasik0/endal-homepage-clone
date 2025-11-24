import Brands from "./Brands/Brands"
import HeroSection from "./hero-section/HeroSection"
import PreviewSection from "./preview-section/PreviewSection"
import BackedByScienceSection from "./backed-by-science-section/BackedByScienceSection"
import EndelMobileApp from "./endel-mobile-app/EndelMobileApp"
import EndelAppleWatchSec from "./endel-apple-watch/EndelAppleWatchSec"
import EndelAmazonAlexaSec from "./endel-amazon-alexa/EndelAmazonAlexaSec"
import EndelDesktopSec from "./endel-desktop/EndelDesktopSec"
import EndelTvSec from "./endel-tv/EndelTvSec"
import EndelStreamingSec from "./endel-streaming/EndelStreamingSec"
import AppreciatedByExperts from "./appreciated-by-experts/AppreciatedByExperts"
import JoinEndelDiscordSec from "./join-endel-discord/JoinEndelDiscordSec"
import FAQSec from "./faq/FAQSec"
import Footer from "./footer/Footer"

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
      <EndelTvSec />
      <EndelDesktopSec />
      <EndelStreamingSec />
      <AppreciatedByExperts />
      <JoinEndelDiscordSec />
      <FAQSec />
      <Footer />
    </div>
  )
}

export default HomePage