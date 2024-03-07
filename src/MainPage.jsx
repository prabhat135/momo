// MainPage.js
import React, { useState } from "react";
import "./MainPage.css";
import Reviews from "./Reviews";
import ContactForm from "../components/ContactForm";


const MainPage = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Home section */}
      <div
        id="home"
        className="home flex flex-col items-center justify-center text-center min-h-[830px]"
      >
        <div className="home_content">
          <h1 className="text-2xl md:text-4xl lg:text-7xl">
            Your Next Culinary Adventure
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-7xl">
            Awaits at Momos Point
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna<br /> aliqua. Ut enim
            ad minim veniam quis.
          </p>

          <div className="buttons flex flex-col gap-4 md:flex-row">
            <button className="order-button red w-full p-4">
              ORDER&nbsp;ON&nbsp;ZOMATO
            </button>
            <button className="order-button orange w-full p-4">
              ORDER&nbsp;ON&nbsp;SWIGGY
            </button>
          </div>
        </div>
      </div>

      {/* About section */}
      <div id="about" className="about md:px-32 lg:pb-20 p-6 lg:pt-40">
        <div className="aboutus flex flex-col md:flex-row lg:pb-20">
          <div className="w-full md:w-1/2 text-center items-center justify-center">
            <img className="w-3/4" src="./images/aboutus.png" alt="About Us" />
          </div>
          <div className="aboutus_content w-full md:w-1/2 p-2 md:p-6 lg:p-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl mb-20">About Us</h2>
            <p className="text-base md:text-lg lg:text-xl">
              This gourmet journey started in nineties at a small shop in
              k.nags. It is sheer patronage of guests like you and blessings
              that Momo's point has made a mark in almost all news channels and
              leading newspapers.
              <br />
              <br /> We at Momo's point are witness to the journey of some
              Bollywood celebs, celebrity chefs and famous media personalities
              right from their DU days till today we are committed to give you
              best experience visit after visit.
            </p>
          </div>
        </div>

        <div className="featured w-full mt-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-left mb-20">We Featured On</h2>
          <div className="flex flex-wrap justify-between gap-6">
            <img className="featured-image cursor-pointer" width={150} src="./images/f01.png" alt="Company 1" />
            <img className="featured-image cursor-pointer" width={250} src="./images/f02.png" alt="Company 2" />
            <img className="featured-image cursor-pointer" width={80} src="./images/f03.png" alt="Company 3" />
            <img className="featured-image cursor-pointer" width={250} src="./images/f04.png" alt="Company 4" />
            <img className="featured-image cursor-pointer" width={150} src="./images/f05.png" alt="Company 5" />
            <img className="featured-image cursor-pointer" width={80} src="./images/f06.png" alt="Company 6" />
            {/* <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6' src='./images/f6.png' alt='Company 6' /> */}
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div id="menu" className="menu md:px-32 py-20 p-6">
        <div className="menu-top flex justify-between items-center">
          <div className="menu-header">
            <p>OUR MENU</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Menu That Always <br /> Makes You Fall In Love
            </h2>
          </div>
          <div className="menu-btn flex justify-between gap-4">
            <button className="change-menu-button h-14 w-14">
                <img className="w-4 h-4 m-auto" src="./images/prev_icon.png" alt="Previous Icon" />
            </button>
            <button className="change-menu-button h-14 w-14 ">
                <img className="w-4 h-4 m-auto" src="./images/next_icon.png" alt="Next Icon" />
            </button>
          </div>
        </div>

        <div className="menu-categories mt-20 justify-between md:flex ">
          <div className="menu-category-container  flex flex-row md:flex-col overflow-auto gap-10 md:gap-10 mr-10">
            <div className="menu-category flex gap-6 p-4 ">
              <img src="./images/shrimp.png" alt="Mediterranean Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Mediterranean</h3>
            </div>
            <div className="menu-category flex gap-6 p-4 ">
              <img src="./images/italian.png" alt="Italian Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Italian</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/fish.png" alt="Thai Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Thai</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/sushi.png" alt="Chinese Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Chinese</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/burger.png" alt="Continental Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Continental</h3>
            </div>
          </div>

          <div className="menu-images flex gap-8 overflow-hidden mt-8 md:mt-0">
            <img
              className="w-full sm:w-3/2 md:w-2/4 lg:w-3/4 xl:w-1/2"
              src="./images/pizza1.png"
              alt="Pizza1"
            />
            <img
              className="w-full sm:w-3/2 md:w-2/4 lg:w-3/4 xl:w-1/2"
              src="./images/pizza2.png"
              alt="Pizza2"
            />
          </div>
        </div>
      </div>


      {/* Reviews section */}
      <Reviews />


      {/* Blog section */}
      <div className=" md:px-32 py-20 p-6">
        <div className="blogs">
          <h2 className="text-2xl md:text-4xl lg:text-5xl mb-20 text-[#333F72]">Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-36 md:gap-12 items-center">

            {/* <!-- Start Card 1 --> */}
            <div class="w-full rounded overflow-hidden font-manrope hover:cursor-pointer">
              <img class="w-full" src="./images/blog1.png" alt="Blog Image" />
              <div class="pt-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">5 min read</span>
              </div>
              <div class="py-4">
                <div class="font-semibold text-xl mb-2">
                  Eaque Nam Blanditiis Rerum Alias Veratatis Fuga Qui. Beatae Voluptas..
                </div>
                <p class="font-normal text-xl mt-6 tracking-wide">
                  Facere Non Maxime Et Unde Libero Dolor Rerum Atque Voluptatem. Est Aliquid Quo Fugit. Quia Tempore Cul...
                </p>
              </div>
              <div class="px-0 py-4 flex items-center">
                <img class="h-10 w-10 rounded-full mr-2" src="./images/sudeep.png" alt="Avatar of User" />
                <p class="text-gray-800 leading-none ">Sudeep Srivastava | 20 Dec 2021</p>
              </div>
            </div>
            {/* <!-- End Card 1 --> */}

            {/* <!-- Start Card 2 --> */}
            <div class="w-full rounded overflow-hidden font-manrope hover:cursor-pointer">
              <img class="w-full" src="./images/blog2.png" alt="Food Image" />
              <div class="pt-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">15 min read</span>
              </div>
              <div class="py-4">
                <div class="font-semibold text-xl mb-2">
                  Eaque Nam Blanditiis Rerum Alias Veratatis Fuga Qui. Beatae Voluptas..
                </div>
                <p class="font-normal text-xl mt-6 tracking-wide">
                  Facere Non Maxime Et Unde Libero Dolor Rerum Atque Voluptatem. Est Aliquid Quo Fugit. Quia Tempore Cul...
                </p>
              </div>
              <div class="px-0 py-4 flex items-center">
                <img class="h-10 w-10 rounded-full mr-2" src="./images/sudeep.png" alt="Avatar of User" />
                <p class="text-gray-800 leading-none ">Sudeep Srivastava | 20 Dec 2021</p>
              </div>
            </div>
            {/* <!-- End Card 2 --> */}

            {/* <!-- Start Card 3 --> */}
            <div class="w-full rounded overflow-hidden font-manrope hover:cursor-pointer">
              <img class="w-full" src="./images/blog3.png" alt="Food Image" />
              <div class="pt-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">15 min read</span>
              </div>
              <div class="py-4"> 
                <div class="font-semibold text-xl mb-2">
                  Eaque Nam Blanditiis Rerum Alias Veratatis Fuga Qui. Beatae Voluptas..
                </div>
                <p class="font-normal text-xl mt-6 tracking-wide">
                Facere Non Maxime Et Unde Libero Dolor Rerum Atque Voluptatem. Est Aliquid Quo Fugit. Quia Tempore Cul...
                </p>
              </div>
              <div class="px-0 py-4 flex items-center">
                <img class="h-10 w-10 rounded-full mr-2" src="./images/sudeep.png" alt="Avatar of User" />
                <p class="text-gray-800 leading-none ">Sudeep Srivastava | 20 Dec 2021</p>
              </div>
            </div>
            {/* <!-- End Card 3 --> */}

          </div>
        </div>
      </div>

      {/* Footer section */}
      <div id="footer" className="footer">
        <div className="map text-center md:text-left md:px-32 py-20 mx-auto items-center justify-center p-6">
          {/* Image of the map */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#333F72] mb-20">Visit Us Today</h2>
          {/* <img className='mx-auto md:mx-0' src='./images/map.png' alt='Map' /> */}
          <div className="flex md:flex-row flex-col w-full mx-auto">
            <div className="bg-[#333F72] p-12 md:w-1/4 w-full">
              <h1 className="text-4xl my-4">
                Address
              </h1>
              <span className="text-lg">Momos Point</span>
              <hr className="mt-20 opacity-0" />
              <span className="">
                47 UA, Block UA, Jawahar Nagar, Kamla Nagar, New Delhi, Delhi, 110007
              </span>
              <hr className="mt-20 opacity-0" />
              <button onClick={() => setIsOpen(true)} className="order-button">CONTACT US</button>
            </div>

            <div className="google-map-code w-full  lg:w-[1200px] md:w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3083616386994!2d77.20462227490341!3d28.680421025320022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd903c717bd9%3A0x6558e91220220611!2sMomo&#39;s%20Point!5e0!3m2!1sen!2sin!4v1709630526456!5m2!1sen!2sin"
                frameBorder="0"
                className="w-full h-full"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>

        <div className="footer-content flex flex-col md:flex-row md:p-12 p-6">
          <div className="footer-logo text-center md:text-left items-center justify-center" >
            {/* Logo */}
            <img
              className="mx-auto md:mx-0 items-center justify-center text-center"
              height={120}
              width={120}
              src="./images/logo.png"
              alt="Momos Point Logo"
            />
            <p>
              Our Job is to filling your tummy
              <br /> with delicious food and with
              <br /> fast and free delivery.
            </p>
          </div>

          <div className="footer-links-and-contact flex flex-col md:flex-row lg:gap-28">
            <div className=" flex flex-col text-center md:text-left  text-base md:text-lg lg:text-xl">
              {/* Navigation links */}
              <a href="#home" className="flex-grow text-center md:text-left">Home</a>
              <a href="#about" className="flex-grow text-center md:text-left">About Us</a>
              <a href="#menu" className="flex-grow text-center md:text-left">Our Menu</a>
              <a href="#reviews" className="flex-grow text-center md:text-left">Reviews</a>
            </div>
            <div className="footer-contact text-center md:text-left">
              <div>
                <h2 className="font-bold text-xl">Get In Touch</h2>
                <p>Question or Feedback?</p>
                <p>We{`'d`} love to hear from you</p>
              </div>
              {/* Email and social media buttons */}
              <img
                className="mx-auto md:mx-0 mt-6"
                src="./images/email_icon.png"
                alt="Email Us"
              />
              <div className="social-media mx-auto md:mx-0 mt-6 flex items-center justify-center">
                <img src="./images/instagram.png" alt="Instagram" />
                <img src="./images/facebook.png" alt="Facebook" />
                <img src="./images/twitter.png" alt="Twitter" />
              </div>
            </div>
          </div>

        </div>
      </div>
      {isOpen && <ContactForm setIsOpen={setIsOpen} isOpen={isOpen} />}
    </div >
  );
};

export default MainPage;
