import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {profileImg} from '../assets/images';

const Block = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Blocked</Text>
        </View>
        <View style={styles.homeTab}>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.homeTabContainer}>
            <Image style={styles.homeTabImg} source={profileImg} />
            <Text style={styles.homeTabTitle}>Unknown</Text>
            <TouchableOpacity style={styles.homeTabBtn}>
              <Text style={styles.homeTabBtnText}>Unblock</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'center',
    borderColor: '#11175D',
    borderBottomWidth: 2,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25.4,
    color: '#11175D',
  },
  homeTab: {
    width: '100%',
    height: '100%',
    padding: 6,
    paddingTop: 30,
    display: 'flex',
    marginTop: 10,
  },
  homeTabContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#11175D',
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 15,
  },
  homeTabImg: {
    width: 50,
    height: 50,
  },
  homeTabTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  homeTabBtn: {
    padding: 5,
    backgroundColor: '#5F35F5',
    borderRadius: 5,
  },
  homeTabBtnText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
    marginTop: -2,
  },
});
export default Block;
