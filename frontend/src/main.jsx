import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import NicaWikiApp from './NicaWikiApp';
import 'animate.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<NicaWikiApp />
		</Provider>
	</BrowserRouter>,
);
