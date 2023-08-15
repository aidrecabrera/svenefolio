import { Component } from "react";
export default class Introduction extends Component {
  render() {
    return (
      <div className=" -mt-20 md:-mt-20">
        <div className=" duration-75 ease-in-out flex flex-col justify-center items-center w-screen h-screen xl:leading-none">
        <img src="src/tux.png" className="p-5 pt-20 w-52"/>
          <h3 className="duration-75 ease-in-out font-brico font-normal text-center text-2xl w-4/5 lg:text-5xl md:w-2/3 md:text-5xl lg:w-3/4 xl:text-7xl xl:w-5/6 2xl:text-8xl text-gray-500">
            I am <span className=" text-white ">Aidre "Svene" Cabrera</span>, a humble ever-exploring aspirant, who loves to write and program.
          </h3>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
