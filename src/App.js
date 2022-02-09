import { Provider } from 'react-redux';
import { store } from './store';

import Navigation from './routes/Navigation';


function App() {
  return (
    <Provider store={store} >
      <Navigation />
    </Provider>

  );
}

export default App;
