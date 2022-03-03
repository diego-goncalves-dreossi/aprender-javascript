function veridade(idadep){
    var idade = idadep

    if(idade < 16){
        console.log('Não vota')
    } else if (idade >= 16  && idade <18 || idade > 65){
        console.log('Pode votar')
    } else{
        console.log('Vota obrigatóriamente')
}
}

function saudacao(hr){
    console.log(`Agora são exatamente ${hr} horas.`)
    if(hr < 12){
        console.log('Bom dia')
    } else if(hr <= 18){
        console.log('Boa tarde')
    }else{
        console.log('Boa noite')
    }
}

function dia(d){
    switch(d){
        case 0:{
            console.log('Segunda-Feira')
            break
        }
        case 1:{
            console.log('Terça-Feira')
            break
        }
        case 2:{
            console.log('Quarta-Feira')
            break
        }
        case 3:{
            console.log('Quinta-Feira')
            break
        }
        case 4:{
            console.log('Sexta-Feira')
            break
        }
        case 5:{
            console.log('Sábado')
            break
        }
        case 6:{
            console.log('Domingo')
            break
        }
        default:{
            console.log('{ERRO} Dia inválido')
            break
        }
    }
}

//veridade(14)
var agora = new Date() //Variável se torna uma data
saudacao(agora.getHours().toFixed(2)) //getHours retorna o horário
dia(agora.getDay())//Retorna o dia da semana em número -1