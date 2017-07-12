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
  });
  it('should have class called comment_box ', ()=>{
    expect(component).to.have.class('comment_box');
  });

  describe('entering some text', ()=>{
    //top beforeEach, nested For each, run before each it block.
      beforeEach(()=>{
        component.find('textarea').simulate('change', 'new comment');

        /// simulating a change event.
      });

      it('shows that text in the textarea', ()=>{
        expect(component.find('textarea')).to.have.value('new comment');
      });

      it('when submitted, clears the input', ()=>{
        component.simulate('submit');
        expect(component.find('textarea')).to.have.value('');
      });
  });


});
