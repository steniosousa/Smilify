import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Card() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.date}>
                    <MaterialCommunityIcons name="calendar-check-outline" size={30} color="#2D36E0" />
                    <View>
                        <Text style={{ color: '#2D36E0' }}>Hoje</Text>
                        <Text style={{ color: '#2D36E0' }}>09:30 até 10:00</Text>
                    </View>
                </View>
                <Text style={{ color: 'red' }}>Não confirmado</Text>
            </View>
            <View>
                <View style={styles.doctorZone}>
                    <Fontisto name="doctor" size={20} color="black" />
                    <Text>    Dr: Stênio </Text>
                </View>
                <Text>CRO 800</Text>
                <View style={styles.cancelOrAccept}>
                    <TouchableOpacity style={styles.cancel}>
                        <Text style={styles.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirm}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.3,
        padding: 15,
        margin: 10,
        borderColor: 'gray',
    },
    date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    },
    doctorZone: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancelOrAccept: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
        marginTop: 10,
    },
    confirm: {
        backgroundColor: '#2DA7E0',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5

    }, cancel: {
        backgroundColor: 'grey',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5
    },
    textButton: {
        color: 'white'
    },
})