import { Text, View, StyleSheet, Image, ScrollView, Pressable, Button } from "react-native";
import { Link } from 'expo-router';
import { Header } from '@rneui/themed';
import LinearGradient from 'expo-linear-gradient';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

let waterLocationGraph = '@/assets/images/location_grouped.png';
let userWaterUsage = '@/assets/images/specific_user_usage.png';
let householdWaterUsage = '@/assets/images/name_grouped.png';

let totalWaterUsed = 100;
let totalHouseWaterUsed = 100;
let totalUserWater = 100;

let avgPersonalUse = 300;
let totalPersonalUse = 400;
let areaOfMostUse = 'Leo\'s Bathroom';

let userName = 'Leo';

function HomeScreen({}) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.welcomeMsg}>
        <Text style={{ fontSize: 41, alignItems: 'flex-end'}}>
          Welcome back {userName}
        </Text>
      </View>
      <View style={{
        flex: 1,
      }}>
        <Image style={styles.imageScale} source={require(waterLocationGraph)}/>
        <Text style={styles.caption}>Total Water Used: {totalWaterUsed}</Text>
      </View>
      <View>
        <Image style={styles.imageScale} source={require(householdWaterUsage)} />
        <Text style={styles.caption}>Water Usage Patterns: {totalHouseWaterUsed} </Text>
      </View>
      <View>
        <Image style={styles.imageScale} source={require(userWaterUsage)} />
        <Text style={styles.caption}>Water Usage Patterns: {totalUserWater} </Text>
      </View>
    </ScrollView>
  );
}

function User_List({ navigation }) {
  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.userBox}>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
          <Text style={styles.userTitle}>{userName}</Text>
          <Button onPress={ () => navigation.navigate('User Profile')} title='Profile' />
        </View>
          <Image style={styles.userImg} source={require(userWaterUsage)} />
      </View>
      <View>

      </View>
      <View>

      </View>
    </ScrollView>
  );
}

function User() {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={{ fontWeight: 'bold', fontSize: 50}}>{userName}</Text>
      <Image style={{
        width: 410,
        height: 300,
      }} source={require(userWaterUsage)} />
      <Text>You've used {totalPersonalUse} gallons today!</Text>
      <Text>You've averaged {avgPersonalUse} gallons this week.</Text>
      <Text>Most Used Location: {areaOfMostUse} </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Index() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={ ({ navigation, route }) => ({
            title: 'Overview',
            headerRight: () => (
            <Button
              onPress={() => navigation.navigate('User')}
              title='Users'
            />
            ),
          })}
        />
        <Stack.Screen name="User" component={User_List}/>
        <Stack.Screen name="User Profile" component={(User)} />
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
    width: 410,
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
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 2,
  },
  userBox: {
    flexDirection: 'column',
    height: 300,
    width: 410,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  userImg: {
    height: 390,
    width: 400,
    flex: 1,
    margin: 5,
  }
});
