import { Component } from 'react';
import ContentWriteupsBlocks from './ContentWriteupsBlocks';

export class ContenWriteups extends Component {
  render() {
    return (
      <div>
        <div className="h-screen ">
          <div className="p-5 flex flex-col h-screen justify-between">
            <div>
              <h1 className="font-semibold font-brico tracking-widest text-2xl text-center">
                OUTPUTS
              </h1>
              <div className='showcase'>
                <ContentWriteupsBlocks/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContenWriteups