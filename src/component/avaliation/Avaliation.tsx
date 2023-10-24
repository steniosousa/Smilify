import { useState } from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Avaliation() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [rating, setRating] = useState(0); 

    const handleStarPress = (star) => {
        setRating(star);
    };

    const stars = [1, 2, 3, 4, 5]; 

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../../assets/doctor.webp')}
                    style={{ width: windowWidth * 0.2, height: windowHeight * 0.1 }}
                />
                <Text>Stênio</Text>
                <View style={styles.stars}>
                    {stars.map((star) => (
                        <TouchableOpacity key={star} onPress={() => handleStarPress(star)} >
                            <Icon
                                name={star <= rating ? 'star' : 'star-o'}
                                size={30}
                                color="gold"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View>
                <Text style={styles.textAvaliable}>Sua avaliação nos ajuda a manter o sistema seguro.</Text>
                <Text style={styles.allStars}>Stênio guarda
                    <Text style={styles.starsTotal}> 30/30
                    </Text> estrelas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        padding: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    imageDoctor: {
        height: 20,
        width: 30
    },
    stars: {
        display: 'flex',
        flexDirection: 'row'
    },
    textAvaliable: {
        width: 200
    },
    allStars: {
        marginTop: 20,
        fontWeight: '500'
    },
    starsTotal:{
        color:'#5E2DE0'
    }
})