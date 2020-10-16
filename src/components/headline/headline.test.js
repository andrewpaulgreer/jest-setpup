import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'
import { findByTestAtrr } from '../../../utils'

const setUp = (props={})=> {
    //using spread operator to map through props
    const component = shallow(<Headline {...props}/>)
    return component;
}

describe('headline Component', ()=> {
    
    describe('Have props', ()=> {
        let wrapper;
        beforeEach(()=> {
            
            //create props obj
            const props = {
               header: 'test Header',
               desc: "Test Desc"
            }
            wrapper = setUp(props)
        });

        it ('should render without errors', ()=> {
           const component = findByTestAtrr(wrapper, 'HeadlineComponent')
           expect(component.length).toBe(1)
        })

        it ('should render h1', ()=> {
            const h1 = findByTestAtrr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
        it ('should render a descreption', ()=> {
            const description = findByTestAtrr(wrapper, 'desc')
            expect(description.length).toBe(1)
        })
    })
    describe('Has NO props', ()=> {
        let wrapper;
        beforeEach(()=> {
            wrapper = setUp()
        })
        it('should not render', ()=> {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)

        })
    })
})