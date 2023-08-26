import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import BriefIntroduction from "./Home/BriefIntroduction.jsx";
import BriefDiscretion from "./Home/BriefDiscretion.jsx";
import OverlayGrain from "./Misc/OverlayGrain.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="snap-y snap-mandatory">
        <div className="flex flex-col">
          <Introduction className="scroll-m-6 snap-center snap-always" />
          <div className="h-screen">
            <BriefIntroduction />
            <BriefDiscretion />
          </div>
        </div>
        {/* <OverlayGrain className="pointer-events-none" /> */}
      </div>
    );
  }
}
