import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Linking
} from 'react-native';
import style from '../styles/homeScreenStyles';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Card = ({ place }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('DetailsScreen', place)}>
            <View style={{ marginBottom: 20 }}>
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
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.8}
                                onPress={() => Linking.openURL(place.location)}>
                                <Icon name="place" size={20} color={COLORS.white} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="star" size={20} color={COLORS.white} />
                            <Text style={{ marginLeft: 5, color: COLORS.white }}>{place.rating}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>

    );
};

export default Card;