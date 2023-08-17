import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import ContentWho from "./ContentWho";
import ContentWhat from "./ContentWhat.jsx";
import ContentWhen from "./ContentWhen.jsx";
import ContentWrite from "./Writeups/ContentWrite.jsx";
import ContentProject from "./Projects/ContentProject.jsx";
import BackgroundEffect from "./Misc/BackgroundEffect"
import BackgroundGradient from "./Misc/BackgroundGradient.jsx"
import CursorOverlay from "./Misc/CursorOverlay.jsx"
import BackgroundTest from "./Misc/BackgroundTest.jsx";
export default class SveneContent extends Component {
  render() {
    return (
      <div className="snap-y snap-mandatory">
        <div className="flex flex-col">
          {/* <CursorOverlay/> */}
          <BackgroundEffect/>
          <BackgroundTest/>
          {/* <Introduction className="scroll-m-6 snap-center snap-always" />
          <ContentWhat/>
          <ContentWho/>
          <ContentWhen />
          <ContentWrite /> */}
        </div>
      </div>
    ); 
  }
}
