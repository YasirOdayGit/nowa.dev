import React, { useState } from "react";
import { Navbar } from "../../components";
import {
  ButtonTD,
  HorizontalView,
  MarginBreak,
  VerticalView,
} from "../../foundation";
import img1 from "../../assets/sp1.png";
import img2 from "../../assets/sp2.png";
import img3 from "../../assets/sp3.png";
import img4 from "../../assets/sp6.png";
import img5 from "../../assets/sp5.png";
import { FaDiscord, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ComingSoonModal from "../../components/modals/ComingSoonModal";
import { Parallax } from "react-scroll-parallax";
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
      <ComingSoonModal
        value={showModal}
        callback={(value) => setShowModal(value)}
      />
      <VerticalView
        AlignCenter
        justifyContent="center"
        BackgroundColor="transparent"
        classes="cc75 vh100"
      >
        <motion.h1
          className="bgh1 mm2"
          transition={{
            delay: 0.5,
            duration: 0.4,
          }}
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          THE APP BUILDING PLATFORM YOU ALWAYS WANTED.
        </motion.h1>
        <motion.p
          className="bgp1 mm2"
          transition={{
            delay: 0.8,
            duration: 0.4,
          }}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
        >
          Whether you are an app developer or not, you can build mobile and web
          apps fast without writing a single line of code, for free!
        </motion.p>
        <MarginBreak margin="10px" />
        <ButtonTD
          about="get early access"
          color="#ffab3f"
          onClick={() => setShowModal(true)}
          shadowColor="#db8a20"
          text="get early access"
          textColor="#08081b"
          classes="mm1"
        />
      </VerticalView>
      <MarginBreak margin="90px" />
      <HorizontalView
        AlignCenter
        justifyContent="space-between"
        classes="cc75 float"
        padding="90px 40px"
        BackgroundColor="rgba(26, 24, 34, 0.26)"
      >
        <VerticalView AlignLeft classes="zi">
          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h1 className="mm1 bgh2 tal zi">FREEDOM IN DESIGN</h1>
            <p className="mm1 bgp2 tal zi">
              With our flexible UI designer, you can easily drag and drop
              widgets, customize and animate them to build your awesome app
              interface.
            </p>
          </motion.div>
        </VerticalView>
        <Parallax speed={-8}>
          <motion.img
            src={img1}
            alt=""
            width={"100%"}
            className=""
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: 20,
              opacity: 0,
            }}
            whileInView={{
              x: -20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          />
        </Parallax>
      </HorizontalView>
      <MarginBreak margin="125px" />

      <HorizontalView
        AlignCenter
        justifyContent="space-between"
        classes="cc75 float"
        padding="90px 40px"
        BackgroundColor="rgba(26, 24, 34, 0.26)"
      >
        <Parallax speed={8}>
          <motion.img
            src={img2}
            alt=""
            width={"100%"}
            className=""
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          />
        </Parallax>
        <VerticalView AlignLeft classes="zi">
          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h1 className="mm1 bgh2 tal zi">SAY GOODBYE TO CODING</h1>
            <p className="mm1 bgp2 tal zi">
              By drag and drop already-made blocks, you can make your app do
              whatever you want. It’s easy and fun, and most important, you
              don't need to write a single line of code.
            </p>
          </motion.div>
        </VerticalView>
      </HorizontalView>
      <MarginBreak margin="125px" />

      <HorizontalView
        AlignCenter
        justifyContent="space-between"
        classes="cc75 float"
        padding="90px 40px"
        BackgroundColor="rgba(26, 24, 34, 0.26)"
      >
        <VerticalView AlignLeft classes="zi">
          <motion.div
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: -20,
              opacity: 0,
            }}
            whileInView={{
              x: 20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h1 className="mm1 bgh2 tal ">USE YOUR FAVOURITE BACKEND</h1>
            <p className="mm1 bgp2 tal ">
              Firebase, or your own API, you can easily connect your app to any
              API within a couple of clicks.
            </p>
          </motion.div>
        </VerticalView>
        <Parallax speed={-8}>
          <motion.img
            src={img3}
            alt=""
            width={"350px"}
            className=""
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: 20,
              opacity: 0,
            }}
            whileInView={{
              x: -20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          />
        </Parallax>
      </HorizontalView>
      <MarginBreak margin="125px" />

      {/* item 4 */}
      <VerticalView AlignCenter classes="zi cc75 float" padding="90px 40px">
        <motion.div
          transition={{
            duration: 0.4,
          }}
          initial={{
            x: -20,
            opacity: 0,
          }}
          whileInView={{
            x: 20,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h1 className="mm1 bgh2 tal ">PUBLISH ANYWHERE</h1>
        </motion.div>
        <MarginBreak margin="20px" />

        <Parallax speed={-8}>
          <motion.img
            src={img4}
            alt=""
            width={"100%"}
            className=""
            transition={{
              duration: 0.4,
            }}
            initial={{
              x: 20,
              opacity: 0,
            }}
            whileInView={{
              x: -20,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
          />
        </Parallax>
      </VerticalView>
      <MarginBreak margin="120px" />

      <div className="cc75">
        <img src={img5} alt="partners" width={"100%"} />
      </div>
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
    </div>
  );
}
