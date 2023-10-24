import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
    const navigation:any = useNavigation()

    function handleSchedule(){
        navigation.navigate('Schedule')
    }

    function handleHome(){
        navigation.navigate('Home')
    }

    function handlePerfil(){
        navigation.navigate('Perfil')

    }

    return (
        <View style={styles.footer}>
            <View style={styles.footIcons}>
                <TouchableOpacity style={styles.iconsAndNames} onPress={handleHome}>
                    <SimpleLineIcons name="home" size={24} color="white" />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconsAndNames} onPress={handleSchedule}>

                    <MaterialCommunityIcons name="calendar-edit" size={24} color="white" />
                    <Text>Agendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconsAndNames} onPress={handlePerfil}>

                    <Feather name="user" size={24} color="white" />
                    <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#4682C4',
        height: 50,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    footIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5
    },
    iconsAndNames: {
        alignItems: 'center'
    }
})