import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TextField: React.FC<{
  placeholder?: string;
  value?: string;
  error?: string;
  type?: string;
  onChangeText: (text: string) => void;
}> = ({
  placeholder,
  value,
  error,
  type,
  onChangeText,
}) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };
  const [show, setShow] = useState(false);

  function clickShow() {
    setShow(!show);
  }

  return (
    <View style={[styles.container, error && styles.inputError]}>
      <View style={styles.boxInput}>
        <TextInput
          style={[styles.input]}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={type === 'password' && !show}
        />
        { type === 'password' &&
          <TouchableOpacity onPress={clickShow}>
            <Image source={require('../assets/icons/eye.png')} style={styles.icon} />
          </TouchableOpacity>
        }
      </View>
      {
        error && <View style={styles.errorContainer}>
            <Image source={require('../assets/icons/error.png')} style={styles.errorIcon} />
            <Text style={styles.errorText}>{error}</Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  boxInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#959697',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
  },
  inputError: {
    borderColor: '#DF1C41',
  },
  errorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  errorText: {
    color: '#DF1C41',
    fontSize: 12,
  },
  errorIcon: {
    width: 15,
    height: 15,
    marginRight: 6,
  },
});

export default TextField;
