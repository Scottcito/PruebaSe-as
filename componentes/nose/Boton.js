import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Boton = () => {
  const navigation = useNavigation();

  const goToMaestro = () => {
    navigation.navigate('Maestro');
  };

  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <View style={styles.button}>
        <Button
          title="Maestro"
          color="#147CA6"
          onPress={goToMaestro}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default Boton;
