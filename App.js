import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import foto from './src/assets/foto.jpg';

export default function App() {

  //Função para mostrar um alerta ao clicar no ícone da rede social
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/iann-rodrigues-b71b9220a/')
        break
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/Iann-rst')
        break
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/iann.rodrigues.9883')
        break
    }
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container_cabecalho}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>IANN RODRIGUES</Text>
        <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
        <View style={styles.redes_sociais}>

          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon size={30} name="github" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
            <Icon size={30} name="facebook" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon size={30} name="linkedin" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.titulo}>Experiência Profissional</Text>
          </View>
          <View style={styles.card_content}>
            <Text style={styles.card_content_text}>DIGITAL INNOVATION ONE</Text>
            <Text style={styles.card_content_text}>ROCKETSEAT</Text>
          </View>
        </View>
      </View>

      <View style={styles.card_container}>
        <View style={styles.card}>
          <View style={styles.card_header}>
            <Text style={styles.titulo}>Formação Acadêmica </Text>
          </View>
          <View style={styles.card_content}>
            <Text style={styles.card_content_text}>Ciência da Computação Universidade Federal do Mato Grosso</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  container_cabecalho: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 125
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#808080',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_content: {
    marginTop: 20,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
    textAlign: 'center'
  }
});
