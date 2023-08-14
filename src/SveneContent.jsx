import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import ContentWho from "./ContentWho";
import ContentWhat from "./ContentWhat.jsx";
import ContentWhen from "./ContentWhen.jsx";
import ContentWrite from "./Writeups/ContentWrite.jsx";
import ContentProject from "./Projects/ContentProject.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="snap-y snap-mandatory">
      <h1 className="p-3 mx-auto inset-x-0 text-center font-black text-xl bg-gradient-to-b from-black to-transparent">SVENE</h1>
        <div className="flex flex-col">
          <Introduction className="scroll-m-6 snap-center snap-always" />
          <ContentWrite className="scroll-m-6 snap-center snap-always" />
          <ContentProject className="scroll-m-6 snap-center snap-always" />
          <ContentWho className="scroll-m-6 snap-center snap-always" />
          <ContentWhat className="scroll-m-6 snap-center snap-always" />
          <ContentWhen />
        </div>
      </div>
    ); 
  }
}
