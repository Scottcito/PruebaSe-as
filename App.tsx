import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Boton from './componentes/nose/Boton';
import Maestro from './componentes/nose/Maestro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boton">
        <Stack.Screen name="Boton" component={Boton} />
        <Stack.Screen name="Maestro" component={Maestro} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
