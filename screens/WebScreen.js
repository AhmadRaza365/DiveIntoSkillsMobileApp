import { View, Text, Linking, Alert } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const WebScreen = () => {
  return (
    <View>
        <Text 
        onPress={() => {
          // Linking.openURL('https://www.google.com')
          Alert.alert('Hello World')
        }
        }
        >WebScreen</Text>
    </View>
  )
}

export default WebScreen