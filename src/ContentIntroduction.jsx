import { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="flex flex-col justify-center h-screen w-screen p-5 gap-5 text-sm">
          {/* <h3 className="font-brico font-normal text-center text-2xl text-gray-500">
            I am <span className=" text-white">Aidre Cabrera</span>, a humble exploring aspirant, who loves to write and program.
          </h3> */}
          <h1 className="text-7xl text-center font-extrabold">svenefolio</h1>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-48">
              <h1>AIDRE CABRERA</h1>
            </div>
            <div className="text-left w-48">
            <h1>A humble exploring aspirant, who loves to write and program.</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-48">
              <h1>LOCATION</h1>
            </div>
            <div className="text-left w-48">
            <h1>Philippines, Digos City</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-48">
              <h1>PROGRAM</h1>
            </div>
            <div className="text-left w-48">
            <h1>BS Computer Science</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-48">
              <h1>COLLEGE</h1>
            </div>
            <div className="text-left w-48">
            <h1>Mapúa Malayan Colleges Mindanao</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
