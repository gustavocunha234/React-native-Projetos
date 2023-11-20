
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import store from './store';
import { NativeBaseProvider } from 'native-base';


const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};



const App = () => {

  return (
    <NativeBaseProvider config={config}>
    <Provider store={store}>
      <GlobalModal />
      <Navigation />
    </Provider>
 </NativeBaseProvider>
  );
};




export default App;
