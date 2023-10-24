import { StyleSheet, Image, View, TextInput } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';
import { useState } from "react";
import { Input, Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Footer from "../../component/footer/footer";


export default function Login() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigation:any = useNavigation()
    // name: z.string(),
    // password: z.string(),

    // email: z.string().email(),
    // phone: z.string(),
    // clinicId: z.string(),

    const handleLogin = () => {
        setIsLoading(true); // Ativa o indicador de loading
        // Aqui, você pode adicionar a lógica de login (simulação de atraso)
        navigation.navigate('Home')
        setTimeout(() => {
            setIsLoading(false); // Desativa o indicador de loading após o término do processo de login
            // Substitua este setTimeout pela lógica de autenticação real.
        }, 2000); // Simulação de atraso de 2 segundos
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../../../assets/logoRemovedFund.png')}
                style={{ width: windowWidth * 0.2, height: windowHeight * 0.2 }}
            />
            <Input
                placeholder="Nome de usuário"
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={(text) => setUsername(text)}
                value={username}
                style={styles.inputText}
            />
            <Input
                placeholder="Senha"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={styles.inputText}
            />

            <Button
                title={isLoading ? <ActivityIndicator size="large" color="blue" /> : "Entrar"}
                onPress={handleLogin}
                containerStyle={styles.buttonContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,


    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
    },
    inputText: {
        paddingLeft: 10
    },

});