import { Component } from "react";
import Introduction from "./ContentIntroduction.jsx";
import ContentWho from "./ContentWho";
import ContentWhat from "./ContentWhat.jsx";

export default class SveneContent extends Component {
  render() {
    return (
      <div className="bg-slate-950 text-white">
        <Introduction />
        <hr className="ml-6 mr-6 mb-4" />
        <ContentWho />
        <ContentWhat />
      </div>
    );
  }
}
