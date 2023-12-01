import React, { useEffect, useState } from 'react';
import { fetchDataForTable } from '../../../backend/api';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	View,
	Text,
	TextInput,
	ImageBackground,
	FlatList,
	Dimensions,
	TouchableOpacity,
	Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
// import places from '../../consts/places';
import countries from '../../consts/countries';
import style from '../styles/homeScreenStyles';
import RecommendedCard from '../cards/RecommendedCard';

const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
	const [places, setPlaces] = useState([]);
	// const [countries, setCountries] = useState([]);
	// const [loading, setLoading] = useState(true);

  useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const places = await fetchDataForTable('places');
				setPlaces(places);
			} catch (error) {
				console.log(error);
			}
		};
    fetchPlaces();
  }, []); 

	const categoryIcons = [
		<Icon name="flight" size={35} color={COLORS.primary} />,
		<Icon name="hotel" size={35} color={COLORS.primary} />,
		<Icon name="near-me" size={35} color={COLORS.primary} />,
		<Icon name="place" size={35} color={COLORS.primary} />,
	];
	const ListCategories = () => {
		return (
			<View style={style.categoryContainer}>
				{categoryIcons.map((icon, index) => (
					<View key={index} style={style.iconContainer}>
						{icon}
					</View>
				))}
			</View>
		);
	};

	const Card = ({place}) => {
		return (
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => navigation.navigate('DetailsScreen', place)}>
				<ImageBackground style={style.cardImage} source={{ uri: place.image }}>
					<Text
						style={{
							color: COLORS.dark,
							fontSize: 20,
							fontWeight: 'bold',
							marginTop: 10,
						}}>
						{place.name}
					</Text>
					<View
						style={{
							flex: 1,
							justifyContent: 'space-between',
							flexDirection: 'row',
							alignItems: 'flex-end',
						}}>
						<View style={{flexDirection: 'row'}}>
						<TouchableOpacity activeOpacity={0.8}
							onPress={() => Linking.openURL(place.location)}>
							<Icon name="place" size={20} color={COLORS.white} />
						</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row'}}>
							<Icon name="star" size={20} color={COLORS.white} />
							<Text style={{marginLeft: 5, color: COLORS.white}}>{place.rating}</Text>
						</View>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
			<StatusBar translucent={false} backgroundColor={COLORS.primary} />
			<View style={style.header}>
				<Icon name="sort" size={28} color={COLORS.white} />
				<Icon name="notifications-none" size={28} color={COLORS.white} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						backgroundColor: COLORS.primary,
						height: 120,
						paddingHorizontal: 20,
					}}>
					<View style={{flex: 1}}>
						<Text style={style.headerTitle}>Explore the</Text>
						<Text style={style.headerTitle}>beautiful places</Text>
						<View style={style.inputContainer}>
							<Icon name="search" size={28} />
							<TextInput
								placeholder="Search place"
								style={{color: COLORS.grey}}
							/>
						</View>
					</View>
				</View>
				<ListCategories />
				<View>
					<Text style={style.sectionTitle}>Refreshing Venues</Text>
					<FlatList
						contentContainerStyle={{paddingLeft: 20}}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={places}
						renderItem={() => <RecommendedCard places={places} />}
					/>	
					
					<Text style={style.sectionTitle}>Destinations</Text>
					<FlatList
						contentContainerStyle={{paddingLeft: 20}}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={countries}
						renderItem={({item}) => <Card place={item} />}
					/>

					<Text style={style.sectionTitle}>Places</Text>
					<FlatList
						contentContainerStyle={{paddingLeft: 20}}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={places}
						renderItem={({item}) => <Card place={item} />}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
