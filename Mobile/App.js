/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

const App: () => React$Node = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const dim = Dimensions.get('window');
  const [winH, setWinH] = useState(dim.height)
  useEffect(() => {
    Dimensions.addEventListener("change", dimUpdate);
    return () =>{
      Dimensions.removeEventListener("change", dimUpdate)
    }
  }, []);
  function dimUpdate(e) {
    let { window } = e;
    setWinH(window.height);
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.body]}>
        <ScrollView onContentSizeChange={(w, h) => {
          setContentHeight(h);
        }}>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
            <Text>{contentHeight}</Text>
            <Text>{winH}</Text>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "green" }]}>
          </View>
          <View style={[styles.child, { height: winH * 0.20, backgroundColor: "red" }]}>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch"
  },
  child: {
    marginTop: 10
  }
});

export default App;
