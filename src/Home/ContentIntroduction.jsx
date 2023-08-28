/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
export default class Introduction extends Component {
  render() {
    return (
      <div className=" -mt-20 md:-mt-20 inset-0">
        <div className="flex items-center w-screen h-screen xl:leading-none">
          <div>
            <h1 className=" z-10 pl-32 inherit  text-left text-10xl font-thin font-darker">
              <span className="duration-500 ease-in-out hover:font-bold ">
                WELCOME,
              </span>
              <br />
              <span className=" duration-500 ease-in-out hover:font-bold ">
                THIS
              </span>{" "}
              <span className=" duration-500 ease-in-out hover:font-bold ">
                IS
              </span>{" "}
              <span className=" duration-500 ease-in-out hover:font-bold hover:text-red-600 ">
                SVENE.
              </span>
            </h1>
          </div>
          <div className="star absolute right-5"></div>
          {/* <OverlayGrain/> */}
        </div>
      </div>
    );
  }
}
