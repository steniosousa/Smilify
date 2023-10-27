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
                    <SimpleLineIcons name="home" size={24} color="grey" />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconsAndNames} onPress={handleSchedule}>

                    <MaterialCommunityIcons name="calendar-edit" size={24} color="grey" />
                    <Text>Agendar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconsAndNames} onPress={handlePerfil}>

                    <Feather name="user" size={24} color="grey" />
                    <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#C0D2F5',
        height: 70,
        display:'flex',
        justifyContent:'center',
        bottom: 10,
        marginTop:'5%', 
        width:'90%',
        marginLeft:'5%',
        borderRadius:20
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