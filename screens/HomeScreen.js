import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Image,TextInput,TouchableOpacity} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

function HomeScreen() {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}> welcome Blood Donation</Text>
        <Text style={styles.text1}>
          A blood donation occurs when a person voluntarily has blood drawn and
          used for transfusions and/or made into biopharmaceutical medications
          by a process called fractionation (separation of whole-blood
          components). Donation may be of whole blood, or of specific components
          directly (the latter called apheresis). Blood banks often participate
          in the collection process as well as the procedures that follow it.
          🔥🔥🔥... Today in the developed world, most blood donors are unpaid
          volunteers who donate blood for a community supply. In some countries,
          established supplies are limited and donors usually give blood when
          family or friends need a transfusion (directed donation). Many donors
          donate for several reasons, such as a form of charity, general
          awareness regarding the demand for blood, increased confidence in
          oneself, helping a personal friend/relative, and social pressure.
          Despite the many reasons that people donate, not enough potential
        </Text>
        <Image
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            top: 25,
          }}
          source={require('../images/file2.jpg')}
        />
        <Text style={styles.Container2}>Types of donation</Text>
        <Text style={styles.text2}>
          Blood donations are divided into groups based on who will receive the
          collected blood.[2] An 'allogeneic' (also called 'homologous')
          donation is when a donor gives blood for storage at a blood bank for
          transfusion to an unknown recipient. A 'directed' donation is when a
          person, often a family member, donates blood for transfusion to a
          specific individual.[3] Directed donations are relatively rare when an
          established supply exists.[4] A 'replacement donor' donation is a
          hybrid of the two and is common in developing countries such as
          Ghana.[5] In this case, a friend or family member of the recipient
          donates blood to replace the stored blood used in a transfusion,
          ensuring a consistent supply. When a person has blood stored that will
          be transfused back to the donor at a later date, usually after
          surgery, that is called an 'autologous' donation.[6] Blood that is
          used to make medications can be made from allogeneic donations or from
          donations exclusively used for manufacturing.[7]
        </Text>
        
        <Text style={styles.Container2}>Blood testing</Text>
        <Image
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            top: 25,
          }}
          source={require('../images/file3.jpg')}
        />
            <Image
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            top: 25,
          }}
          source={require('../images/one.jpg')}
        />
            <Image
          style={{
            width: '100%',
            height: 180,
            resizeMode: 'cover',
            top: 25,
          }}
          source={require('../images/file1.jpg')}
        />
        <Text style={styles.registeration}>Blood Rgisteration</Text>
        <View style={styles.form}>
        <TextInput style={styles.form1} placeholder="Enter Your Name"/>
        <TextInput style={styles.form1} placeholder="Enter Your Requirements"/>
        <TextInput style={styles.form1} placeholder="Blood Name"/>
        </View>
        <View>
          <TouchableOpacity style={{padding: 30}}  onPress={() => logout()}>
            <Text style={{fontWeight: 'bold',color: 'red', fontSize: 23,position: 'absolute', right: 0,top: 20,marginRight: 15}}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
  },
  text: {
    fontSize: 23,
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 25,
    top: 5,
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Container2: {
    paddingTop: 40,
    marginLeft: 15,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
    textTransform: 'uppercase'
  },
  text2:{
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold',
    top: 12,
  },
  registeration:{
    paddingTop: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    textTransform: 'uppercase',
    color: 'red'
  },
  form:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    padding: 40,
    top: 20,
  },
  form1:{
    width: '100%',
    color: "#fff",
    borderBottomWidth: 1,
    fontWeight: 'bold'
  }  
});
