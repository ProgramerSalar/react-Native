import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'


// saga 
import createSagaMiddleware from 'redux-saga'
import { sagaData } from './saga'




const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer:rootReducer,
    middleware:()=> [sagaMiddleware]
})


sagaMiddleware.run(sagaData)