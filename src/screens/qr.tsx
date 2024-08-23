import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QrScreen({ navigation }: { navigation: any }) {

    return (
        <QRCodeScanner
            onRead={({data}) => alert(data)}
            flashMode={RNCamera.Constants.FlashMode.torch}
            showMarker={true}
            topContent={
                <Text style={styles.centerText}>
                  Scan your QR
                </Text>
            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            }
        />
    );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default QrScreen;
