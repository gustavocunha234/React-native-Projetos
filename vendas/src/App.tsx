
import { SafeAreaView} from 'react-native';

import Login from './modules/login';
import store from './store';
import { Provider } from 'react-redux';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';



const App = () => {

  return (
    <Provider store={store}>
      <GlobalModal />
    <SafeAreaView>
      <Login />
    </SafeAreaView>
    </Provider>
    
  );
};



export default App;
