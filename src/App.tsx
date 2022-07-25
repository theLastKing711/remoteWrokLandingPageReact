import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import heroMobile from "./assets/image-hero-mobile.png";
import audioMobile from "./assets/client-audiophile.svg";
import dataMobile from "./assets/client-databiz.svg";
import makerMobile from "./assets/client-maker.svg";
import clientMobile from "./assets/client-meet.svg";

import heroDesktop from "./assets/image-hero-desktop.png";
import NavMobile from "./components/NavMobile";

const StyledApp = styled.div`
  .hero-image-mobile {
    width: 100vw;
  }

  .main-container {
    width: 90vw;
    max-width: 1320px;
    margin: 0 auto;

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      .main-header {
        margin-top: 3.3rem;
        font-size: 2.3rem !important;
      }
      p {
        margin-top: 1.25rem;
        line-height: 1.6rem;
      }
      .learn-more-button {
        margin: 1.5rem 0;
        border-radius: 20px;
        color: white;
        background-color: black;
        font-size: 1.1rem;
        padding: 0.8rem 1.2rem;
        font-weight: bold;
      }

      .links-container {
        margin-top: 3.6rem;

        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;
        gap: 1.8rem;

        > div {
          flex: 1;
          img {
            max-width: 100%;
          }
          :nth-child(1) {
            flex: 1 0 25px;
          }

          :nth-child(3) {
            flex: 1 0 17px;
          }

          /* :nth-child(1) {
            flex: 1 0 20px;
          } */
        }
      }
    }
  }

  .hero-image-desktop {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .main-container {
      width: 90vw;
      /* width: 100vw !important; */
      /* margin: 4rem 0 0rem 0; */
      margin-top: 4rem;
      .desktop-wrapper {
        display: flex;
        justify-content: space-around;
        /* align-items: flex-start; */
        /* justify-content: center; */
        align-items: center;
        gap: 2rem;
        text-align: left;
        main {
          .main-header {
            font-size: 5rem !important;
            text-align: left;
            max-width: 500px;
            margin-top: 4rem;
            line-height: 4.5rem;
          }
          p {
            margin-top: 3.5rem;
            text-align: left;
            max-width: 500px;
          }
          div.button-container {
            margin-top: 2rem;
            text-align: left;
            padding: 1.2rem 1.2rem;
          }
          .links-container {
            margin-top: 4rem;
          }
        }

        .desktop-image-container {
          width: 450px;

          img {
            width: 100%;
          }
        }
      }
    }

    .hero-image-mobile {
      display: none;
    }
    .hero-image-desktop {
      display: block;
    }
  }

  @media screen and (max-width: 1220px) {
    .desktop-image-container {
      width: 350px !important;
    }
    .main-container {
      .desktop-wrapper {
        main {
          .main-paragraph {
            font-size: 0.9rem;
          }
          .main-header {
            font-size: 3rem !important;
          }
        }
      }

      .links-container {
        margin-top: 1.8rem !important;
      }
    }
  }
`;

function App() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <StyledApp className="App" id="width">
      {navOpen && <NavMobile navOpen={navOpen} closeNav={closeNav} />}
      <Header>
        <NavBar openNav={openNav} />
      </Header>
      <div className="hero-image-container">
        <img src={heroMobile} alt="" className="hero-image-mobile" />
      </div>
      <div className="main-container">
        <div className="desktop-wrapper">
          <main>
            <header>
              <h1 className="main-header">Make remote work</h1>
            </header>
            <p className="main-paragraph">
              Get your team in sync. no matter your location. Streamline
              processes, create team ritules , and watch productivity soar.
            </p>
            <div className="button-container">
              <button className="learn-more-button">Learn more</button>
            </div>
            <div className="links-container">
              <div className="link-item">
                <img src={dataMobile} alt="" />
              </div>
              <div className="link-item">
                <img src={audioMobile} alt="" />
              </div>
              <div className="link-item">
                <img src={clientMobile} alt="" />
              </div>
              <div className="link-item">
                <img src={makerMobile} alt="" />
              </div>
            </div>
          </main>
          <div className="desktop-image-container">
            <img src={heroDesktop} alt="" className="hero-image-desktop" />
          </div>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
