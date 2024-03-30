// requer dowload do npm install readline-sync

let input = require("readline-sync");

let continuar = false;

const niveis = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]


do {
    let nome = input.question("Qual nome do seu Personagem ?:  ")
    let xp =  input.question("Qual nivel Do Seu personagem \nDe 1.000 a 10.000:  ")
    
    if (xp <= 1000) {
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[0]}\n`);
    }else if(xp >= 1.001 && xp <= 2000 ){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[1]}\n`);
    }else if(xp >= 2001 && xp <= 5000 ){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[2]}\n`);
    }else if(xp >= 6001 && xp <= 7000){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[3]}\n`);
    }else if(xp >= 7001 && xp <= 8000){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[4]}\n`);
    }else if(xp >= 8001 && xp <= 9000){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[5]}\n`);
    }else if(xp >= 9001 && xp <= 1000){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[6]}\n`);
    }else if(xp >= 10001){
        console.log(`\nO nome do Heroi ${nome} está no nivel ${niveis[7]}\n`);
    }

    let fimOuNao = String(input.question("Deseja ver nivel de outro Personagem \nDigite [N] nao [S] SImm :  "))
    if (fimOuNao.toLocaleLowerCase() == "S".toLocaleLowerCase() ){
        continuar = true;
    }else{
        continuar = false;
    }

} while (continuar);