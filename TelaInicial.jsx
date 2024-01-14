import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TelaInicial = () => {
  return (
    <View style={styles.telaInicial}>
      <View style={styles.div}>
        <TouchableOpacity style={styles.botaoComeceAgora}>
          <Text style={styles.textWrapper}>COMECE AGORA</Text>
        </TouchableOpacity>
        <Text style={styles.textWrapper2}>TENHO UMA CONTA</Text>
        <Image
          source={require('./logo-TCC-1.png')}
          style={styles.logoTCC}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  telaInicial: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div: {
    backgroundColor: '#ffffff',
    width: 360,
    height: 800,
    position: 'relative',
  },
  botaoComeceAgora: {
    position: 'absolute',
    width: 317,
    height: 59,
    top: 651,
    left: 21,
    backgroundColor: '#8c52ff', // Cor de fundo do botão
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 17.6,
    textAlign: 'center',
  },
  textWrapper2: {
    position: 'absolute',
    width: 317,
    top: 605,
    left: 21,
    fontWeight: '400',
    color: '#8c52ff',
    fontSize: 17.6,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  logoTCC: {
    position: 'absolute',
    width: 360,
    height: 538,
    top: 53,
    left: 0,
    resizeMode: 'cover',
  },
});

export default TelaInicial;
