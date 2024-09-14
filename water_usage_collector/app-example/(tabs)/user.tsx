import { useLocalSearchParams, Link } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import  ParallaxScrollView from '@/components/ParallaxScrollView'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Page() {

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
            <Text style={ {color: 'white'}}>Top-level pane</Text>
            <Text style={ {color: 'white'}}>Blog post:  </Text>
            <Link href="/explore" asChild>
                <Pressable>
                    <Text style={ {color: 'white'}}>Explore</Text>
                </Pressable>
            </Link>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });