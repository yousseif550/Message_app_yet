
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {Constants} from 'expo';

export default function ({ navigation }) {
  const goToIncription = () => navigation.navigate("Signup");
  const goToConnexion = () => navigation.navigate("Login");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        BIENVUENUE SUR L'APPLICATION DE YET
      </Text>
        <Button onPress={goToIncription} title={`Inscription`} />
        <Button onPress={goToConnexion} title={`Connexion`} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8, 
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
});

