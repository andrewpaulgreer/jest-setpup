import { types } from './../../actions/types'
import postsReducer from './reducer'

describe('Posts Reducer', ()=> {
    it ('should return default state', ()=>{
        //passing in undefined and empty object since we dont have a state yet, 
        //and empty because the type doesnt match and should return an empty peiece of state
        const newState = postsReducer(undefined, {});
        //now we need to make an assertion so we will expect new state to equal an empty array
        expect(newState).toEqual([])
    })
    it('should return new state if recieving type', ()=>{
        const posts = [{title: 'Test1'},{title: 'Test2'},{title: 'Test3'}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})