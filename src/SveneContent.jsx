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
        <div className="flex flex-col">
          <Introduction className="scroll-m-6 snap-center snap-always" />
        </div>
      </div>
    ); 
  }
}
