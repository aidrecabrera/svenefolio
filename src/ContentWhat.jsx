import { Component } from "react";

export default class ContentWhat extends Component {
  render() {
    return (
      <div className="sveneborder pt-20 pb-20 mb-5">
        <div>
          <h1 className="text-wrapper font-semibold font-inter tracking-widest pl-40 mb-5">
            WHAT I HAVE TOUCHED OR INVOLVED.
          </h1>
        </div>
        <div className="flex flex-col tracking-wider font-inter">
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500  pt-5">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              DEVELOPMENT
            </h1>
            <div className="justify-end w-6/12">
              <p className="flex justify-end items-center h-36 text-right">
                HTML & CSS, JavaScript, Tailwind, ReactJS, NextJS, ViteJS,
                VueJS, NodeJS, Firebase, Flutter, Java, Python, C, C++, Visual
                Basic, Scratch
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500 pt-5">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              WRITING
            </h1>
            <div className="flex justify-center items-center h-36">
              <p className="flex justify-end items-center h-36 text-right">
                Academic, Research, Technical, and I am yet to explore.
                <sup>1</sup>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500 pt-5">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              LANGUAGE
            </h1>
            <p className="flex justify-end items-center h-36 text-right">
              Bisaya, English, Tagalog, and Programming.<sup>2</sup>
            </p>
          </div>
          <div className="flex flex-row justify-between pl-40 pr-40 ">
            <div className="flex justify-end font-extralight text-sm items-center h-36 text-left w-4/12">
              <div className="flex-container">
                <p className="mt-10">
                  I am trying to learn how to write beyond the formal tone and
                  academic writing style that I have been dogmatically adhering.
                  <sup>1</sup>
                </p>
                <p className="mt-5">
                  This is a joke. The punchline is that I know “Programming
                  Language.<sup>2</sup>
                </p>
              </div>
            </div>
            <button className="sveneborder font-league tracking-widest text-3xl border mt-14 h-20 w-60  hover:bg-red-700 hover:border-red-700 hover:text-black  transition-colors duration-500">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
