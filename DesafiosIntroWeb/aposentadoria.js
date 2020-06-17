const nome = "Carla"
const sexo = "F"
const idade = 55
const contribuicao = 37

const regraSoma = idade + contribuicao
// O tempo de contribuição mínimo para homens é de 35 anos e
// para mulheres é de 30 anos

// Regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa de no mínimo 85 anos

if (sexo === "M") {
    if (regraSoma >= 95 && contribuicao >= 35) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

if (sexo === "F") {
    if(regraSoma >= 85 && contribuicao >= 30) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
} 
