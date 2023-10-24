import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import { StatusBar } from "expo-status-bar";
import { Picker } from '@react-native-picker/picker';
import { useRef, useState } from "react";

export default function Schedule() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [open, setOpen] = useState(false)

    function openOrClose() {
        setOpen(!open)
    }



    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>

                <View style={styles.titlesView}>
                    <Text style={styles.title}>AGENDAR</Text>
                    <Text>Selecione um horário disponível</Text>
                </View>
                <View>
                    <View style={styles.selectDentist}>
                        <Text>Selecione um dentista</Text>
                        <TouchableOpacity onPress={openOrClose} style={styles.button}>
                            <Text>Selecionar</Text>
                        </TouchableOpacity>
                        {open ? (
                            <Picker
                                selectedValue={selectedLanguage}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>
                        ) : null}

                    </View>
                </View>

                <ScrollView horizontal={true} style={styles.horizontalScroll}>
                    <View style={styles.scheduleView}>
                        <View style={styles.date}>
                            <Text style={styles.dateDay}>10/02</Text>
                            <Text>Segunda-feita</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text >08:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>09:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>10:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>11:00</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleView}>
                        <View style={styles.date}>
                            <Text style={styles.dateDay}>10/02</Text>
                            <Text>Segunda-feita</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text >08:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>09:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>10:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>11:00</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleView}>
                        <View style={styles.date}>
                            <Text style={styles.dateDay}>10/02</Text>
                            <Text>Segunda-feita</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text >08:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>09:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>10:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>11:00</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleView}>
                        <View style={styles.date}>
                            <Text style={styles.dateDay}>10/02</Text>
                            <Text>Segunda-feita</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text >08:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>09:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>10:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>11:00</Text>
                        </View>
                    </View>
                    <View style={styles.scheduleView}>
                        <View style={styles.date}>
                            <Text style={styles.dateDay}>10/02</Text>
                            <Text>Segunda-feita</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text >08:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>09:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>10:00</Text>
                        </View>
                        <View style={styles.dateWeek}>
                            <Text>11:00</Text>
                        </View>
                    </View>
                </ScrollView>

                <View>
                    <TouchableOpacity style={styles.buttonMarcar}>
                        <Text style={styles.textMarcar}>Marcar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titlesView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold'
    },
    selectDentist: {
        marginLeft: 20
    },
    button: {
        backgroundColor: '#2DA7E0',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        width: 80,
        marginTop: 25,
        alignSelf: 'center'
    },
    scheduleView: {
        marginTop: 20,
        marginLeft: 10,
        alignItems: 'center',

    },
    date: {
        borderWidth: 1,
        padding: 10,
        borderBottomColor: '#292BFA',
        borderBottomWidth: 2,
        borderTopWidth: 0.7,
        marginBottom: 20,
        alignItems: 'center'
    },
    dateDay: {
        fontWeight: 'bold'
    },
    dateWeek: {
        paddingBottom: 7,
        paddingTop: 7,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#D2FFFF',
        margin: 10,
        borderWidth: 0.25,
        borderColor: '#7DFFFF'
    },
    horizontalScroll: {
        position: 'relative',
        margin: 10,
    },
    buttonMarcar: {
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: '#2DA7E0',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5
    },
    textMarcar: {
        color: 'white'
    }
})