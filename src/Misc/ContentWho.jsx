import { Component } from "react";
import MyFields from "./MyFields.jsx";

export default class ContentWho extends Component {
  render() {
    return (
      <div>
        <div className="h-screen">
          <div className="p-12 flex flex-col h-screen justify-between">
            <div>
              <h1 className="font-bold font-league text-12xl leading-none">
                01.
              </h1>
              <h1 className="font-semibold font-inter tracking-widest text-base pb-5">
                WHO AM I?
              </h1>
            </div>
            {/* <MyFields /> */}
            <p className="font-inter font-normal text-right text-xl tracking-tight ">
              I am an autodidact with a passion in fields such as
              <span className="">
                <br />
                technology, research, writing, and computer science.
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
