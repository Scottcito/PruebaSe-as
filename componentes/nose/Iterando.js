import React from 'react';
import ComponenteImage from './ComponenteImage';

const Iterando = ({ variableIterable }) => (
  <React.Fragment>    
  {variableIterable.map(variableIterable=>(
  <ComponenteImage
      key={variableIterable.Id_Imagen}
      {...variableIterable}
  />  
))}
</React.Fragment>
);

export default Iterando;
