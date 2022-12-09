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

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.title}>Noor Mohammad</Text>
          <Image style={styles.profileImg} source={profileImg} />
        </View>

        <View style={styles.homeTab}>
          {/* ================ Friend Chat start here ============== */}
          <View style={styles.homeTabFriendChat}>
            <View style={styles.friendText}>
              <Text style={styles.friendTextTitle}>How are you doing?</Text>
              <View style={styles.friendDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:02pm</Text>
          </View>
          {/* ================ Friend Chat end here ================ */}
          {/* ================ User Chat start here ================ */}
          <View style={styles.homeTabUserChat}>
            <View style={styles.userText}>
              <Text style={styles.userTextTitle}>Hello, I'm alright</Text>
              <View style={styles.userDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:12pm</Text>
          </View>
          {/* ================ User Chat end here ================== */}
          {/* ================ Friend Chat start here ============== */}
          <View style={styles.homeTabFriendChat}>
            <View style={styles.friendText}>
              <Text style={styles.friendTextTitle}>Are you coming here?</Text>
              <View style={styles.friendDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:02pm</Text>
          </View>
          {/* ================ Friend Chat end here ================ */}
          {/* ================ User Chat start here ================ */}
          <View style={styles.homeTabUserChat}>
            <View style={styles.userText}>
              <Text style={styles.userTextTitle}>Maybe</Text>
              <View style={styles.userDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:12pm</Text>
          </View>
          {/* ================ User Chat end here ================== */}
          {/* ================ Friend Chat start here ============== */}
          <View style={styles.homeTabFriendChat}>
            <View style={styles.friendText}>
              <Text style={styles.friendTextTitle}>Okay</Text>
              <View style={styles.friendDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:02pm</Text>
          </View>
          {/* ================ Friend Chat end here ================ */}
          {/* ================ User Chat start here ================ */}
          <View style={styles.homeTabUserChat}>
            <View style={styles.userText}>
              <Text style={styles.userTextTitle}>How are you doing?</Text>
              <View style={styles.userDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:12pm</Text>
          </View>
          {/* ================ User Chat end here ================== */}
          {/* ================ Friend Chat start here ============== */}
          <View style={styles.homeTabFriendChat}>
            <View style={styles.friendText}>
              <Text style={styles.friendTextTitle}>How are you doing?</Text>
              <View style={styles.friendDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:02pm</Text>
          </View>
          {/* ================ Friend Chat end here ================ */}
          {/* ================ User Chat start here ================ */}
          <View style={styles.homeTabUserChat}>
            <View style={styles.userText}>
              <Text style={styles.userTextTitle}>Hello, I'm alright</Text>
              <View style={styles.userDesign}></View>
            </View>
            <Text style={styles.friendTextDate}>Today, 2:12pm</Text>
          </View>
          {/* ================ User Chat end here ================== */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
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
    padding: 25,
    paddingTop: 20,
  },
  homeTabFriendChat: {
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    alignItems: 'flex-start',
  },
  friendText: {
    position: 'relative',
  },
  friendTextTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#11175D',
    borderRadius: 10,
    padding: 14,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F1F1F1',
    width: '80%',
  },
  friendTextDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'gray',
    marginTop: 8,
  },
  friendDesign: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    left: -15,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F1F1F1',
  },
  homeTabUserChat: {
    width: '100%',
    marginBottom: 5,
    display: 'flex',
    alignItems: 'flex-end',
  },
  userText: {
    position: 'relative',
  },
  userTextTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'white',
    borderRadius: 10,
    padding: 14,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#5F35F5',
    width: '80%',
  },
  userTextDate: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'gray',
    marginTop: 8,
  },
  userDesign: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 0,
    right: -15,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#5F35F5',
  },
});

export default Profile;
