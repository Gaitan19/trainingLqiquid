import Image from "next/image";
import Link from "next/link";

import staff from "@/assets/images/staff-augmentation.svg";
import teams from "@/assets/images/dedicated-teams.svg";

const HomeService = () => {
  return (
    <div className="HomeService">
      <div className="HomeService-item">
        <figure className="HomeService-image">
          <Image src={staff} width={77} height={77} alt="staff aumentation" />
        </figure>

        <h3 className="HomeService-title">Staff Augmentation</h3>
        <p className="HomeService-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          veritatis ullam, numquam quo quas sequi quasi excepturi perspiciatis
          quidem! Explicabo quas ipsa esse maxime nesciunt nam laborum odit
          eligendi ipsam.
        </p>

        <Link className="HomeService-link" href="/">
          Learn More
        </Link>
      </div>

      <div className="HomeService-item">
        <figure className="HomeService-image">
          <Image src={teams} width={77} height={77} alt="Dedicated Teams" />
        </figure>

        <h3 className="HomeService-title">Dedicated Teams</h3>
        <p className="HomeService-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          veritatis ullam, numquam quo quas sequi quasi excepturi perspiciatis
          quidem! Explicabo quas ipsa esse maxime nesciunt nam laborum odit
          eligendi ipsam.
        </p>

        <Link className="HomeService-link" href="/">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
