import React from 'react';
import {shallow} from 'enzyme'
import { findByTestAtrr, checkProps } from './../../../utils'
import SharedButton from './button'

describe( 'SharedButton Component', ()=>{
    describe('checking prop types', ()=> {
        it ('should NOT throw a warning', ()=> {
            const expectedProps = {
                buttonText: 'Example button text',
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
    beforeEach(()=> {
        const props = {
            buttonText: 'Example button text',
            emitEvent: ()=> {

                }
        }
        wrapper = shallow(<SharedButton {...props}/>)
    })
    it('should render a button', ()=> {
        const button = findByTestAtrr(wrapper, 'buttonComponent')
        //make assertion
        expect(button.length).toBe(1)
    })
})