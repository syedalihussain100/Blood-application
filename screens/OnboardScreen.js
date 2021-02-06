import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import {View,Text,Button,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native';


const Dot = ({selected}) =>{
    let backgroundColor;
    backgroundColor = selected ?  'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.2)'
    return(
        <View
        style={{
            width: 3,
            height: 3,
            marginHorizontal: 4,
            backgroundColor
        }}
        />
    )
}

const skip = ({...props}) =>(
    <Button
    title="Skip"
    color="red"
    {...props}
    />
)

const Next = ({...props}) =>(
    <Button
    title="Next"
    color="red"
    {...props}
    />
)

const Done = ({...props}) =>(
    <TouchableOpacity
    style={{marginHorizontal: 10, backgroundColor: 'red', padding: 8, borderRadius: 13}}
    {...props}
    >
        <Text style={{fontSize: 16,color: "#fff", fontWeight: 'bold'}}>Done</Text>
    </TouchableOpacity>
)
function OnboardScreen({navigation}) {
    return (
        <Onboarding
        SkipButtonComponent={skip}
        NextButtonComponent={Next}
        DoneButtonComponent ={Done}
        DotComponent ={Dot}
        onSkip={()=> navigation.navigate("LoginScreen")}
        onDone={()=> navigation.navigate("LoginScreen")}
        pages={[
          {
            backgroundColor: '#dc143c',
            image: <ImageBackground source={require('../images/one.jpg')} style={styles.Image}/>,
            title: <Text style={styles.title}>Blood testing</Text>,
            subtitle: 'Giving blood can reveal potential health problems. ...',
          },
          {
            backgroundColor: 'red',
            image: <ImageBackground source={require('../images/blood2.jpg')} style={styles.Image}/>,
            title: <Text style={styles.title}>Donor safety</Text>,
            subtitle: 'Giving blood may lower your risk of suffering a heart attack. ...',
          },
          {
            backgroundColor: '#dc143c',
            image: <ImageBackground source={require('../images/blood1.jpg')} style={styles.Image}/>,
            title: <Text style={styles.title}>Blood Application</Text>,
            subtitle: 'Giving blood may reduce your risk of developing cancer. ...',
          },
        ]}
      />
    )
}

const styles = StyleSheet.create({
    Image:{
    height: 250,
    width: '100%',
      
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: "#fff",
        textTransform: 'uppercase',
        top: -20,
        fontFamily: 'sans-serif-thin',
        textAlign: 'center',
    }
})

export default OnboardScreen
