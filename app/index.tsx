import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>achoooo</Text>
      <StatusBar />
      <Link href="/profile" style={ {color: 'blue'} }> Go to Profile Page </Link>
    </View>
  );
}

export default index