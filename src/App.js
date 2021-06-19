import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import RootNavigation from './routes/Root';
import store from './redux/store';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import Theme from './context/Theme';



const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <FlashMessage position="top" canRegisterAsDefault />
      <StatusBar barStyle={'dark-content'} />
      {/* <Home /> */}
      <Provider store={store}>
        <Theme>
          <RootNavigation />
        </Theme>
      </Provider>
    </>
  );
};

export default App;