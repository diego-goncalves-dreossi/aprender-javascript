function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//Retorna o valor inteiro do ano
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    //Se não foi digitado ano ou se o ano for maior que o ano atual
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e digite novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        //Cria um elemento html

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','../../imagens/pessoas/hcrianca.png' )
                //Cria atributo para elemento e define valor
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','../../imagens/pessoas/hjovem.png' )
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','../../imagens/pessoas/hadulto.png' )
            } else{
                //Idoso
                img.setAttribute('src','../../imagens/pessoas/hidoso.png' )
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','../../imagens/pessoas/mcrianca.png' )
                //Cria atributo para elemento e define valor
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src','../../imagens/pessoas/mjovem.png' )
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','../../imagens/pessoas/madulta.png' )
            } else{
                //Idoso
                img.setAttribute('src','../../imagens/pessoas/midosa.png' )
            }
        }

        //Centralizar res
        res.style.textAlign = 'center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //Fazer aparecer a imagem, adicionando um elemento filho
        //res.appendChilds('<br>')
        res.appendChild(img)
        img.style.padding = '10px'
        //Adiciona no estilo o padding: 10px
      
    }
}

