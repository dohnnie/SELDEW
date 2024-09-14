import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from '@rneui/themed';
import LinearGradient from 'expo-linear-gradient';
import { SafeAreaProvider } from "react-native-safe-area-context";

let totalWaterUsedImg = '@/assets/images/examplepng.png';
let waterUsagePatternsImg = '@/assets/images/examplepng.png';
let avgWaterUsedImg = '@/assets/images/examplepng.png';

let x = 100;
let y = 100;
let z = 100;

let userName = 'John Doe';

export default function Index() {
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.scrollView}>
        <View style= {{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderWidth: 1,
          }}>
          <Text>
            Welcome back, {userName}
          </Text>
        </View>
        <View style={{
          flex: 1,
        }}>
          <Image source={require(totalWaterUsedImg)}/>
          <Text>Total Water Used: {x}</Text>
        </View>
        <View>
          <Image source={require(waterUsagePatternsImg)} />
          <Text>Water Usage Patterns: {y} </Text>
        </View>
        <View>
          <Image source={require(avgWaterUsedImg)} />
          <Text>Water Usage Patterns: {z} </Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create( {
  homePanel: {
    width: 100,
    height: 100,
  },
  scrollView: {
    backgroundColor: 'white ',
    marginHorizontal: 20,
    flex: 1,
  },
  caption: {

  }
});
