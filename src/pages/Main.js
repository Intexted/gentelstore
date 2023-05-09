import React, { useContext } from "react";
import Banner from "../components/Banner";
import SideBar from "../components/SideBar";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../components/ProductCard";
import i18n, { t } from "i18next";
import Category from "./Category";
import { MyContext } from "../context/MyContext";
import Brand from "./Brand";
import Splash from "../components/Splash";

function Main() {
  const { Categorys } = useContext(MyContext);

  return (
    <main>
      {/* <Cart /> */}
      <Banner />
      <div className="container">
        <h2 className="title">{t("Categories")} </h2>
      </div>
      <Category />
      {/* <div className="container">
        <h2 className="title">{t("Brands")} </h2>
      </div>
      <Brand /> */}
      {/* PRODUCT */}
      <div className="product-container">
        <div className="container">
          {/* <SideBar /> */}

          <div className="product-box">
            {/* PRODUCT MINIMAL */}
            {/* <ProductMinimal /> */}
            {/* PRODUCT FEATURED */}
            {/* <SingleProduct /> */}
            {/* PRODUCT GRID */}
            <div className="product-main">
              {/* <h2 className='title'>{t('Products')} </h2> */}

              {/* <ProductCard /> */}
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS, CTA & SERVICE */}
    </main>
  );
}

export default Main;
