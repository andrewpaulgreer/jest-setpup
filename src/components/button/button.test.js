import React from 'react';
import {shallow} from 'enzyme'
import { findByTestAtrr, checkProps } from './../../../utils'
import SharedButton from './button'

describe( 'SharedButton Component', ()=>{
    describe('checking prop types', ()=> {
        it ('should NOT throw a warning', ()=> {
            const expectedProps = {
                buttonText: 'Example button text',
                //simulating an event with enzyme
                emitEvent: ()=> {

                }
            };
            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBe(undefined)
        })
    })
})

describe('renders', ()=> {
    
    let wrapper;
    let mockFunc;
    beforeEach(()=> {
        mockFunc = jest.fn()
        const props = {
            buttonText: 'Example button text',
            emitEvent: mockFunc
        }
        wrapper = shallow(<SharedButton {...props}/>)
    })
    it('should render a button', ()=> {
        const button = findByTestAtrr(wrapper, 'buttonComponent')
        //make assertion
        expect(button.length).toBe(1)
    })
// simulating click
    it('should emit callback on click event', ()=> {
        const button = findByTestAtrr(wrapper, 'buttonComponent')
        button.simulate('click')
        const callback = mockFunc.mock.calls.length
        expect(callback).toBe(1)

    })
})