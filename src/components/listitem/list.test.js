import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAtrr, checkProps}  from './../../../utils'
import ListItem from './list'

describe('ListItem component', ()=> {
    describe('checking prop types', ()=> {
        it ('should NOT throw a warning', ()=> {
            const expectedProps = {
                title: 'example title',
                desc: 'sample'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('component renders', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                title: 'example title',
                desc: 'sample'
            }
            wrapper = shallow( <ListItem {...props}/>)
        })
        it('should render without erros', ()=> {
            const component = findByTestAtrr(wrapper, 'listItemComponent')
            expect(component.length).toBe(1)
        })
        it ('should render title ', ()=> {
            const title = findByTestAtrr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })
        it ('should render desc ', ()=> {
            const desc = findByTestAtrr(wrapper, 'componentDesc')
            expect(desc.length).toBe(1)
        })

    } )

    // specifying when it should not render
    describe('should NOT render', ()=> {
        let wrapper;
        beforeEach(()=> {
            const props = {
                
                desc: 'sample'
            }
            wrapper = shallow( <ListItem {...props}/>)
        })
        it ('Component is not rendered', ()=> {
            const component = findByTestAtrr(wrapper, 'listItemComponent')
            expect(component.length).toBe(0)
        })
    })
})
