import { Component } from 'react'

export class ContentAbout extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-36">
              <h1>AIDRE CABRERA</h1>
            </div>
            <div className="text-left w-36">
            <h1>A humble exploring aspirant, who loves to write and program.</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-36">
              <h1>LOCATION</h1>
            </div>
            <div className="text-left w-36">
            <h1>6.7575° N, 125.3524° E</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-36">
              <h1>COLLEGE</h1>
            </div>
            <div className="text-left w-36">
            <h1>Mapúa Malayan Colleges Mindanao</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5">
            <div className="text-right w-36">
              <h1>PROGRAM</h1>
            </div>
            <div className="text-left w-36">
            <h1>BS Computer Science</h1>
            </div>
          </div>
      </div>
    )
  }
}

export default ContentAbout