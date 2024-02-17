import { homeServices } from "@/data/homeServices";
import Image from "next/image";
import HomeService from "../HomeService";

const HomeServices = () => {
  return (
    <section className="HomeServices">
      <div className="container">
        <div className="HomeServices-wrapper">
          <div className="HomeServices-content">
            <h2 className="HomeServices-title">{homeServices.title}</h2>
            <h3 className="HomeServices-subtitle">{homeServices.subtitle}</h3>
            <p className="HomeServices-description">{homeServices.text}</p>
          </div>
          <Image
            className="HomeServices-image"
            src={homeServices.image}
            width="auto"
            height="auto"
            alt="Services"
          />
        </div>
        <HomeService />
      </div>
    </section>
  );
};

export default HomeServices;
