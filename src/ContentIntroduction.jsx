import { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="flex flex-col justify-center h-screen w-screen p-5">
          <h3 className="font-brico font-normal text-center text-2xl text-gray-500">
            I am <span className=" text-white">Aidre Cabrera</span>, a humble exploring aspirant, who loves to write and program.
          </h3>
        </div>
      </div>
    );
  }
}
