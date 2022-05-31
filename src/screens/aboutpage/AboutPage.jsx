import React from "react";
import { Navbar } from "../../components";
import {
  GridViewTemplateC,
  HorizontalView,
  MarginBreak,
  VerticalView,
} from "../../foundation";
import { AiFillBulb, AiOutlineTeam } from "react-icons/ai";
import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/t2.jpg";
import img3 from "../../assets/t3.jpeg";
import { FaDiscord, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <MarginBreak margin="200px" />
      <VerticalView AlignCenter justifyContent="center" classes="gap40 cc75">
        <h1 className="bgh2">OUR IDEA</h1>
        <AiFillBulb
          style={{
            color: "var(--color-text)",
            fontSize: "40px",
          }}
        />
        <p className="bgp1">
          Nowa is a platform that enables individuals to create top-quality
          mobile and web apps without writing code and within fraction of the
          time, while having an enjoyable design experience with clean UI,
          easy-to-understand logic, and powerful tools and plugins.
        </p>
        <span className="line mm1"></span>
        <AiOutlineTeam
          style={{
            color: "var(--color-main)",
            fontSize: "80px",
          }}
        />
        <p className="bgp1 mm1">we present to you</p>
        <h1 className="bgh2 mm1">OUR TEAM</h1>
        <GridViewTemplateC template="1fr 1fr 1fr" classes="w100">
          <VerticalView>
            <img src={img1} alt="raed abdallah" width={"100%"} />
            <h1 className="mm1 bgp1">Raed Abdallah</h1>
          </VerticalView>
          <VerticalView>
            <img src={img2} alt="raed abdallah" width={"100%"} />
            <h1 className="mm1 bgp1">Raed Abdallah</h1>
          </VerticalView>
          <VerticalView>
            <img src={img3} alt="raed abdallah" width={"100%"} />
            <h1 className="mm1 bgp1">Raed Abdallah</h1>
          </VerticalView>
        </GridViewTemplateC>
      </VerticalView>
      <MarginBreak margin="120px" />
      <VerticalView
        BackgroundColor="#191930"
        AlignCenter
        justifyContent="center"
      >
        <h1 className="bgp3 mm1"> Interested? Let's keep in touch!</h1>
        <HorizontalView
          AlignCenter
          justifyContent="center"
          padding="0"
          classes="mm1"
        >
          <FaDiscord className="defaultLink" />
          <FaTwitter className="defaultLink" />
          <FaYoutube className="defaultLink" />
          <FaInstagram className="defaultLink" />
        </HorizontalView>
        <h1 className="bgp3 mm1">info@nowa.dev</h1>
      </VerticalView>
    </>
  );
}
