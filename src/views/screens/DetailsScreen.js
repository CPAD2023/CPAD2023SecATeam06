import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import styles from '../styles/detailsScreenStyles';

const style = StyleSheet.create(styles);

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{flex: 0.7}} source={{ uri: place.image }}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.grey}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              { place.rating }
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity activeOpacity={0.8}
							onPress={() => Linking.openURL(place.location)}>
							<Icon name="place" size={28} color={COLORS.primary} />
					</TouchableOpacity>
          <Text style={{ marginTop: -15, padding:10, fontWeight: 'bold', fontSize: 20}}>
              Information <Icon name="info-outline" size={28} color={COLORS.primary} />
          </Text>
        </View>
        <Text
            style={{
              marginTop: 5,
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place.description}
          </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.review}</Text>
      </View>
      <View style={style.footer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            Rs. 2100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginLeft: 2,
            }}>
            /PER DAY
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{color: COLORS.primary, fontSize: 16, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
