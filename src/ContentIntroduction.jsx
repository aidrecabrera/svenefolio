import { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="bg-slate-900">
        <div className="flex flex-col justify-center h-screen w-screen">
          <h1 className="font-league text-8xl text-center leading-none">
            SVENEFOLIO
          </h1>
          <h3 className="font-inter font-light text-center text-xs">
            A Humble Aspirant, Writer, Programmer, and a CS Student.
          </h3>
        </div>
      </div>
    );
  }
}
