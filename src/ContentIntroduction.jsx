/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
export default class Introduction extends Component {
  render() {
    return (
      <div className=" -mt-20 md:-mt-20">
        <div className="flex items-center w-screen h-screen xl:leading-none">
          <h1 className=" pl-32 inherit  text-left text-10xl font-thin font-darker">
            <span className="duration-500 ease-in-out hover:font-bold tracking-wider">WELCOME,</span>
            <br />
            <span className=" duration-500 ease-in-out hover:font-bold hover:tracking-tight tracking-wider">THIS</span>{" "}
            <span className=" duration-500 ease-in-out hover:font-bold hover:tracking-tight tracking-wider">IS</span>{" "}
            <span className=" duration-500 ease-in-out hover:font-bold hover:text-red-600 hover:tracking-tight tracking-wider">SVENE.</span>
          </h1>
          <div className="star absolute right-5"></div>
        </div>
      </div>
    );
  }
}
