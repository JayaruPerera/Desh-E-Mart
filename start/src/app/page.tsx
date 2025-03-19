"use client";

import Header from "@/sections/Header";
import "./page.css";
import { icons } from "../assets/icons/assets.js";
// import ProductCard from "@/components/ProductCard";
import CardSlider from "@/components/CardSlider";
import Footer from "@/sections/Footer";
import Link from "next/link";
import MapReview from "@/components/MapReview";
import ShopStatus from "@/components/ShopStatus";
import { getShopStatus } from "@/lib/shop-status";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GlowingExpCard } from "@/components/ui/glowing-stars";
import { GlowingExpCardWithEffect } from "@/components/ui/GlowingExpCardWithEffect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Force dynamic rendering to prevent caching
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export default function Home() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    const fetchShopStatus = async () => {
      try {
        const status = await getShopStatus();
        setIsShopOpen(status);
        console.log("Home page shop status:", status);
      } catch (error) {
        console.error("Error fetching shop status:", error);
      }
    };

    fetchShopStatus();
  }, []);

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="home-container">
      <div className="nav-container">
        <Header />
      </div>

      {/* Hreo section */}
      <motion.div
        className="home-content relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Spotlight className="md:block" fill="white" />
        <div className="home-inner relative">
          <div className="heading">
            <h2 className="topper">Ultimate</h2>
            <h1>TECH</h1>
            <h2>Partner</h2>
          </div>
        </div>

        <div className="home-img">
          <img className="homehero" src="/HomeHero.png" alt="Home Hero" />
        </div>

        <div className="status-container">
          <div className="left">
            <h4>5 Years of Trusted Expertise in Repairs</h4>
            <p>
              Repaired thousands of devices, ensuring satisfaction and
              reliability every time.
            </p>
          </div>

          <div className="right">
            <ShopStatus initialStatus={isShopOpen} />
            {/* <div className="time">
              <p>from 09:00 am to 05:00 pm</p>
              <p>Monday - Friday</p> */}
            {/* </div> */}
          </div>
        </div>

        <div className="home-bottom">
          <p className="bottom-text">
            We provide top-quality gadgets and reliable repair services tailored
            to your needs. From the latest devices to expert care, we’ve got you
            covered.
          </p>
        </div>
      </motion.div>

      {/* Team section */}
      <motion.div
        className="main-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="section-header" variants={fadeInUp}>
          5 Years of trusted expertise in repairs
        </motion.h3>

        <motion.div className="expertise" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <CardSpotlight className="exp-card">
              <div className="relative z-10 flex flex-col items-left gap-6">
                <img
                  src={icons.service.src}
                  alt="service"
                  className="relative z-10 w-16 h-16"
                />
                <h4 className="card-header relative z-10">Quality Service</h4>
                <p className="card-text relative z-10 text-left">
                  Five years of trusted experience delivering reliable,
                  high-quality repairs for your devices.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <CardSpotlight className="exp-card">
              <div className="relative z-10 flex flex-col items-left gap-6">
                <img
                  src={icons.hours.src}
                  alt="hours"
                  className="relative z-10 w-16 h-16"
                />
                <h4 className="card-header relative z-10">Professional Team</h4>
                <p className="card-text relative z-10 text-left">
                  Our professionals deliver exceptional service and ensure
                  customer satisfaction
                </p>
              </div>
            </CardSpotlight>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <CardSpotlight className="exp-card">
              <div className="relative z-10 flex flex-col items-left gap-6">
                <img
                  src={icons.team.src}
                  alt="team"
                  className="relative z-10 w-16 h-16"
                />
                <h4 className="card-header relative z-10">24 Hour Support</h4>
                <p className="card-text relative z-10 text-left">
                  We are here around the clock, ready to assist with questions
                  or concerns promptly.
                </p>
              </div>
            </CardSpotlight>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* service card section */}
      <motion.div
        className="main-section re-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="section-header" variants={fadeInUp}>
          Our efficient services & solution
        </motion.h3>
        <motion.p className="card-text servicecard-text" variants={fadeInUp}>
          We offer a range of reliable services to address your tech needs
          quickly and effectively. Whether its laptop, phone, or tablet repairs,
          we ensures quality to keep devices running smoothly.
        </motion.p>

        <motion.div className="repair-card" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <BackgroundGradient
              containerClassName="w-full h-full"
              className="w-full h-full"
            >
              <div className="re-card">
                <div className="img-con">
                  <img src={icons.repair1.src} alt="laptop" />
                </div>
                <div className="card-details">
                  <h4 className="card-header">Laptop Repair</h4>
                  <p className="card-text">
                    Our experts can fix any laptop issues, from software
                    malfunctions to hardware replacements.
                  </p>

                  <a href="">Repair now</a>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BackgroundGradient
              containerClassName="w-full h-full"
              className="w-full h-full"
            >
              <div className="re-card">
                <img src={icons.repair2.src} alt="laptop" />
                <div className="card-details">
                  <h4 className="card-header">Phone Repair</h4>
                  <p className="card-text pb-11">
                    Fast and reliable fixes to get your phone working like new
                  </p>

                  <a href="">Repair now</a>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BackgroundGradient
              containerClassName="w-full h-full"
              className="w-full h-full"
            >
              <div className="re-card">
                <img src={icons.repair3.src} alt="laptop" />
                <div className="card-details">
                  <h4 className="card-header">Tablet Repair</h4>
                  <p className="card-text pb-11">
                    Expert services to resolve tablet issues with precision and
                    care.
                  </p>

                  <a href="">Repair now</a>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* device solution section */}
      <motion.div
        className="main-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
       <motion.h3 className="section-header" variants={fadeInUp}>
          Providing device solution
        </motion.h3>
        <motion.p className="card-text servicecard-text" variants={fadeInUp}>
          We provide repairs like battery replacement, charging port fixes,
          cracked screens, speaker issues, water damage, and OS updates to keep
          your devices running smoothly
        </motion.p>

        <motion.div className="solutions" variants={staggerContainer}>
          <motion.div className="solution" variants={fadeInUp}>
            <div className="solution-card">
              <div className="icon">
                <img src={icons.battery.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">Battery Replacement</h4>
                <p className="card-text">
                  We replace worn-out batteries to improve device performance
                </p>
              </div>
            </div>

            <div className="solution-card">
              <div className="icon">
                <img src={icons.screen.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">Cracked Screen</h4>
                <p className="card-text">
                  We repair or replace cracked screens.
                </p>
              </div>
            </div>

            <div className="solution-card">
              <div className="icon">
                <img src={icons.water.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">Water Damage</h4>
                <p className="card-text">
                  We repair devices affected by water damage.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="solution" variants={fadeInUp}>
            <div className="solution-card">
              <div className="icon">
                <img src={icons.charging.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">Charging Repair</h4>
                <p className="card-text">
                  We fix charging ports for seamless charging
                </p>
              </div>
            </div>

            <div className="solution-card">
              <div className="icon">
                <img src={icons.speaker.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">Speaker Not Working</h4>
                <p className="card-text">
                  We restore sound by fixing faulty speakers.
                </p>
              </div>
            </div>

            <div className="solution-card">
              <div className="icon">
                <img src={icons.os.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">OS Update</h4>
                <p className="card-text">
                  We update your devices OS for better performance.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* product section */}
      <motion.div
        className="main-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={fadeInUp}
          className="w-full mb-6 flex flex-col py-2 border-b border-[#C1C2C3] border-opacity-30"
        >
          <p className="text-sm text-[#FCFDFF] opacity-70 px-2">Shop Products</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full overflow-hidden">
          <CardSlider heading="Mobile Phones" seemore="/products" />
          <CardSlider heading="Charges & Accessories" seemore="/products" />
          <div className="view all mt-8">
            <Link href="/products">
              <button className="hover:opacity-80 text-[16px] text-[#161A1D] py-3 px-4 rounded-full bg-[#FCFDFF]">
                View all
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Get to know about us section */}
      <motion.div
        className="main-section section-bottom"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="section-header" variants={fadeInUp}>
          Get to know about us
        </motion.h3>

        <motion.div className="expertise" variants={staggerContainer}>
          <GlowingExpCard
            iconSrc={icons.at.src}
            title="Who We Are"
            description="At Desha E-Mart, we operate two specialized shops: one for selling mobile phones, laptops, and CCTV systems, and another dedicated to repair services. Our mission is to provide quality products and trusted repair services, making technology accessible and reliable for all."
          />

          <GlowingExpCard
            iconSrc={icons.route.src}
            title="Our Journey"
            description="With over 5 years of experience, we've built a reputation for excellence, having served thousands of satisfied customers. From cutting-edge gadgets to personalized repair services, we ensure reliability, trust, and unmatched value."
          />

          <GlowingExpCard
            iconSrc={icons.offer.src}
            title="What We Offer"
            description={`Product Sales: Explore a variety of mobile phones, laptops, and CCTV systems from leading brands at competitive prices.\n\nRepair Services: Get expert repair and servicing for your mobile phones and laptops. We handle every issue with care and precision.`}
          />
        </motion.div>
      </motion.div>

      {/* google review part*/}
      <motion.div
        className="main-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 className="section-header" variants={fadeInUp}>
          Find Us
        </motion.h3>
        <motion.div className="review" variants={fadeInUp}>
          <MapReview />
        </motion.div>
      </motion.div>

      {/* footer */}
      <div className="nav-container">
        <Footer />
      </div>
    </div>
  );
}
