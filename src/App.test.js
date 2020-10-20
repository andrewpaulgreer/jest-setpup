import App from './App'
import {shallow} from 'enzyme'
import {findByTestAtrr, testStore} from './../utils'
import React from 'react'

const setUp = (initialState={})=> {
    const store = testStore(initialState)
    // accessing mock store, like this with version 7 of react-redux
    const wrapper = shallow(<App store={store}/>).childAt(0).dive()
    console.log(wrapper.debug())
    return wrapper
}

describe('App Component', ()=> {

    let wrapper;
    beforeEach(()=> {
        const initialState= {
            posts: [{
                title: 'example test',
                body: 'some text'
            },
            {
                title: 'example test 2',
                body: 'some text'
            },
            {
                title: 'example test 3',
                body: 'some text'
            }]
        }
        wrapper = setUp(initialState)
    })
    it ('should render without errors', ()=> {
        const component = findByTestAtrr(wrapper, 'appComponent')
        expect(component.length).toBe(1);
    })

})