import Image from "next/image";
import Link from "next/link";
import clutchLogo from "@/assets/images/clutch-logo.png";
import HeroCard from "./HeroCard";
import Proptypes from "prop-types";
import { heroCards } from "@/data/heroCards";
import { v4 as uuidv4 } from "uuid";

const Hero = ({ title = "", text = "", buttonText = "Get in touch" }) => {
  const renderCards = () => {
    return heroCards.map((heroCard) => {
      return (
        <HeroCard
          key={uuidv4()}
          title={heroCard.title}
          text={heroCard.text}
          technology={heroCard.technology}
          skills={heroCard.skills}
          logo={heroCard.logo}
        />
      );
    });
  };

  return (
    <section className="Hero">
      <div className="container Hero-container">
        <div className="Hero-content">
          <div className="Hero-description">
            <h2 className="Hero-title">{title}</h2>
            <p className="Hero-text">{text}</p>

            <div className="Hero-footer">
              <Link href="/" className="Hero-link">
                {buttonText}
              </Link>

              <Image src={clutchLogo} alt="Clutch" width="auto" height="auto" />
            </div>
          </div>

          <div className="Hero-cards">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.proptypes = {
  title: Proptypes.string,
  text: Proptypes.string,
  buttonText: Proptypes.string,
};

export default Hero;
