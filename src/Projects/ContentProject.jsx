import { Component } from 'react';
import ContentProjectBlock from './ContentProjectBlock';

export class ContentProject extends Component {
  render() {
    return (
      <div className='bg-black'>
        <div className="">
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h1 className="font-medium font-brico text-2xl text-center">
                projects
              </h1>
              <div className='showcase'>
                <ContentProjectBlock/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentProject