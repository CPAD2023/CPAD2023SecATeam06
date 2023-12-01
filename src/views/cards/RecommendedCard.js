import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import style from '../styles/homeScreenStyles';

const RecommendedCard = ({ places }) => {
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to display the next place
      setCurrentPlaceIndex((prevIndex) => (prevIndex + 1) % places.length);
    }, 4000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [places]);

  const currentPlace = places[currentPlaceIndex];

  return (
    <ImageBackground style={style.rmCardImage} source={{ uri: currentPlace.image }}>
      <Text
        style={{
          color: COLORS.dark,
          fontSize: 22,
          fontWeight: 'bold',
          marginTop: 10
        }}>
        {currentPlace.name}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => Linking.openURL(currentPlace.location)}>
                <Icon name="place" size={22} color={COLORS.white} />
            </TouchableOpacity></View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={22} color={COLORS.white} />
            <Text style={{ marginLeft: 5, color: COLORS.white }}>{currentPlace.rating}</Text>
          </View>
        </View>
        <Text style={{ color: COLORS.white, fontSize: 13 }}>{currentPlace.review}</Text>
      </View>
    </ImageBackground>
  );
};

export default RecommendedCard;