import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import Dibujar from "../css/style";
import { Task } from "../App";
interface ItemProps{
    item:Task,
    MarkDome:(tarea:Task)=>void,
    deleteFuntion:(tarea:Task)=>void
}

export default function RenderItem({item,MarkDome,deleteFuntion}:ItemProps){
    return(
      <View style={Dibujar.tareascontenedor}>
        <TouchableOpacity onPress={()=>MarkDome(item)}>
        <Text style={item.estado ? Dibujar.TextoDone: Dibujar.titulo}>
        {item.titulo}
      </Text>
      <Text style={Dibujar.text}>
        {new Date(item.fecha).toDateString()}
      </Text>
      </TouchableOpacity>
     {
      item.estado && 
     <TouchableOpacity style={Dibujar.removeBoton} onPress={()=>deleteFuntion(item)}>
        <Text style={Dibujar.wtext}>
          Eliminar
        </Text>
      </TouchableOpacity>}
  
      </View>
    )
  }