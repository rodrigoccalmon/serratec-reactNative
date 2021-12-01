import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Title from "./components/Title";
import { Container } from "./components/Container";


export default function App() {
  const [meuTexto, setMeuTexto] = useState();

  return (
    <Container>
      <View style={styles.text}>
        <Title>SerraTec app</Title>
        <Text>Olá, mundo!</Text>
        <TextInput
          onChangeText={setMeuTexto}
          value={meuTexto}
          placeholder="Digite qualquer coisa"
          keyboardType="numeric"
          />
        <StatusBar style="auto" />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({});
