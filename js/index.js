function alertarCodigo(min, max){
    var codigo = Math.random() * (max - min) + min
   alert('Seu código é: '+Math.round(codigo)+'! Não esqueça!!!') 
}