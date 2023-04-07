const validatePropertyValue = (property, value) => {
 
    const regexName= /^[a-z0-9áéíóúüñ]{2,16}$/
    const regexNumber=/^\d+$/

    if((property=== 'name') && (!regexName.test(value))){
        return 'Debe contener al menos 2 caracteres y maximo 16'
    }

    if((property === 'hp' || property === 'attack' || property === 'defense' || property === 'speed' || property === 'height' || property === 'weight') && (!regexNumber.test(value))){
        return 'Solo se permiten números'
    }
  
    if ((property === 'hp' || property === 'attack' || property === 'defense' || property === 'speed' || property === 'height' || property === 'weight') && (value <= 0 || value >= 1000)) {
      return 'Ingrese un valor entre 1 y 999';
    }
  
    return '';
  };

  export default validatePropertyValue;