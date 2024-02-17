import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Proptypes from "prop-types";

const HeroCard = ({
  logo = "",
  altLogo = "",
  title = "",
  technology = "React",
  text = "",
  skills = [],
}) => {
  const renderSkills = () => {
    return skills.map((skill) => (
      <li key={`skill-${uuidv4()}`} className="HeroCard-skill">
        {skill.text}
      </li>
    ));
  };
  return (
    <div className="HeroCard">
      <div className="HeroCard-image">
        <Image src={logo} alt={altLogo} width={55} height={49} />
      </div>
      <div className="HeroCard-information">
        <h3 className="HeroCard-title">{title}</h3>
        <p className="HeroCard-technology">{technology}</p>
        <span className="HeroCard-subtitle">About me</span>
        <p className="HeroCard-text">{text}</p>
      </div>
      <button className="HeroCard-button">Engage</button>
      <span className="HeroCard-subtitle">Skills:</span>
      <ul className="HeroCard-skills">{renderSkills()}</ul>
    </div>
  );
};

HeroCard.proptypes = {
  logo: Proptypes.string,
  altLogo: Proptypes.string,
  title: Proptypes.string,
  text: Proptypes.string,
  technology: Proptypes.string,
  skills: Proptypes.array,
};

export default HeroCard;
