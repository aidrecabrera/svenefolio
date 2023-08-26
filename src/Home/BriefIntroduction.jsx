import React, { Component } from "react";

export class BriefIntroduction extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3 font-darker">
          <div className="border-t border-b p-10 hover:bg-white hover:text-black duration-300">
            <div className="flex flex-col justify-evenly content-evenly gap-20">
              <h1 className="header">STUDENT</h1>
              <div className="uppercase font-medium tracking-wider">
                <h1>BS Computer Science</h1>
                <h1>Mapúa Malayan Colleges Mindanao</h1>
                <h1>Sophomore</h1>
              </div>
            </div>
          </div>
          <div className="border-[0.1px] p-10 hover:bg-white hover:text-black duration-300">
            <div className="flex flex-col justify-evenly content-evenly gap-20">
              <h1 className="header">PROGRAMMER</h1>
              <div className="uppercase font-medium tracking-wider">
                <h1>Web Development</h1>
                <h1>Software Development</h1>
                <h1>Information Technology</h1>
              </div>
            </div>
          </div>
          <div className="border-t border-b p-10 hover:bg-white hover:text-black duration-300">
            <div className="flex flex-col justify-evenly content-evenly gap-20">
              <h1 className="header">WRITER</h1>
              <div className="uppercase font-medium tracking-wider">
                <h1>Blog Writing</h1>
                <h1>Academic Writing</h1>
                <h1>Writing Styles Exploration</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BriefIntroduction;
