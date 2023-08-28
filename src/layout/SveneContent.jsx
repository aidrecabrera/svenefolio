import { Component } from "react";
import Introduction from "../home/ContentIntroduction.jsx";
import BriefIntroduction from "../home/BriefIntroduction.jsx";
import BriefDiscretion from "../home/BriefDiscretion.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="scroll-m-6 snap-center snap-always">
          <Introduction />
        </div>
        <div className="scroll-container h-screen overflow-y-scroll snap-y-mandatory">
          <div className="item scroll-snap-align-center">
            <BriefIntroduction />
          </div>
          <div className="item scroll-snap-align-center">
            <BriefDiscretion />
          </div>
        </div>
      </div>
    );
  }
}
