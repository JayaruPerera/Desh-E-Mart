import  Header  from "@/sections/Header";
import './page.css';
import { icons } from '../assets/icons/assets.js'
// import ProductCard from "@/components/ProductCard";
import CardSlider from "@/components/CardSlider";
import Footer from "@/sections/Footer";
import Link from "next/link";
import MapReview from "@/components/MapReview";

export default function Home() {
  return (
    <div className="home-container">

      <div className="nav-container">
        <Header />
      </div>

      {/* Hreo section */}
      <div className="home-content">
        <div className="home-inner">
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
            <p>Repaired thousands of devices, ensuring satisfaction and reliability every time.</p>
          </div>

          <div className="right">
            <h4 className="openclose">
              <div className="dot"></div>
              Open
            </h4>
            <div className="time">
              <p>from 09:00 am to 05:00 pm</p>
              <p>Monday - Friday</p>
            </div>
          </div>

        </div>

        <div className="home-bottom">
          <p className="bottom-text">
            We provide top-quality gadgets and reliable repair services tailored to your needs. 
            From the latest devices to expert care, we’ve got you covered.
          </p>
        </div>

      </div>

      {/* Team section */}
      <div className="main-section">
        <h3 className="section-header">
          5 Years of trusted expertise in repairs
        </h3>

        <div className="expertise">
          <div className="exp-card">
            <img src={icons.service.src} alt="service" />
            <h4 className="card-header">
              Quality Service
            </h4>
            <p className="card-text">
              Five years of trusted experience delivering reliable, 
              high-quality repairs for your devices.
            </p>
          </div>

          <div className="exp-card">
            <img src={icons.hours.src} alt="hours" />
            <h4 className="card-header">
              Professional Team
            </h4>
            <p className="card-text">
              Our professionals deliver exceptional service and ensure 
              customer satisfaction
            </p>
          </div>

          <div className="exp-card">
            <img src={icons.team.src} alt="team" />
            <h4 className="card-header">
              24 Hour Support
            </h4>
            <p className="card-text">
              We’re here around the clock, ready to assist with questions 
              or concerns promptly.
            </p>
          </div>
        </div>
      </div>

      {/* service card section */}
      <div className="main-section re-section">
        <h3 className="section-header">
          Our efficient services & solution
        </h3>
        <p className="card-text servicecard-text">
          We offer a range of reliable services to address your tech needs 
          quickly and effectively. Whether its laptop, phone, or tablet 
          repairs, we ensures quality to keep devices running smoothly.
        </p>

        <div className="repair-card">
          <div className="re-card">
            <div className="img-con">
              <img src={icons.repair1.src} alt="laptop" />
            </div>
            <div className="card-details">
              <h4 className="card-header">
                Laptop Repair
              </h4>
              <p className="card-text">
                Our experts can fix any laptop issues, from software 
                malfunctions to hardware replacements.
              </p>

              <a href="">Repair now</a>
            </div>
          </div>

          <div className="re-card">
            <img src={icons.repair2.src} alt="laptop" />
            <div className="card-details">
              <h4 className="card-header">
              Phone Repair
              </h4>
              <p className="card-text pb-11">
              Fast and reliable fixes to get your 
              phone working like new
              </p>

              <a href="">Repair now</a>
            </div>
          </div>

          <div className="re-card">
            <img src={icons.repair3.src} alt="laptop" />
            <div className="card-details">
              <h4 className="card-header">
              Tablet Repair
              </h4>
              <p className="card-text pb-11">
              Expert services to resolve tablet 
              issues with precision and care.
              </p>

              <a href="">Repair now</a>
            </div>
          </div>
        </div>
      </div>

      {/* device solution section */}
      <div className="main-section">
        <h3 className="section-header">
          Providing device solution
        </h3>
        <p className="card-text servicecard-text">
          We provide repairs like battery replacement, charging port fixes, cracked screens, speaker issues, 
          water damage, and OS updates  to keep your devices running smoothly
        </p>

        <div className="solutions">

          <div className="solution">
            <div className="solution-card">
              <div className="icon">
                <img src={icons.battery.src} alt="" />
              </div>
              <div className="solution-content">
                <h4 className="card-header">
                  Battery Replacement
                </h4>
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
                <h4 className="card-header">
                  Cracked Screen
                </h4>
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
                <h4 className="card-header">
                  Water Damage
                </h4>
                <p className="card-text">
                  We repair devices affected by water damage.
                </p>
              </div>
            </div>
          </div>

          <div className="solution">
            <div className="solution-card">
                <div className="icon">
                  <img src={icons.charging.src} alt="" />
                </div>
                <div className="solution-content">
                  <h4 className="card-header">
                    Changing Repair
                  </h4>
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
                <h4 className="card-header">
                  Speaker Not Working
                </h4>
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
                <h4 className="card-header">
                  OS Update
                </h4>
                <p className="card-text">
                  We update your device’s OS for better performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product section */}
      <div className="main-section">
        <div className="w-[100%] mb-[-50px] flex flex-col py-[8px] border-b border-[#C1C2C3] border-opacity-30">
          <p className="text-[14px] text-[#FCFDFF] opacity-70">
            Shop Products
          </p>
        </div>

        <CardSlider heading="Mobile Phones" seemore="/products" />
        <CardSlider heading="Charges & Accessories" seemore="/products" />
        <div className="view all">
          <Link href="/products">
            <button className="hover:opacity-80 text-[16px] text-[#161A1D] py-3 px-4 rounded-full bg-[#FCFDFF]">View all</button>
          </Link>
        </div>
      </div>


      {/* Get to know about us section */}
      <div className="main-section section-bottom">
        <h3 className="section-header">
          Get to know about us
        </h3>

        <div className="expertise">
          <div className="exp-card">
            <img src={icons.at.src} alt="service" />
            <h4 className="card-header">
              Who We Are
            </h4>
            <p className="card-text">
              At Desha E-Mart, we operate two specialized shops: one for 
              selling mobile phones, laptops, and CCTV systems, and 
              another dedicated to repair services. Our mission is to 
              provide quality products and trusted repair services, 
              making technology accessible and reliable for all.
            </p>
          </div>

          <div className="exp-card">
            <img src={icons.route.src} alt="hours" />
            <h4 className="card-header">
              Our Journey
            </h4>
            <p className="card-text">
              With over 5 years of experience, we’ve built a reputation for 
              excellence, having served thousands of satisfied customers. From 
              cutting-edge gadgets to personalized repair services, we ensure 
              reliability, trust, and unmatched value.
            </p>
          </div>

          <div className="exp-card">
            <img src={icons.offer.src} alt="team" />
            <h4 className="card-header">
              What We Offer
            </h4>
            <p className="card-text">
              <span style={{ fontWeight: 500 }}>Product Sales:</span> Explore a variety of mobile phones, laptops, and 
              CCTV systems from leading brands at competitive prices.
              <br />
              <br />
              <span style={{ fontWeight: 500 }}>Repair Services:</span> Get expert repair and servicing for your mobile 
              phones and laptops. We handle every issue with care and precision.
            </p>
          </div>
        </div>
      </div>

      {/* google review part*/}
      <div className="main-section">
        <h3 className="section-header">
          Find Us
        </h3>
        <div className="review">
          <MapReview />
          
        </div>
      </div>


      {/* footer */}
      <div className="nav-container">
        <Footer />
      </div>
      
    </div>
  )
}
