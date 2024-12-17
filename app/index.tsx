import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>achoooo</Text>
      <StatusBar />
      <Link href="/profile" style={ {color: 'blue'} }> Go to Profile Page </Link>
    </View>
  );
}

export default index

const styles = StyleSheet.create({})