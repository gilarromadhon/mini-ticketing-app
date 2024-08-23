import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import EventScreen from './src/screens/event';
import { TouchableOpacity, Image } from 'react-native';
import QrScreen from './src/screens/qr';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Home of Event',
            headerTitleStyle: {
              fontFamily: 'ComicBookBold',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./src/assets/icons/back.png')} style={{ width: 8, height: 16, marginRight: 12 }} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Qr')}>
                <Image source={require('./src/assets/icons/qr.png')} style={{ width: 16, height: 16, marginRight: 5 }} />
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={({ navigation, route }) => ({
            title: route.params.titleName,
            headerTitleStyle: {
              fontFamily: 'ComicBookBold',
            },
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('./src/assets/icons/back.png')} style={{ width: 8, height: 16, marginRight: 12 }} />
              </TouchableOpacity>
            ),
          })} 
        />
        <Stack.Screen name="Qr" component={QrScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;