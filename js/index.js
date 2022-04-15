function alertarCodigo(min, max){
    // cria um codigo aleatorio para o usuario
    var codigo = Math.random() * (max - min) + min
    // mostra ao usuário seu código
   alert('Seu código é: 2022'+Math.round(codigo)+'! Não esqueça!!!') 
    // o usuário é mandado de volta a página de login
   window.location.href = 'index.html'
}