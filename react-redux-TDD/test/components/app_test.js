import { renderComponent, expect } from '../test_helper';

import App from '../../src/components/app';

describe('App', ()=>{
  //need to render component.
  //check if it exists to start off.
  let component; // set to undefined so it is initialized ahead of time
  beforeEach(()=>{
    // cant declare variable here because it would only be available in this function's scope.
    component = renderComponent(App);
  });

  it('exists', ()=>{
    expect(component).to.exist;
    console.log('component*** ', component);
  });
  it('has the correct text', ()=>{
    expect(component).to.contain('some text');
  });
  it('shows a comment box', ()=>{
    expect(component.find('.comment_box')).to.exist;
  });
  it('shows a comment list', ()=>{
    expect(component.find('.comment_list')).to.exist;
  })

})
