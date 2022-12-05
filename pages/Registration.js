import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started with easily register</Text>
      <Text style={styles.subTitle}>Free register and you can enjoy it</Text>
      <View style={styles.inputForm}>
        <TextInput style={styles.inputBox} placeholder="Full Name" />
        <TextInput style={styles.inputBox} placeholder="Email Address" />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('login', {name: 'login'})}
          style={styles.btn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 34.4,
    width: '100%',
    color: '#11175D',
    lineHeight: 40,
  },
  subTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20.64,
    width: '100%',
    color: '#11175D',
    marginTop: 5,
    marginBottom: 40,
  },
  inputForm: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    backgroundColor: '#EEF6FC',
    borderRadius: 18,
    height: 38,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#5F35F5',
    width: '100%',
    borderRadius: 86,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Roboto-SemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Registration;
