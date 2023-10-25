import Navigation from './Route';
import { StyleSheet, View, StatusBar } from 'react-native';
import Footer from './src/component/footer/footer';


export default function App() {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        { marginTop: StatusBar.currentHeight },
      ]}
    >
      <Navigation/>

    </View>
  );
}
