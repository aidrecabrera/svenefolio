import React, { Component } from "react";

export class OverlayGrain extends Component {
  render() {
    return (
      <div className="absolute inset-0 bg-[url(./src/assets/noise.svg)] opacity-30 brightness-100 contrast-50"></div>
    );
  }
}

export default OverlayGrain;
