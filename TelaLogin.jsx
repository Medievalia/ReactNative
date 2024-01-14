import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const TelaLogin = () => {
  return (
    <View style={styles.login}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <Image
            source={require('./logo-TCC-1.png')}
            style={styles.logoTCC}
          />
        </View>
        <Image
          source={require('./img/rectangle-5.svg')}
          style={styles.rectangle}
        />
        <View style={styles.overlapGroup}>
         <Image source={require('./img/rectangle-3.svg')} style={styles.img} /> 
          <Text style={styles.textWrapper}>Esqueceu a senha? Clique aqui</Text>
        </View>
        <Text style={styles.textWrapper2}>Email</Text>
        <Text style={styles.textWrapper3}>Senha</Text>
        <View style={styles.overlap2}>
          <View style={styles.LOGIN}>GMAIL</View>
          <View style={styles.group}>
            <View style={styles.divWrapper}>
              <Text style={styles.textWrapper4}>Gmail</Text>
            </View>
          </View>
        </View>
        <View style={styles.overlap3}>
          <Text style={styles.textWrapper5}>Hystera</Text>
          <Text style={styles.textWrapper6}>Hystera</Text>
          <Image source={require('./img/ellipse-2.svg')} style={styles.ellipse} />
          <Text style={styles.textWrapper7}>Hystera</Text>
        </View>
        <View style={styles.botoLoginWrapper}>
          <View style={styles.divWrapper}>
            <Text style={styles.textWrapper4}>Login</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    width: 360,
    height: 800,
    position: 'relative',
  },
  overlap: {
    position: 'absolute',
    width: 359,
    height: 365,
    top: 16,
    left: 1,
  },
  logoTCC: {
    width: 359,
    height: 365,
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  rectangle: {
    top: 405,
    left: 23,
    position: 'absolute',
    width: 313,
    height: 41,
  },
  overlapGroup: {
    position: 'absolute',
    width: 346,
    height: 62,
    top: 490,
    left: -10,
  },
  img: {
    top: 0,
    left: 33,
    position: 'absolute',
    width: 313,
    height: 41,
  },
  textWrapper: {
    position: 'absolute',
    width: 278,
    top: 40,
    left: 0,
    fontWeight: '400',
    color: '#715cf8',
    fontSize: 14,
    textAlign: 'center',
  },
  textWrapper2: {
    position: 'absolute',
    width: 67,
    top: 383,
    left: 28,
    fontWeight: '400',
    color: '#8c52ff',
    fontSize: 17.6,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  textWrapper3: {
    position: 'absolute',
    width: 67,
    top: 467,
    left: 28,
    fontWeight: '400',
    color: '#8c52ff',
    fontSize: 17.6,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  overlap2: {
    position: 'absolute',
    width: 125,
    height: 46,
    top: 585,
    left: 33,
  },
  LOGIN: {
    position: 'absolute',
    width: 67,
    top: 12,
    left: 28,
    color: '#ededee',
    fontSize: 17.6,
    whiteSpace: 'nowrap',
    fontWeight: '400',
    textAlign: 'center',
  },
  group: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: 125,
    height: 46,
  },
  divWrapper: {
    display: 'flex',
    width: 125,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    position: 'relative',
    backgroundColor: '#8a50ff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  textWrapper4: {
    position: 'relative',
    width: 'fit-content',
    fontWeight: '400',
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center',
  },
  overlap3: {
    position: 'absolute',
    width: 249,
    height: 88,
    top: 721,
    left: 58,
  },
  textWrapper5: {
    top: 32,
    left: 61,
    position: 'absolute',
    width: 140,
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  textWrapper6: {
    top: 33,
    left: 55,
    position: 'absolute',
    width: 140,
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  ellipse: {
    position: 'absolute',
    width: 249,
    height: 79,
    top: 0,
    left: 0,
  },
  textWrapper7: {
    top: 34,
    left: 55,
    position: 'absolute',
    width: 140,
    fontWeight: '500',
    color: '#ffffff',
    fontSize: 30,
    textAlign: 'center',
  },
  botoLoginWrapper: {
    top: 585,
    left: 197,
    position: 'absolute',
    width: 125,
    height: 46,
  },
});

export default LoginTela;
