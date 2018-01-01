import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        store.replaceReducer(rootReducer,applyMiddleware(thunkMiddleware))
      })
    }
  }

  return store
}

export default configureStore
