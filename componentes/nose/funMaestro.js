import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Iterando from "./Iterando.js";
const FunMaestro=({data})=>(
    <React.Fragment>
    
        <View style={styles.container}>
              <Text style={styles.texto}>Lista de Imágenes</Text>
              <Iterando 
        variableIterable={data}//Volvemos el state a props
        />
          </View>
</React.Fragment>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    },
    texto:{
        color:"black"
    }
    });
export default FunMaestro