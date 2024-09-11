import React from "react";
import BannerImg from "../../assets/banner3.png";

const About3 = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">03</h1>
                </div>
                <div>
                  <p className="text-primary">Our Community</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <div className="ab">
              <p data-aos="fade-up" className="leading-8 tracking-wide" >
              One of the things that sets CrossFit apart is our sense of community. When you walk through our doors, you’re not just joining a gym—you’re joining a family. Our members support and encourage each other, celebrating victories and helping one another overcome challenges. 
              </p>
              
              <p data-aos="fade-up" data-aos-delay="300">
              We believe that fitness is a journey best traveled together, and at CrossFit, no one is left behind.
              </p>
              </div>
            
              <button data-aos="fade-up" className="button-outline">
                <a href="https://dev-jjgtlcmvb3dvo5kn.us.auth0.com/u/login?state=hKFo2SB2WG95S000clpfcmx4OHVadk8tT1JkU2JLWXgwQy12VaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDdtUXFlaXQwWjh5dGJtMndUbWJjY0ZlNjh5R2pLeFBDo2NpZNkgd3VPbEdEbU9Rb3lmbFFFc0Fxd0gzQ0ZiRHRDbllhVGI">Get Started</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;