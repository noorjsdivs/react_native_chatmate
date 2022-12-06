import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {profileImg} from '../assets/images';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Noor Mohammad</Text>
          <Image style={styles.profileImg} source={profileImg} />
        </View>
        <View style={styles.homeTab}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Group Requests', {name: 'grouprequests'})
            }
            style={styles.btn}>
            <Text style={styles.btnText}>Group Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Friend Request', {name: 'friendrequest'})
            }
            style={styles.btn}>
            <Text style={styles.btnText}>Friend Request</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Friends', {name: 'friends'})}
            style={styles.btn}>
            <Text style={styles.btnText}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('My Groups', {name: 'mygroups'})}
            style={styles.btn}>
            <Text style={styles.btnText}>My Group</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Users</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Blocked', {name: 'blocked'})}
            style={styles.btn}>
            <Text style={styles.btnText}>Blocked</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#11175D',
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25.4,
    color: '#11175D',
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  homeTab: {
    width: '100%',
    height: '100%',
    padding: 6,
    paddingTop: 60,
  },
  btn: {
    backgroundColor: '#5F35F5',
    width: '100%',
    borderRadius: 86,
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 18,
  },
  btnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});

export default Home;
