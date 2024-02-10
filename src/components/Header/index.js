import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo-smbs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="Header">
      <div className="container Header-container">
        <Link href="/">
          <figure className="Header-logo">
            <Image src={Logo} width="auto" height="auto" alt="Smbs logo" />
          </figure>
        </Link>

        <label className="Header-hamburger" htmlFor="menuCheck">
          <FontAwesomeIcon icon={faBars} />
        </label>

        <input
          type="checkbox"
          name="menuCheck"
          id="menuCheck"
          className="Header-hamburgerCheck d-none"
        />

        <div className="Header-row">
          <nav className="Header-menu">
            <ul className="Header-links">
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  About Us
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Services
                </Link>
              </li>

              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Blog
                </Link>
              </li>
              <li className="Header-item">
                <Link className="Header-link" href="/">
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          <Link href="/" className="Header-button">
            Schedule a call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
