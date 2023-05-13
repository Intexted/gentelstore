import React from "react";
import i18n, { t } from "i18next";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
function Service() {
  return (
    <div>
      <div className="container">
        <div className="testimonials-box">
          {/* TESTIMONIALS */}
          {/* <div className="testimonial">
            <h2 className="title">اتَّصَلَ</h2>

            <div className="testimonial-card">
              <div>
                <ul>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "9999px",
                        height: "2.5rem",
                        width: "2.5rem",
                        border: "1px solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <LocationMarkerIcon height={25} width={25} />
                    </div>
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      Salé, Morocco
                    </h3>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "9999px",
                        height: "2.5rem",
                        width: "2.5rem",
                        border: "1px solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <MailIcon height={25} width={25} />
                    </div>
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      gentelman.store@gmail.com
                    </h3>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "9999px",
                        height: "2.5rem",
                        width: "2.5rem",
                        border: "1px solid #fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <PhoneIcon height={25} width={25} />
                    </div>
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      +2126
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="service" id="service">
            {/* <h2 className="title">{t("Services")}</h2> */}
            <h2 className="title">اتَّصَلَ</h2>

            <div className="service-container">
              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">212635479212+</h3>
                </div>
              </a>
              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Salé, Morocco</h3>
                </div>
              </a>
              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="time-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">8AM - 11PM</h3>
                </div>
              </a>
              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="at-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">gentelman.store@gmail.com</h3>
                </div>
              </a>
            </div>
          </div>
          {/* CTA */}
          <div className="cta-container">
            {/* <img
              src='/images/cta-banner.jpg'
              alt='summer collection'
            
            /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.396405267787!2d-6.773388725230713!3d34.03370131871068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b080cb20a87%3A0x9910a00437662ecc!2sGentelman%20store%20officiel!5e0!3m2!1sen!2sma!4v1683976572437!5m2!1sen!2sma"
              // width={600}
              // height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="cta-banner"
            />
          </div>
          {/* SERVICE */}
          <div className="service" id="service">
            <h2 className="title">{t("Services")}</h2>

            <div className="service-container">
              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Worldwide Delivery</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Next Day delivery</h3>
                  <p className="service-desc">UK Orders Only</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Return Policy</h3>
                  <p className="service-desc">Easy & Free Return</p>
                </div>
              </a>

              <a href="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="ticket-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">30% money back</h3>
                  <p className="service-desc">For Order Over $100</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
