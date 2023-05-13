import React from "react";
import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

function About() {
  return (
    <div className="f-container">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.396405267787!2d-6.773388725230713!3d34.03370131871068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b080cb20a87%3A0x9910a00437662ecc!2sGentelman%20store%20officiel!5e0!3m2!1sen!2sma!4v1683976572437!5m2!1sen!2sma"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div dir="ltr" style={{ padding: "10px" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "600" }}>Contact</h1>

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
                fontSize: "1.125rem",
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
                fontSize: "1.125rem",
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
                fontSize: "1.125rem",
              }}
            >
              +2126
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
