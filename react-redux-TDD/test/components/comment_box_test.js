import {renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(CommentBox);
  });

  it('has a textarea', ()=>{
    expect(component.find('textarea')).to.exist;
  });

  it('should have a button', ()=>{
    expect(component.find('button')).to.exist;
  })
  it('should have class called comment_box ', ()=>{
    expect(component).to.have.class('comment_box');
  })

});
