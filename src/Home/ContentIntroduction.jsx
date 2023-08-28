/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import { motion } from "framer-motion";
import Circle from "../misc/circle.jsx";
export default class Introduction extends Component {
  render() {
    return (
      <div className=" -mt-20 md:-mt-20 inset-0">
        <div className="flex items-center w-screen h-screen xl:leading-none">
          <div>
            <h1 className=" z-10 pl-32 inherit  text-left text-10xl font-thin font-darker">
              WELCOME, SVENE.
            </h1>
          </div>
          <Circle className="star" />
          {/* <div className="star absolute right-5"></div> */}
          {/* <OverlayGrain/> */}
        </div>
      </div>
    );
  }
}
