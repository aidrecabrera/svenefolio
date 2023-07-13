import { Component } from "react";

export default class ContentWhat extends Component {
  render() {
    return (
      <div>
        <div className="border p-12">
          <div>
            <h1 className="font-bold font-league text-12xl leading-none">
              02.
            </h1>
            <h1 className="font-semibold font-inter tracking-widest text-base pb-5">
              WHAT HAVE I TOUCHED?
            </h1>
          </div>
          <div className="text-right">
            <div className="pb-5">
              <h1 className="font-inter font-black tracking-wider text-3xl">
                DEVELOPMENT
              </h1>
              <div>
                <p>
                  HTML & CSS, JavaScript, Tailwind, ReactJS, NextJS, VueJS,
                  NodeJS, Firebase, Flutter, Java, Python, C, C++, Visual Basic,
                  Scratch
                </p>
              </div>
            </div>
            <div className="pb-5">
              <h1 className="font-inter font-black tracking-wider text-3xl">
                WRITING
              </h1>
              <div>
                <p>
                  Academic, Research, Technical, and I am yet to explore.
                  <sup>1</sup>
                </p>
              </div>
            </div>
            <div className="pb-5">
              <h1 className="font-inter font-black tracking-wider text-3xl">
                LANGUAGE
              </h1>
              <p>
                Bisaya, English, Tagalog, and Programming.<sup>2</sup>
              </p>
            </div>
            {/* <div>
              <div>
                <p>
                  I am trying to learn how to write beyond the formal tone and
                  academic writing style that I have been dogmatically adhering.
                  <sup>1</sup>
                </p>
                <p>
                  This is a joke. The punchline is that I know "Programming
                  Language."<sup>2</sup>
                </p>
              </div>
              <button>READ MORE</button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
