import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import ContentWho from "./ContentWho";
import ContentWhat from "./ContentWhat.jsx";
import ContentWhen from "./ContentWhen.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="bg-slate-950">
        <div className="flex flex-col snap-y snap-proximity">
          <Introduction className="snap-start scroll-m-6" />
          <ContentWho className="snap-start scroll-m-6" />
          <ContentWhat className="snap-start scroll-m-6" />
          <ContentWhen className="snap-start  snap-always" />
        </div>
      </div>
    );
  }
}
