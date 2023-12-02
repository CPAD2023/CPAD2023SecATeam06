import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
    Text,
    TextInput,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import style from '../styles/homeScreenStyles';
import Card from '../cards/Card';
import hotels from '../../consts/hotels';

const HotelListScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <View style={style.header}>
                <Icon
                    name="arrow-back-ios"
                    size={28}
                    color={COLORS.grey}
                    onPress={navigation.goBack}
                />
                <Icon name="more-vert" size={28} color={COLORS.white} />
            </View>
            <View
                style={{
                    backgroundColor: COLORS.primary,
                    height: 120,
                    paddingHorizontal: 20,
                }}>
                <View style={{ flex: 1 }}>
                    <View style={style.inputContainer}>
                        <Icon name="search" size={28} />
                        <TextInput
                            placeholder="Search hotel"
                            style={{ color: COLORS.grey }}
                        />
                    </View>
                </View>
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 20,
                justifyContent: 'space-between'
            }}>
                <Text style={style.sectionTitle} paddingTop={30}>Nearby Hotels</Text>
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20}}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={hotels}
                    renderItem={({ item }) => <Card place={item} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default HotelListScreen;
