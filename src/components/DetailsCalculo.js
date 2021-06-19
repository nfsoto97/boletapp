import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import Box from '../components/Box'

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.lightPeriwinkle,
    flexDirection: 'column',
    flex:1.3,
    width:'100%',
  }
});

const DetailsCalculadora = ({productos = []}) => {
  return (
        <SafeAreaView  style={styles.container}>
            <FlatList
            data={productos}
            keyExtractor={(prod, index) => {
              return index;
            }}
            renderItem={({item: prod}) => {
              return (
                <Box producto={prod}></Box>
              );
            }}
            />
        </SafeAreaView >
  );
};

export default DetailsCalculadora;