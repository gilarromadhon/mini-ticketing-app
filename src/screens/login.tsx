import React, { useState } from 'react';
import {
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextField from '../components/textfield';

function LoginScreen() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleLogin = () => {
        if (!emailValidation(email)) {
            setErrorEmail('Email tidak valid');
            return;
        }
        if (email === 'admin@mail.com' && password === 'adminadmin') {
            setErrorEmail('');
            setErrorPassword('');
            setEmail('');
            setPassword('');
            navigation.navigate('Home' as never);
        } else {
            setErrorEmail('Email tidak terdaftar');
            setErrorPassword('Password salah');
        }
    };

    const emailValidation = (text: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = text === '' || emailRegex.test(text);
        if (!isValid) {
            setErrorEmail('Email tidak valid');
        } else {
            setErrorEmail('');
        }
        return isValid;
    };

    return (
        <SafeAreaView style={styles.root}>
            <Image source={require('../assets/bg.png')} style={styles.backgroundImage} />
            <View style={styles.body}>
              <View style={styles.loginContainer}>
                  <Text style={styles.loginText}>Masuk</Text>
                  <Text style={styles.welcomeText}>Selamat datang kembali!</Text>
                  <TextField
                      placeholder="E-mail"
                      value={email}
                      onChangeText={setEmail}
                      error={errorEmail}
                      type="email"
                  />
                  <TextField
                      placeholder="Kata Sandi"
                      value={password}
                      onChangeText={setPassword}
                      error={errorPassword}
                      type="password"
                  />
                  <Text style={styles.forgotPasswordText}>Lupa Kata Sandi?</Text>
                  <Pressable
                      style={[styles.loginButton, { opacity: !email || !password ? 0.5 : 1 }]} 
                      onPress={handleLogin}
                      disabled={!email || !password}
                  >
                      <Text style={styles.loginButtonText}>Masuk</Text>
                  </Pressable>
                  <Text style={styles.noAccountText}>Belum punya akun? <Text style={styles.forgotPasswordText}>Buat Akun</Text></Text>
                  <View style={styles.lineContainer}>
                      <View style={styles.line} />
                      <Text style={styles.lineText}>atau</Text>
                      <View style={styles.line} />
                  </View>
                  <TouchableOpacity style={styles.googleButton}>
                      <Image source={require('../assets/icons/google.png')} style={styles.googleIcon} />
                      <Text style={styles.googleButtonText}>Google</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
                <Text style={styles.passText}>Lewati, langsung lihat daftar komik</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      height: '100%',
    },
    body: {
      flex: 1,
      height: '100%',
    },
    loginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 20,
    },
    loginText: {
      color: 'black',
      fontSize: 24,
      fontFamily: 'ComicBookBold',
    },
    welcomeText: {
      color: '#959697',
      fontSize: 16,
      fontWeight: 'medium',
      marginBottom: 16,
    },
    input: {
      width: '100%',
      height: 48,
      backgroundColor: 'white',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#959697',
      marginBottom: 10,
      paddingHorizontal: 20,
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 10,
    },
    forgotPasswordText: {
      color: '#45a049',
      fontSize: 16,
      fontWeight: 'medium',
      marginBottom: 20,
      textAlign: 'right',
      width: '100%',
    },
    noAccountText: {
      color: '#959697',
      fontSize: 16,
      fontWeight: 'medium',
      textAlign: 'center',
      width: '100%',
      marginTop: 16,
    },
    loginButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#45a049',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'medium',
    },
    lineContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 16,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#959697',
    },
    lineText: {
      marginHorizontal: 16,
      color: '#959697',
      fontSize: 14,
    },
    googleButton: {
      width: '100%',
      height: 50,
      backgroundColor: 'white',
      borderRadius: 100,
      borderWidth: 1,
      borderColor: '#EAE9E9',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: 12,
    },
    googleIcon: {
      width: 24,
      resizeMode: 'contain',
    },
    googleButtonText: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
    },
    passText: {
      color: '#45a049',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      textDecorationLine: 'underline',
      width: '100%',
      marginBottom: 20,
    },
    backgroundImage: {
      position: 'absolute',
      top: -210,
      right: 0,
      width: 160,
      resizeMode: 'contain',
      zIndex: -1,
    },
  });

  export default LoginScreen;
