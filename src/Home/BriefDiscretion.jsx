import React, { Component } from "react";

export class BriefDiscretion extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3 gap-4">
          <div className=""></div>
          <div className=" font-darker col-span-2 pt-60 pb-60 text-left">
            <h1 className="text-9xl font-thin">CURRENT STATUS</h1>
            <p className="text-5xl pr-72 font-extralight uppercase">
              I find myself in a phase of exploration, uncertainty, exploration,
              and discovery.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default BriefDiscretion;
