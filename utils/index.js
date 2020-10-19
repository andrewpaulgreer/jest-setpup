//adding in proptypes testing info
import checkPropTypes from 'check-prop-types'
import rootReducer from './../src/reducers'
import { middlewares } from './../src/createStore'
import{ createStore, applyMiddleware} from 'redux'




// adding in the wrappper to find by attribute
export const findByTestAtrr= (component, attr)=> {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper
}

// this is where we are moving out checkprops from headline
export const checkProps = (component, expectedProps)=> {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

// starting integration tests for a mock store in utils here

export const testStore = (initialState) => {
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
return createStoreWithMiddleware(rootReducer, initialState)
}