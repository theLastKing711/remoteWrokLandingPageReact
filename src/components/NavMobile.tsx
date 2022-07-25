import React, { useEffect, useState } from "react";
import styled from "styled-components";
import todocIcon from "../assets/icon-todo.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import reminderIcon from "../assets/icon-todo.svg";
import planningIcon from "../assets/icon-planning.svg";
import closeButton from "../assets/icon-close-menu.svg";
import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import { FaBars } from "react-icons/fa";
import { removeListener } from "process";

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
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;

  @keyframes showNav {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .nav-content {
    top: 0;
    right: 0;
    position: absolute;
    background-color: white;
    height: 100%;
    width: 60%;
    padding: 1.5rem;

    .close-button-container {
      cursor: pointer;
    }

    .item-active {
      color: rgba(0, 0, 0, 1) !important;
    }

    animation-name: showNav;
    animation-duration: 1s;
    animation-fill-mode: forwards;

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
      flex-direction: column;
      gap: 2rem;
      text-transform: capitalize;
    }

    .main-nav-text {
      font-size: 1.2rem;
    }

    .main-item-container {
      display: flex;
      cursor: pointer;
      gap: 0.5rem;
    }

    .actions {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      font-size: 1.2rem;
      cursor: pointer;

      position: relative;

      > * {
        :hover {
          color: rgba(0, 0, 0, 1);
        }
      }

      button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.5);
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        font-size: 1.2rem;
        width: 100%;
        cursor: pointer;
      }
    }

    .sub-nav-container,
    .main-item-container p {
      position: relative;
      color: rgba(0, 0, 0, 0.5);

      :hover {
        color: rgba(0, 0, 0, 1);
      }
    }

    .sub-nav-list {
      /* position: relative;
      top: calc(100% + 1rem);
      right: 10px; */
      background-color: white;
      /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
      padding: 1.5rem;
      border-radius: 5px;
      list-style: none;
      cursor: pointer;

      /* ::before {
        content: "";
        display: block;
        width: 100%;
        position: absolute;
        top: -1rem;
        height: 1rem;
        cursor: pointer;
      } */
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
  }

  .header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
  }

  .actions {
    display: flex;
    gap: 2rem;
    align-items: center;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.5);

    button {
      background-color: transparent;
      padding: 0.8rem 1.5rem;
      border-radius: 8px;
      font-size: 1.1rem;
      :hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

interface Props {
  closeNav: () => void;
  navOpen: boolean;
}

const NavMobile: React.FC<Props> = ({ navOpen, closeNav }) => {
  const [navItems, setNavItems] = useState<string[]>([]);

  const activateNavItem = (itemIndex: number) => {
    console.log("items", navItems);

    if (itemIndex === 0) {
      if (navItems.includes("Features")) {
        let newList: string[] = navItems.filter((item) => item !== "Features");
        setNavItems(newList);
        return;
      }
      setNavItems([...navItems, "Features"]);
      return;
    }

    if (itemIndex === 1) {
      if (navItems.includes("Company")) {
        let newList: string[] = navItems.filter((item) => item !== "Company");
        setNavItems(newList);
        return;
      }
      setNavItems([...navItems, "Company"]);
      return;
    }

    // setNavItems("");
  };

  const navigationArrow = (index: number) => {
    if (index === 0 || index === 1) {
      if (index === 0 && navItems.includes("Features")) {
        return arrowUp;
      }

      if (index === 1 && navItems.includes("Company")) {
        return arrowUp;
      }

      return arrowDown;
    }
  };

  const itemSelected = (index: number) => {
    if (index === 0 && navItems.includes("Features")) {
      return true;
    }

    if (index === 1 && navItems.includes("Company")) {
      return true;
    }

    return false;
  };

  //   useEffect(() => {
  //     const widthOutput: Element | null = document.querySelector("#width");

  //     function reportWindowSize() {
  //       wid widthOutput.textContent = window.innerWidth.toString();
  //     }

  //     window.addEventListener("resize", reportWindowSize);

  //     return () => {
  //       window.removeEventListener("resize", reportWindowSize);
  //     };
  //   }, []);

  return (
    <StyledNav>
      <div className="nav-content">
        <div className="header">
          <div className="close-button-container" onClick={closeNav}>
            <img src={closeButton} />
          </div>
        </div>
        <nav className="pages-nav">
          <ul className="main-nav-list">
            {Object.keys(pageRoutes).map((route, index) => {
              return (
                <div key={index} onClick={() => activateNavItem(index)}>
                  <li className="main-nav-item">
                    <div className="main-item-container">
                      <p
                        className={`main-nav-text ${
                          itemSelected(index) ? "item-active" : null
                        }`}
                      >
                        {route}
                      </p>
                      <div>
                        <img src={navigationArrow(index)} />
                      </div>
                    </div>
                    {navItems
                      .map((item) => item.toLocaleLowerCase())
                      .includes(route) && (
                      <div className="sub-nav-list">
                        {pageRoutes[route].map((subRoute, index2) => {
                          return (
                            <ul className="sub-nav-container" key={index2}>
                              <div className="sub-item-img-container">
                                <img src={subRoute.src} alt="" />
                              </div>
                              <li className="sub-list-item">{subRoute.name}</li>
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
        <div className="actions">
          <div className="login">Login</div>
          <button className="register-button">Register</button>
        </div>
      </div>
    </StyledNav>
  );
};

export default NavMobile;
