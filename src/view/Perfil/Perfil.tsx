import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Card from "../../component/card/card";

export default function Perfil() {
    return (
        <SafeAreaView style={styles.container}>
            {/* <Header /> */}

            <TouchableOpacity style={styles.setting}>
                <MaterialIcons name="settings" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.perfil}>
                <View style={styles.circleImage}>
                    <FontAwesome5 name="user" size={50} color="black" />
                </View>
                <Text style={styles.perfilName}>Marcos</Text>
                <Text>Fortaleza, Ceará</Text>
            </View>

            <View style={styles.viewButtonsClinic}>
                <TouchableOpacity style={styles.buttonClinic}>
                    <View style={styles.textButtonClinic}>
                        <Text style={{ color: 'white' }}>SUA CLÍNICA</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.history}>Histórico</Text>
            <ScrollView>

                <Card />
                <Card />
                <Card />
                <Card />

                <Card />


            </ScrollView>
            <Footer />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    perfil: {
        alignItems: 'center',
        marginTop: 30,
    },
    circleImage: {
        borderWidth: 1,
        padding: 30,
        borderRadius: 200
    },
    perfilName: {
        marginTop: 5,
        fontWeight: 'bold'
    },
    setting: {
        alignItems: 'flex-end',
        padding: 15,
    },
    textConsultorio: {
        fontWeight: 'bold'
    },
    history: {
        alignSelf: 'center',
        fontWeight: '300'
    },
    viewButtonsClinic: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonClinic: {
        backgroundColor: '#2DA7E0',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5
    },
    textButtonClinic: {
        display: 'flex',
        flexDirection: 'row'
    }

})