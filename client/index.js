import { Provider } from 'react-redux'
import reducer from './reducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './components/app'

//activation du devtools redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
))

export default () => (
	<div id="outer">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
)
