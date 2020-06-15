const nome = "Carla"
const sexo = "F"
const idade = 26
const contribuicao = 66

// O tempo de contribuição mínimo para homens é de 35 anos e
// para mulheres é de 30 anos

// Regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos,
// enquanto a mulher precisa de no mínimo 85 anos

if (sexo === "M") {
    if (idade + contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

if (sexo === "F") {
    if(idade + contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}
