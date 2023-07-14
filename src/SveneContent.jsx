import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import ContentWho from "./ContentWho";
import ContentWhat from "./ContentWhat.jsx";
import ContentWhen from "./ContentWhen.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="bg-slate-950 snap-y snap-mandatory">
        <div className="flex flex-col">
          <Introduction className="scroll-m-6 snap-center snap-always" />
          <ContentWho className="scroll-m-6 snap-center snap-always" />
          <ContentWhat className="scroll-m-6 snap-center snap-always" />
          <ContentWhen />
        </div>
      </div>
    );
  }
}
