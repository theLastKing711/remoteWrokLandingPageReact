import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/icon-arrow-down.svg";

import todocIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import reminderIcon from "../assets/icon-todo.svg";
import planningIcon from "../assets/icon-planning.svg";

interface RouteItem {
  name: string;
  src: string;
}

interface RouteType {
  [key: string]: RouteItem[];
}

const pageRoutes: RouteType = {
  features: [
    { name: "Todo List", src: todocIcon },
    { name: "Calendar", src: calendarIcon },
    { name: "Reminders", src: reminderIcon },
    { name: "Planning", src: planningIcon },
  ],
  company: [
    { name: "History", src: "" },
    { name: "Our Team", src: "" },
    { name: "Blog", src: "" },
  ],
  carrers: [],
  about: [],
};

const StyledNav = styled.nav`
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95vw;
    max-width: 1320px;
    margin: auto;
    padding: 1.1rem 0;
  }

  .logo-image {
    svg {
      font-size: 2.8rem;
    }
  }

  .navigation-image {
    font-size: 2.2rem;
    cursor: pointer;
  }

  .pages-nav {
    display: none;
  }

  .actions {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .pages-nav {
      display: block;
    }

    .part-1 {
      display: flex;
      gap: 3rem;
    }

    .main-nav-list {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 2rem;
      text-transform: capitalize;
    }

    .main-item-container {
      display: flex;
      cursor: pointer;
      gap: 0.5rem;
    }

    .actions {
      display: flex;
      gap: 2rem;
      align-items: center;
      font-size: 1.1rem;
      div {
        cursor: pointer;
      }

      button {
        background-color: transparent;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        font-size: 1.1rem;
        cursor: pointer;

        color: black;
      }
    }

    .main-nav-item {
      position: relative;
      color: rgba(0, 0, 0, 0.5);

      :hover {
        color: rgba(0, 0, 0, 1);
      }
    }

    .sub-nav-list {
      position: absolute;
      top: calc(100% + 1rem);
      right: 10px;
      background-color: white;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      padding: 1.5rem;
      border-radius: 5px;
      list-style: none;
      cursor: pointer;

      ::before {
        content: "";
        display: block;
        width: 100%;
        position: absolute;
        top: -1rem;
        height: 1rem;
        cursor: pointer;
      }
    }

    .sub-nav-container {
      list-style: none;
      display: flex;
      gap: 1rem;
      padding: 1rem;
      align-items: center;
      :hover {
        background-color: lightgray;
      }
      border-radius: 5px;
    }

    .sub-list-item {
      /* padding: 1rem 1rem; */
    }
    .navigation-image {
      display: none;
    }

    .register-button {
      cursor: pointer;
      border-color: rgba(0, 0, 0, 0.5);

      :hover {
        border-color: rgba(0, 0, 0, 1);
      }
    }

    .login {
      cursor: pointer;
      color: rgba(0, 0, 0, 0.5);
      color: rgba(0, 0, 0, 1);
    }
  }
`;

interface Props {
  openNav: () => void;
}

const NavBar: React.FC<Props> = ({ openNav }) => {
  const [navItem, setNavItem] = useState<string>("");

  const activateNavItem = (itemIndex: number) => {
    if (itemIndex === 0) {
      setNavItem("Features");
      return;
    }

    if (itemIndex === 1) {
      setNavItem("Company");
      return;
    }

    setNavItem("");
  };

  const navigationArrow = (index: number) => {
    if (index === 0 || index === 1) {
      if (index === 0 && navItem === "Features") {
        return arrowUp;
      }

      if (index === 1 && navItem === "Company") {
        return arrowUp;
      }

      return arrowDown;
    }
  };

  return (
    <StyledNav>
      <div className="nav-content">
        <div className="part-1">
          <img src={logo} alt="logo" className="logo-image" />
          <nav className="pages-nav">
            <ul className="main-nav-list">
              {Object.keys(pageRoutes).map((route, index) => {
                return (
                  <div
                    key={index}
                    onMouseEnter={() => activateNavItem(index)}
                    onMouseLeave={() => activateNavItem(-1)}
                  >
                    <li className="main-nav-item">
                      <div className="main-item-container">
                        <p className="main-nav-text">{route} </p>
                        <div>
                          <img src={navigationArrow(index)} />
                        </div>
                      </div>
                      {navItem.toLocaleLowerCase() ===
                        route.toLocaleLowerCase() && (
                        <div className="sub-nav-list">
                          {pageRoutes[route].map((subRoute, index2) => {
                            return (
                              <ul className="sub-nav-container">
                                <div className="sub-item-img-container">
                                  <img src={subRoute.src} alt="" />
                                </div>
                                <li className="sub-list-item">
                                  {subRoute.name}
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="actions">
          <div className="login">Login</div>
          <button className="register-button">Register</button>
        </div>
        <FaBars className="navigation-image" onClick={openNav} />
      </div>
    </StyledNav>
  );
};

export default NavBar;
