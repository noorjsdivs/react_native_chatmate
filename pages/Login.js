import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import googleImg from '../assets/images/google.png';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account!</Text>
      <Text style={styles.subTitle}>Free register and you can enjoy it</Text>
      <View style={styles.google}>
        <Image source={googleImg} />
        <Text style={styles.googleText}>Login with Google</Text>
      </View>
      <View style={styles.inputForm}>
        <TextInput style={styles.inputBox} placeholder="Full Name" />
        <TextInput style={styles.inputBox} placeholder="Email Address" />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('registration', {name: 'registration'})
          }
          style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
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
    fontFamily: 'Roboto-SemiBold',
    fontSize: 20,
    width: '100%',
    color: '#11175D',
    marginTop: 5,
    marginBottom: 40,
  },
  google: {
    width: '100%',
    marginBottom: 20,
    width: 220,
    height: 65,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#03014C',
    borderRadius: 10,
  },
  googleText: {
    fontFamily: 'Roboto-semiBold',
    fontSize: 15,
    marginLeft: 10,
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

export default Login;
