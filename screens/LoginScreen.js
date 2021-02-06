import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import FormInput from '../Components/FormInput';
import FormButton from '../Components/FormButton';
import SocialButton from '../Components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo1.png')} style={styles.logo} />
      <Text style={styles.text}>Blood Authentication</Text>
      <FormInput
        LabelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        LabelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('Red Zone')}>
        <Text style={styles.navButtonText}>Forget Password</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Have an account Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 25,
    marginBottom: 10,
    color: '#051d5f',
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});

// import React,{useState,useContext} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity,Image,ScrollView, Button} from 'react-native';
// import FormInput from "../Components/FormInput";
// import FormButton from "../Components/FormButton";
// import SocialButton from "../Components/SocialButton";

// function LoginScreen(navigation) {
// const [email,setEmail] = useState();
// const [password,setPassword] = useState();
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//     <Image
//       source={require('../images/logo1.png')}
//       style={styles.logo}
//     />
//     <Text style={styles.text}>Blood Authentication</Text>

//     <FormInput
//       labelValue={email}
//       onChangeText={(userEmail) => setEmail(userEmail)}
//       placeholderText="Email"
//       keyboardType="email-address"
//       autoCapitalize="none"
//       autoCorrect={false}
//       iconType="email"

//     />

//     <FormInput
//       labelValue={password}
//       onChangeText={(userPassword) => setPassword(userPassword)}
//       placeholderText="Password"
//       iconType="email"
//       secureTextEntry={true}
//     />

//     <FormButton
//       buttonTitle="Sign In"
//       onPress={() => login(email, password)}
//     />

//     <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
//       <Text style={styles.navButtonText}>Forgot Password?</Text>
//     </TouchableOpacity>

//     {Platform.OS === 'android' ? (
//       <View>
//         <SocialButton
//           buttonTitle="Sign In with Facebook"
//           btnType="facebook"
//           color="#4867aa"
//           backgroundColor="#e6eaf4"
//         />

//         <SocialButton
//           buttonTitle="Sign In with Google"
//           btnType="google"
//           color="#de4d41"
//           backgroundColor="#f5e7ea"
//         />
//       </View>
//     ) : null}

//     <TouchableOpacity
//       style={styles.forgotButton}
//       onPress={() => navigation.navigate('Signup')}>
//       <Text style={styles.navButtonText}>
//         Don't have an acount? Create here
//       </Text>
//     </TouchableOpacity>
//   </ScrollView>
//   );
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 20,
//       paddingTop: 40,
//       backgroundColor: "#fff",
//     },
//     logo: {
//       height: 70,
//       width: 70,
//       resizeMode: 'cover',
//     },
//     text: {
//       fontFamily: 'Kufam-SemiBoldItalic',
//       fontSize: 25,
//       marginBottom: 10,
//       color: '#051d5f',
//       fontWeight: 'bold',
//     },
//     navButton: {
//       marginTop: 15,
//     },
//     forgotButton: {
//       marginVertical: 35,
//     },
//     navButtonText: {
//       fontSize: 18,
//       fontWeight: '500',
//       color: '#2e64e5',
//       fontFamily: 'Lato-Regular',
//     },
//   });
