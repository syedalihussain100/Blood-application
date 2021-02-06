import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardScreen from '../screens/OnboardScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
function AuthStack() {
  const [firstlaunch, setFirstlaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstlaunch(true);
      } else {
        setFirstlaunch(false);
      }
    });
  }, []);

  if (firstlaunch === null) {
    return null;
  } else if (firstlaunch === true) {
    routeName = 'OnboardScreen';
  } else {
    routeName = 'LoginScreen';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboard"
        component={OnboardScreen}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('LoginScreen')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
