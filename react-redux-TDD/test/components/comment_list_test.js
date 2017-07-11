import {renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', ()=>{
  let component;

  beforeEach(()=>{
    const props = {comments:['a','b','c']};
    component = renderComponent(CommentList, null, props);
  });

  it('shows a li for each comment', ()=>{
    expect(component.find('li').length).to.equal(3);
  });
  it('shows each comment provided ', () =>{
    expect(component).to.contain('a');
    expect(component).to.contain('b');
    expect(component).to.contain('c');
  });
});
