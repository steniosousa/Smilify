import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Footer from "../../component/footer/footer";
import { SafeAreaView } from "react-native";
import Card from "../../component/card/card";
import { Avaliation } from "../../component/avaliation/Avaliation";
import Header from "../../component/header/header";
import { ScrollView } from "react-native-gesture-handler";



export default function Home() {

    return (
        <SafeAreaView  style={styles.container}>
            <Header />

                <ImageBackground source={require('../../../assets/background.avif')} style={{ opacity: 1, flex:1 }}>
            <ScrollView>
                    <View style={styles.viewUser}>
                        <AntDesign name="user" size={40} color="black" />
                    </View>
                    <View style={styles.nextSchudele}>
                        <View style={styles.titleView}>
                            <FontAwesome5 name="calendar-alt" size={24} color="black" />
                            <Text style={styles.title}>PRÓXIMO AGENDAMENTO</Text>

                        </View>
                        <TouchableOpacity style={styles.seeAll}>
                            <Text style={styles.textButton}>Ver tudo</Text>
                        </TouchableOpacity>
                    </View>
                    <Card />
                    <View style={styles.nextSchudele}>
                        <View style={styles.titleView}>
                            <AntDesign name="barschart" size={24} color="black" />
                            <Text style={styles.title}>ÚLTIMO TRATAMENTO</Text>

                        </View>
                        <TouchableOpacity style={styles.seeAll}>
                            <Text style={styles.textButton}>Histórico</Text>
                        </TouchableOpacity>
                    </View>
                    <Card />
                    <Avaliation />

            </ScrollView>
                </ImageBackground >
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },



    viewUser: {
        alignItems: 'center',
        marginTop: 40,
        borderBottomColor: '#808080',
    },
    nextSchudele: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20

    },
    titleView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    title: {
        fontWeight: '300',
    },
    seeAll: {
        backgroundColor: '#2DA7E0',
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