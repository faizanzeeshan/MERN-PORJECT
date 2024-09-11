import React from "react";
import BannerImg from "../../assets/heroo.jpg";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/70  dark:bg-black/80 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p data-aos="fade-up" className="text-primary text-2xl">
            Transform Your Body, Elevate Your Mind.


            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              WELCOME TO <span>CROSSFIT</span>

!
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “The body achieves what the mind believes.”{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn"
            >
                  <a href="https://dev-jjgtlcmvb3dvo5kn.us.auth0.com/u/login?state=hKFo2SB2WG95S000clpfcmx4OHVadk8tT1JkU2JLWXgwQy12VaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDdtUXFlaXQwWjh5dGJtMndUbWJjY0ZlNjh5R2pLeFBDo2NpZNkgd3VPbEdEbU9Rb3lmbFFFc0Fxd0gzQ0ZiRHRDbllhVGI">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
