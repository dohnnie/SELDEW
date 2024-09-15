import { Text, View, StyleSheet, Image, ScrollView, Pressable, Button } from "react-native";
import { Link } from 'expo-router';
import { Header } from '@rneui/themed';
import LinearGradient from 'expo-linear-gradient';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

let totalWaterUsedImg = '@/assets/images/examplepng.png';
let waterUsagePatternsImg = '@/assets/images/examplepng.png';
let avgWaterUsedImg = '@/assets/images/examplepng.png';

let x = 100;
let y = 100;
let z = 100;

let userName = 'John Doe';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.welcomeMsg}>
        <Text style={{ fontSize: 41, alignItems: 'flex-end'}}>
          Welcome back {userName}
        </Text>
      </View>
      <Button
        title="Go to User List"
        onPress={() => navigation.navigate('User')}
      />
      <View style={{
        flex: 1,
      }}>
        <Image style={styles.imageScale} source={require(totalWaterUsedImg)}/>
        <Text>Total Water Used: {x}</Text>
      </View>
      <View>
        <Image style={styles.imageScale} source={require(waterUsagePatternsImg)} />
        <Text>Water Usage Patterns: {y} </Text>
      </View>
      <View>
        <Image style={styles.imageScale} source={require(avgWaterUsedImg)} />
        <Text>Water Usage Patterns: {z} </Text>
      </View>
    </ScrollView>
  );
}

function User_List() {
  return(
    <SafeAreaProvider>
      <View>
        <Link push href="/user_profile" asChild>
          <Pressable style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}>
            <Text>User</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{title: 'Overview'}}
          />
        <Stack.Screen name="User" component={User_List}/>
      </Stack.Navigator>
  );
}

export default Index;

const styles = StyleSheet.create( {
  welcomeMsg: {
    width: 410,
    height: 100,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  imageScale: {
    width: 300,
    height: 300,
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white ',
    alignContent: 'center',
    flex: 1,
  },
  caption: {

  }
});
