import { Component } from "react";

export default class ContentWhen extends Component {
  render() {
    return (
      <div>
        <div className="p-12 flex flex-col h-screen justify-between">
          <div className="pb-5">
            <h1 className="font-bold font-league text-12xl leading-none">
              03.
            </h1>
            <h1 className="text-wrapper font-semibold font-inter tracking-widest">
              WHEN WAS THE EARLIEST EXPERIENCE AND WHERE IT STARTED?
            </h1>
          </div>
          <div className="flex flex-row-reverse">
            <p className="w-11/12 font-inter text-xl leading-tight tracking-tighter text-right">
              It started when I was in 2nd grade. I tried to replicated my moms
              website with the help of Khan Academy courses. Since then, it was
              the genesis of my journey to find my true passion and potential.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
