import React from 'react'
import {shallow} from 'enzyme'
import Headline from './index'
import { findByTestAtrr, checkProps } from '../../../utils'


const setUp = (props={})=> {
    //using spread operator to map through props
    const component = shallow(<Headline {...props}/>)
    return component;
}

describe('headline Component', ()=> {
describe('Checking Prop Types', ()=>{
    it('should not throw warning', ()=> {
        const expectedProps = {
            header: 'Test Header',
            desc: 'Test Desc',
            tempArr: [{
                fName: "testfname",
                lName: 'testlName',
                email: 'test email',
                age: 74,
                onlineStatus: false
            }]
        }
        // everything we need to pass into checkPropTypes to make sure we are testing correctly
        //brought in check props from util
       const propsErr = checkProps(Headline, expectedProps)
       expect(propsErr).toBeUndefined()
    })
})

    
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