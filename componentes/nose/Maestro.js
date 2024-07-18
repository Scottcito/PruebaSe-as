import React, { useState } from 'react';
import FunMaestro from "./funMaestro.js";
import useFetch from "../hook/Hook"
import { TextInput, View,StyleSheet,Text,Button} from "react-native";


const Maestro = () => {
  const [texto,setext]=useState('')
  const { data } = useFetch(`http://192.168.20.45:8000/api/info`);
  const handleTexto = (texto) => {
  setext(texto); 
};
  const presionar = () => {
    setext(texto); 
    console.log(texto)
  };

  return (
  <View>
     <View>
    <FunMaestro data={data} />
   </View>
  <View style={styles.contendedorinput}>
  <Text style={styles.inputexto}>Escrito</Text>
  <TextInput style={styles.input} placeholder="Ingrese texto a traducir" placeholderTextColor="#147CA6"  value={texto} onChangeText={handleTexto}/>
 
</View>
<View style={styles.buttonContainer}>
        <Button title="Traducir" 
        color="#147CA6"
        onPress={presionar}/>
   
      </View>

</View>);
  
};
const styles = StyleSheet.create({
  contendedorinput: {
    marginBottom: 20,
    width: '100%', 
    paddingTop:100
  },
  inputexto: {
    fontSize: 25,
    color: '#147CA6',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    height: 150,
    width: '100%',
    marginVertical: 10,
    color: '#147CA6',
    paddingHorizontal: 10,
  }
});

export default Maestro;