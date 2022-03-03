function carregar(){
var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 6){
        img.src = '../../imagens/periodos/noite.png'
        document.body.style.background = '#08222e'
    }else if(hora >= 6 && hora < 12){
        img.src = '../../imagens/periodos/manha.png'
        document.body.style.background = '#dbdcd7'
    }else if(hora >= 12 && hora < 18){
        img.src = '../../imagens/periodos/tarde.png'
        document.body.style.background = '#ef8d46'
    }else{
        img.src = '../../imagens/periodos/noite.png'
        document.body.style.background = '#02244b'
    }
}
