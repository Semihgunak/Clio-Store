import "./Hero.css"
import videoBg from "/images/hero-video.mp4"

const Hero = () => {
  return (
    <section className="hero-container">
      <video src={videoBg} autoPlay loop muted></video>
      <div className="hero-slogan">
        <span>BU SEZONDA <strong>EN İYİSİNİ BUL 🍎</strong></span>
        <h2>HERKESE ÖZEL KOLEKSİYON</h2>
        <a href="/">Şimdi Keşfet</a>
      </div>
    </section>
  );
};

export default Hero;
