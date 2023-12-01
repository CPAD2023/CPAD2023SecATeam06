import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../../assets/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={{color: COLORS.white, fontSize: 45, fontWeight: 'bold'}}>
            Discover
          </Text>
          <Text style={{color: COLORS.white, fontSize: 45, fontWeight: 'bold'}}>
            world with us
          </Text>
          <Text style={{color: COLORS.white, fontSize: 17, lineHeight: 25, marginTop: 15}}>
          Explore the world with us - your gateway to endless adventures. 
          Discover cultures, embrace landscapes, and create memories.
          Your journey begins here, where every destination is a story waiting to be told. 
          Let's travel together.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={style.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardScreen;
