import { Component } from "react";
import MyFields from "./MyFields.jsx";

export default class ContentWho extends Component {
  render() {
    return (
      <div>
        <div className="p-6 pt-0 pb-10">
          <div>
            <h1 className="font-bold font-league text-8xl leading-none">01.</h1>
            <h1 className="font-semibold font-inter tracking-widest text-xs pb-5">
              VAGUELY, WHO AM I?
            </h1>
            <MyFields />
          </div>
        </div>
      </div>
    );
  }
}
