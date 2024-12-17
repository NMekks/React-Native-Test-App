import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    >
      <Text className="text-3xl">achoooo</Text>
      <StatusBar />
      <Link href="/profile" style={ {color: 'blue'} }> Go to Profile Page </Link>
    </View>
  );
}

export default index