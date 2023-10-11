import React from "react";
import Typewriter from "typewriter-effect";

const Main = () => {
    return (
        <div className="container mx-auto flex px-10 py-32 md:flex-row flex-col items-center mt-16">
          <div className="lg:flex-grow flex flex-col md:flex-row md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="md:w-1/2 lg:pr-24 md:pr-16 md:order-2">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
            <div className="md:w-1/2 lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center md:order-1">
              <div>
                <h1 style={{ fontSize: "3rem", paddingBottom: "1rem" }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
    
                <h1 className="heading-name" style={{ fontSize: "4rem" }}>
                  I'm
                  <strong className="main-name"> Sabrine Gaceur</strong>
                </h1>
    
                <div style={{ padding: "2rem", textAlign: "left", fontSize: "2rem" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Web/Mobile Developer",
                        "MERN Stack Developer",
                        "Open Source Contributor",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default Main;