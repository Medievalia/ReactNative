import React from 'react';
import { View, Text, Image } from 'react-native';
import { BotOMonitorar } from './BotOMonitorar';
import { BotOTentar } from './BotOTentar';

export const TelaCadastro = () => {
  return (
    <View style={styles.telaCadastro}>
      <View style={styles.div2}>
        <View style={styles.overlapGroup}>
          <Image style={styles.ellipse} source={require('ellipse-1.svg')} />
          <Text style={styles.textWrapper3}>Hystera</Text>
        </View>
        <Text style={styles.textWrapper4}>
          Não se preocupe, você pode alterar a qualquer momento
        </Text>
        <Image style={styles.img} source={require('ellipse-3.svg')} />
        <Text style={styles.textWrapper5}>O que você deseja?</Text>
        <BotOMonitorar style={styles.botoMonitorar} />
        <BotOTentar style={styles.botoTentar} />
        <View style={styles.group}>
          <View style={styles.botoSeguinte}>
            <Text style={styles.textWrapper6}>Seguinte</Text>
          </View>
        </View>
        <View style={styles.backButton}>
          <Image
            style={styles.leftArrow}
            source={require('left-arrow.png')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  telaCadastro: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div2: {
    backgroundColor: '#ffffff',
    height: 800,
    overflow: 'hidden',
    position: 'relative',
    width: 360,
  },
  overlapGroup: {
    height: 88,
    left: 54,
    position: 'absolute',
    top: 715,
    width: 249,
  },
  ellipse: {
    height: 85,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 249,
  },
  textWrapper3: {
    color: '#ffffff',
    fontFamily: 'Lora-Medium',
    fontSize: 30,
    fontWeight: '500',
    left: 55,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 34,
    width: 140,
  },
  textWrapper4: {
    color: '#715cf8',
    fontFamily: 'Kurale-Regular',
    fontSize: 17,
    fontWeight: '400',
    left: 40,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 477,
    width: 278,
  },
  img: {
    height: 49,
    left: 591,
    position: 'absolute',
    top: 417,
    width: 39,
  },
  textWrapper5: {
    textShadowColor: '#715cf8',
    color: '#8a50ff',
    fontFamily: 'Kurale-Regular',
    fontSize: 30,
    fontWeight: '400',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    top: 84,
    width: 295,
  },
  botoMonitorar: {
    left: 32,
    position: 'absolute',
    top: 157,
  },
  botoTentar: {
    left: 32,
    position: 'absolute',
    top: 307,
  },
  group: {
    height: 46,
    left: 117,
    position: 'absolute',
    top: 586,
    width: 125,
  },
  botoSeguinte: {
    alignItems: 'center',
    backgroundColor: '#8a50ff',
    borderRadius: 10,
    display: 'flex',
    gap: 10,
    height: 46,
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    width: 125,
  },
  textWrapper6: {
    color: '#ffffff',
    fontFamily: 'Kurale-Regular',
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'relative',
    textAlign: 'center',
    width: 'fit-content',
  },
  backButton: {
    backgroundColor: '#8a50ffb8',
    borderRadius: 16.5,
    height: 33,
    left: 13,
    position: 'absolute',
    top: 16,
    width: 33,
  },
  leftArrow: {
    height: 27,
    left: 5,
    position: 'absolute',
    top: 3,
    width: 23,
  },
};
