import { Component } from 'react';
import ContentWriteBlocks from './ContentWriteBlocks';

export class ContentWrite extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="p-5 flex flex-col justify-between">
            <div>
              <h1 className="font-medium font-brico text-2xl text-center">
                writes
              </h1>
              <div className='showcase'>
                <ContentWriteBlocks/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentWrite