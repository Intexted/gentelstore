import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import i18n, { t } from "i18next";
import Wishes from "./Wishes";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
import Cart from "./Cart";
import Order from "./Order";

function Header() {
  const { PageControle, setPageControle, myCart, social, Logo, wishes } =
    useContext(MyContext);

  return (
    <header>
      <div className="header-top">
        <div className="container">
          {/* <div className='header-top-actions'>
            <select name='currency'>
              <option value='usd'>USD &dollar;</option>
              <option value='eur'>EUR &euro;</option>
            </select>
            
            <select
              name='language'
              onChange={(e) => change_lang(e.target.value)}
              defaultValue={i18n.language}
            >
              <option value='en'>English</option>
              <option value='fr'>Francais</option>
              <option value='ar'>العربية</option>
            </select>
          </div> */}
          <div className="header-alert-news">
            <p>{Logo?.message}</p>
          </div>
          <ul className="header-social-container">
            <li>
              <a href={social?.facebook} className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href={social?.twitter} className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href={social?.instagram} className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href={social?.linkedin} className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Search />
      <nav className="desktop-navigation-menu ">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <NavLink className="menu-title" to={"/"}>
                {t("Home")}
              </NavLink>
            </li>

            <li className="menu-category">
              <NavLink to={"category"} className="menu-title">
                {t("Categories")}
              </NavLink>
              {/* <CategorysHover /> */}
            </li>

            <li className="menu-category">
              <NavLink to={"brand"} className="menu-title">
                {t("Brands")}
              </NavLink>
            </li>
            <li className="menu-category">
              <NavLink to={"/service"} className="menu-title">
                {t("Services")}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div></div>

      <div className="mobile-bottom-navigation">
        <button
          className="action-btn"
          style={{ display: "flex" }}
          onClick={() =>
            setPageControle((page) => ({ ...page, showMenu: true }))
          }
        >
          {/* <ion-icon name='menu-outline'></ion-icon> */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
              fill="currentColor"
              className="b-1"
            ></path>
            <path
              d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
              fill="currentColor"
              className="b-2"
            ></path>
            <path
              d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
              fill="currentColor"
              className="b-3"
            ></path>
          </svg>
        </button>

        <button
          className="action-btn"
          onClick={() => {
            setPageControle((page) => ({ ...page, showCart: true }));
          }}
        >
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span className="count">{myCart?.length}</span>
        </button>

        <button
          className="action-btn"
          onClick={() => {
            setPageControle((page) => ({ ...page, showWishes: true }));
          }}
        >
          <ion-icon name="heart-outline"></ion-icon>
          <span className="count">{wishes?.length || 0}</span>
        </button>
        {/* <Link className='action-btn' to={'/category'}>
          <ion-icon name='grid-outline'></ion-icon>
        </Link> */}
        <Link
          className="action-btn"
          to={"https://api.whatsapp.com/send?phone=+212652678444&text=hi"}
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </Link>
      </div>

      <MobileMenu />
      <Wishes />
      <Cart />
      {PageControle.showOrder && <Order />}

      <Link
        className="action-btn whatsapp"
        to={"https://api.whatsapp.com/send?phone=+212652678444&text=hi"}
      >
        <ion-icon name="logo-whatsapp"></ion-icon>
      </Link>
    </header>
  );
}

export default Header;
