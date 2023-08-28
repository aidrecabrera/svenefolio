import { Component } from "react";
import myVideo from "../assets/videos/fxvid.mp4";
export class BriefDiscretion extends Component {
  render() {
    return (
      <>
        <div className="grid grid-cols-3">
          <div className="border-b -z-10 inset-0 justify-center align-center">
            <div className="video-container">
              <video
                autoPlay
                muted
                loop
                id="video"
                className=" bg-cover"
                controls={false}
                width="100%"
                height="100%"
              >
                <source src={myVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="font-darker col-span-2 p-10 pt-32 text-left border-b border-l">
            <h1 className="text-9xl font-thin">CURRENT STATUS</h1>
            <p className="text-5xl pr-72 font-extralight uppercase">
              I find myself in a phase of exploration, uncertainty, exploration,
              and discovery.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default BriefDiscretion;
