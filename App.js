import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Route';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View

      style={[
        StyleSheet.absoluteFillObject,
        { marginTop: StatusBar.currentHeight },
      ]}
    >
      <StatusBar style="auto" />

      <Navigation
      />
    </View>
  );
}
