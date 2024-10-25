let nome = []
let pontuacao = []
let pontos = 0
tabela = [nome,pontuacao]
let i = 0
while(true){
    let aux = prompt('Qual o seu nome')
    nome.push(aux)
    let Q1 = prompt(`Para que serve a mitocondria? 
    letra a) gerar ATP
    letra b) fazer um pudim
    letra c) para gerar oxigênio
    letra d) guardar clorofila` )
    if(Q1 == 'a'){
        pontos++
    }
    let Q2 = prompt(`Qual é o nome da estrutura que envolve a célula vegetal e lhe dá suporte e proteção?? 
    letra a) bolo de bolo
    letra b) mitocondria
    letra c) parede celular
    letra d) ` )
    if(Q2 == 'a'){
        pontos++
    }
     tabela[1][i] = pontos
    i++
   
    while(true){
        continuar = prompt('deseja continuar? s ou n')
        if(continuar == 's' || continuar == 'n'){
            break
        }
    }
    if(continuar == 'n'){
        break
    }   

for(let j = 0;j<i;j++){
   
    document.getElementById('ranking').textContent =  document.getElementById('ranking').textContent +  `${tabela[0][j]} ${tabela[1][j]} pontos ; `
}
}