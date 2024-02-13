import Auth from './Pages/Auth';
import { useState } from 'react';
import AppContext from './AppContext';
import Loading from './Pages/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); //Stack Management

const App = () => {

  const [loading, setLoading] = useState(false) //Loader Context

  const contextObj = {
    loading,
    setLoading
  }

  return (
    <AppContext.Provider value={contextObj} >
      {/* <ImageBackground style={tw`absolute h-full w-full border z-90`} source={image} resizeMode="cover"> */}
      
      {/* {!loading && <Auth />}
        {loading && <Loading />} */}
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Login"
            component={Auth}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </ImageBackground> */}
    </AppContext.Provider>
  );

}

export default App

