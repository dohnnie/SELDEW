import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

export default function User() {
    return (
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