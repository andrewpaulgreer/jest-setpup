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

    //checking if state is updating via funciton we made in app
    it ('exampleMethod_shouldUpdate Method should update state as expected', ()=> {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true)
    })

    it ('exampleMethod_returnsValue should return value as expecter', ()=> {
        const classInstance = wrapper.instance();
        const newValue = classInstance.exampleMethod_returnsValue(6);
        //should be 8 since we are addding 2 in funciton
        expect(newValue).toBe(8)
        
    })

})