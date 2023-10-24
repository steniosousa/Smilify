import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Header() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

        
    const navigation:any = useNavigation()

    function singout() {
        navigation.navigate('Login')
    }
    return (

        <View style={styles.header}>
            <View >
                <View style={styles.clinic}>
                    <Image
                        source={require('../../../assets/logoRemovedFund.png')}
                        style={{ width: windowWidth * 0.1, height: windowHeight * 0.1 }}
                    />
                    <Text style={styles.clinicName}>SUA CLINICA</Text>

                </View>
                <Text style={styles.userName}> Olá, Marcos!</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => singout()}>
                    <MaterialIcons name="exit-to-app" size={24} color="#FFF0F5" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4682C4',
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    clinic: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    clinicName: {
        color: 'white',
        marginLeft:10,
    },
    userName: {
        color: 'white',
        paddingBottom: 5
    },
    button: {
        padding: 15
    },
})