import moxios from 'moxios'
import {testStore} from '../../utils'
import {fetchPosts} from '../actions'

describe('fetchPost action', ()=> {
    beforeEach(()=> {
        // install so whenever we hit acios it will update library instead of actually making a request, it just uses moxios instead of axios
        moxios.install()
    })
    afterEach(()=> {
        // install so whenever we hit acios it will update library instead of actually making a request, it just uses moxios instead of axios
        moxios.uninstall()
    })

    test('store is updated correctly', ()=> {
        const expectedState = [{
            title: 'expected title 1',
            body: 'some text'
        },{
            title: 'expected title 2',
            body: 'some text'
        },{
            title: 'expected title 3',
            body: 'some text'
        }]
        const store = testStore();
        
        moxios.wait(()=> {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPosts())
        .then(()=> {
            const newState = store.getState()
            expect(newState.posts).toBe(expectedState)
        })
    })
})