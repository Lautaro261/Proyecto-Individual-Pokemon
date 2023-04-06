const validation =(form)=>{
    const regexName= /^[a-z0-9áéíóúüñ]{2,16}$/
    const regexValue=/^([1-9]|[1-9][0-9]{1,2}|999)$/
    const errors={}

    // VALIDACION name
/*      if(/^[a-z0-9áéíóúüñ]{2,16}$/.test(form.name)){
        console.log(form.name)
        //console.log('todo bien')
        setErrors({...errors, name:''})
    }else if(form.name !== ''){
        setErrors({...errors, name: 'minimo 2 caracteres y maximo 16 caracteres'})
    }else{
        setErrors({...errors, name:''})
    } 

    //VALIDACION  hp, attack, defense , speed , height ,weight
     if(/^([1-9]|[1-9][0-9]{1,2}|999)$/.test(form.hp)){
        console.log(form.hp)
        setErrors({...errors, hp:''})
    }else if(form.hp !== ''){
        console.log('noooo')
        setErrors({...errors, hp: 'ingrese un valor entre 1 y 999'})
    }else{
        setErrors({...errors, hp: ''})
    }  */

    if(!form.name){
        errors.name = 'Ingrese un nombre'
    }
    if(!regexName.test(form.name)){
        errors.name = 'minimo 2 caracteres y maximo 16 caracteres'
    }
    if(form.name){
        errors.name = ''
    }

    if(!form.hp){
        errors.hp = 'Ingrese un valor entre 1 y 999'
    }
    if(!regexValue.test(form.hp)){
        errors.hp = 'dato incorrecto'
    }
    if(form.hp){
        errors.hp = ''
    }

    return errors

}

export default validation;