import { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div className="pt-5 pb-5">
        <div className="flex flex-col">
          <h1 className="font-league text-8xl text-center leading-none">
            SVENEFOLIO
          </h1>
          <h3 className="font-inter font-light text-xs pl-6">
            A Humble Aspirant, Writer, Programmer, and a CS Student.
          </h3>
        </div>
      </div>
    );
  }
}
