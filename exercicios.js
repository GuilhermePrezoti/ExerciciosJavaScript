let opcao = 0;
var msg = "";
var i = 0;

function menu(){
    this.opcao= prompt("---- Menu ----\n" +
    "0. Sair\n" +
    "1. Exercicio 01\n" +
    "2. Exercicio 02\n" +
    "3. Exercicio 03\n" +
    "4. Exercicio 04\n" +
    "5. Exercicio 05\n" +
    "6. Exercicio 06\n" +
    "7. Exercicio 07\n" + 
    "8. Exercicio 08\n" + 
    "9. Exercicio 09\n" +
    "10. Exercicio 10\n" +
    "11. Exercicio 11\n" +
    "12. Exercicio 12\n" +
    "13. Exercicio 13\n" +
    "14. Exercicio 14\n" +
    "15. Exercicio 15\n" +
    "16. Exercicio 16\n" +
    "17. Exercicio 17\n" +
    "18. Exercicio 18\n" +
    "19. Exercicio 19\n" +
    "20. Exercicio 20\n" +
    "21. Exercicio 21\n" +
    "22. Exercicio 22\n" +
    "23. Exercicio 23\n" +
    "24. Exercicio 24\n" +
    "Escolha uma das opções acima: "
    );

}//fim da funçaõ menu



function operacao(){
    menu();//Chamar o menu das opções

    switch(this.opcao){
        case '0':
            console.log("Obrigado!");
            break;

        case '1':
            console.log(exercicio01());
            break;

        case '2':
            console.log(exercicio02());
            break;

        case '3':
            console.log(exercicio03());
            break;

        case '4':
            console.log(exercicio04());
            break;

        case '5':
            console.log(exercicio5());
            break;

        case '6':
            console.log(exercicio6());
            break;

        case '7':
            console.log(exercicio7());  
            break;

        case '8':
            console.log(exercicio8());  
            break; 

        case '9':
            console.log(exercicio9());  
            break;
        case '10':
            console.log(exercicio10());
            break;
            
        case '11':
            console.log(exercicio11());
            break;
            
        case '12':
            console.log(exercicio12());
            break;
            
        case '13':
            console.log(exercicio13());
            break;
            
        case '14':
            console.log(exercicio14());
            break;
            
        case '15':
            console.log(exercicio15());
            break;

        case '16':
            console.log(exercicio16());
            break;
            
        case '17':
            console.log(exercicio17());
            break; 
            
        case '18':
            console.log(exercicio18());
            break;
        
        case '19':
            console.log(exercicio19());
            break; 
        
        case '20':
            console.log(exercicio20());    
            break;

        case '21':
            console.log(exercicio21());
            break;
            
        case '22':
            console.log(exercicio22());
            break; 
            
        case '23':
            console.log(exercicio23());
            break; 
            
        case '24':
            console.log(exercicio24());
            break;    
        default:

            console.log("Escolha uma opção válida.")
            break;        

    }//fim do switch


}//fim da função operação
operacao();



function exercicio01(){
    var a = 10;
    var b = 20;
    var aux = 0;
    
    console.log("A varável 'a' possui o valor " + a + ", a variável 'b' possui o valor " + b);
        aux = a;
        a = b;
        b = aux;
    
    console.log("Revertendo os valores das váriaveis, a varável 'a' possui o valor " + a + ", a variável 'b' possui o valor " + b);
    
    }
    
    function exercicio02(){
    var num = 0;
    var aux = 0;
    
        num = prompt("Digite um número: ");
            aux = num - 1;
            console.log('O antecessor de ' + num + ", é " + aux);
    }
    
    function exercicio03(){
    var base = 0;
    var altura = 0;
    var resultado = 0;
    
        base = prompt("Digite a base do retângulo");
        altura = prompt("Digite a altura do retângulo");
        
        if (base == altura){
            console.log("Hmmmm...Acho que isso é um quadrado :(");
        }else{
            resultado = (base * altura);
    
            console.log("A área do retângulo é: " + resultado);
        }   
    
    }
    
    function exercicio04(){
    var anos = 0;
    var meses = 0;
    var dias = 0;
    var resultado = 0;
    
        anos = parseInt(prompt("Digite a sua idade EX.:36"));
        meses = parseInt(prompt("Digite quantos meses completos você tem EX.:07"));
        dias = parseInt(prompt("Digite o dia do seu nascimento EX.:19"));
    
        resultado = (anos * 365) + (meses * 30) + dias;
    
    console.log("Você ja teve " + resultado + " dias de vida");
    
    }
    
    function exercicio05(){
    var nulos = 0;
    var brancos = 0;
    var validos = 0;
    var eleitoresTotal = 0;
    var auxNulos = 0;
    var auxBrancos = 0;
    var auxValidos = 0;
    
        nulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
        brancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
        validos = parseInt(prompt("Digite a quantidade de votos validos: "));
    
        eleitoresTotal = nulos + brancos + validos;
    
        auxNulos = (nulos/eleitoresTotal)*100;
        auxBrancos = (brancos/eleitoresTotal)*100;
        auxValidos = (validos/eleitoresTotal)*100;
    
    console.log(nulos + " votos nulos, " + brancos + " votos brancos, "+ validos +" votos válidos e " + eleitoresTotal + " eleitores no total.");
    console.log(auxNulos + "% votos nulos, " + auxBrancos + "% votos brancos e " + auxValidos + "% votos válidos");
    
    }
    
    function exercicio06(){
    let atual = 0;
    reajuste = 0;
        
        atual = parseFloat(prompt("Informe seu Salário Atual: "));
        reajuste = parseFloat(prompt("Digite a % do reajuste: "));
    
        aux = atual/100;
        novoSalario = atual + (aux*reajuste);
    
        console.log("Seu novo salário é de: " + novoSalario);
    }
    
    function exercicio07(){
    let valor = 0;
    
    
        valor = parseFloat(prompt("Informe o valor do carro: "));
        aux = parseFloat(valor) + (parseFloat(valor) / 0.28 * 0.45);
        console.log("O Valor do Consumidor é de: " + aux);
    }

    function exercicio08(){
    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;

        nota1 = parseFloat(prompt("Informe a primeira nota: "));
        nota2 = parseFloat(prompt("Informe a segunda nota: "));
        nota3 = parseFloat(prompt("Informe a terceira nota: "));

        notaFinal = (nota1 + nota2 + nota3) / 3;

        if (notaFinal <5){
            console.log("A média do aluno é : " + notaFinal + " Com isso, o Aluno esta de Recuperação.");
        }else{
            console.log("A Média do aluno é: " + notaFinal + " Com isso o Aluno está Aprovado.")
        }

        
    }

    function exercicio09(){
        let maca = 0;

        maca = parseInt(prompt("Quantas maças você deseja comprar?: "))

        if(maca <12){
            aux = maca * 1.30;
            console.log("O valor da compra é: " + aux);
        }

        if (maca>=12){
            aux1 = maca * 1.00;
            console.log("O valor da compra é: " + aux1);
        }
    }

    function exercicio10(){
        let vendedor = 0;
        let vendas = 0;

        vendedor = parseFloat(prompt("Qual é o seu salário? "));
        vendas = parseInt(prompt("Quantas vendas você fez? "));

        if (vendas <1500){
            aux = (vendas * 0.3) + vendedor;
            console.log("O aumento dos salário com as vendas de 3% é: " + aux);
        }else{
            aux = (vendas * 0.5) + vendedor;
            console.log("O aumento dos salários com as vendas de 5% é: " + aux);
        }
        
            
        
    }

    function exercicio11(){
        let saldo = 0;
        let deb = 0;
        let cred = 0;

        saldo = parseFloat(prompt("Informe seu saldo: "));
        deb = parseFloat(prompt("Informe o valor de DÉBITO: "));
        cred = parseFloat(prompt("Informe o valor de CRÉDITO: "));

        saldoAtual = saldo - deb + cred;
        if(saldoAtual >=0){
            console.log(saldoAtual + " SALDO POSITIVO.");
        }else{
            console.log(saldoAtual + " SALDO NEGATIVO.");
        }
    }

    function exercicio12(){
        var num1 = parseInt(prompt("Informe um número entre 1 e 10: "));
        console.log("Tabuado do" + num1 + ":\n");
            for (i = 0; i<=10; i++ ){

                msg += num1 + "X" + i + "=" + (num1) * (i) +"\n"; 
            }
            console.log(msg + "\n");
    }

    function exercicio13(){
        var N = 0;
        let i = 0;
        for(var N = 1; i < N; i++){
            N = parseInt(prompt("Informe um número: "));
        }
        
           
    }

    function exercicio14(){
        var N = 0;
        var i = 0;

        for(var N = 1; i < 3; i ++){
            N =parseInt(prompt("Informe um número: "));
            console.log("Os números negativos são: " + N);
        }
    }

    function exercicio15(){
        let num = 0;
        i = 0;

        for ( let num = 1; i <3; i++ ){
            num = parseInt(prompt("Informeum número: "));

            aux = parseInt(40) - parseInt(num);
            console.log(" Resultados dos números INFERIORES a 40 são: " + aux);
        }
    }

    function exercicio16(){
        aux = (1*10) + (2*9) + (3*8) + (4*7);
        n = 1 + 2 + 3 + 4
        aux1 = aux / n;
        

        console.log("O valor da média artimetica é: " + aux1);
    }

    function exercicio17(){
        let num1 = 0;
        let num2 = 0;
        let num3 = 0;
        let maior = 0;

        num1 = parseInt(prompt("Informe um número: "));
        num2 = parseInt(prompt("Informe outro número: "));
        num3 = parseInt(prompt("Informe o ultimo número: "));

        maior = num1;

        if (num2 > maior){
            maior = num2
        }
        
        if(num3 > maior){
            maior = num3
        }
        console.log("O maior número digitado é: " + maior);
    }

    /*function exercicio18(){

    }*/

    function exercicio19(){
        var nota1 = 0;
        var nota2 = 0;
        var nota3 = 0;
        var aluno = 0;
        var aluno2 = 0;

         nota1 = parseFloat(prompt("Informe a primeira nota: "));
         nota2 = parseFloat(prompt("Informe a primeira nota: "));
         nota3 = parseFloat(prompt("Informe a primeira nota: "));

        notaFinal = (nota1 + nota2 + nota3) /3;
        if(notaFinasl <5){
            console.log(notaFinal + "Reprovado.");
        }else{
            console.log(notaFinal + "Aprovado.")
        }

        nota1 = parseFloat(prompt("Informe a primeira nota: "));
        nota2 = parseFloat(prompt("Informe a primeira nota: "));
        nota3 = parseFloat(prompt("Informe a primeira nota: "));
        
        notaFinal2 = (nota1 + nota2 + nota3) /3;
        if(notaFinal2 <5){
            console.log(notaFinal2 + "Reprovado.");
        }else{
            console.log(notaFinal2 + "Aprovado.")
        }
        
    }
    
    function exercicio20(){
        var sal = 0;
        var filhos = 0;

        for(var i = 0; i<=3; i++){
            sal = parseFloat(prompt("Informe o salário que você recebe"));
            filhos = parseInt(prompt("Quantos filhos você tem?"));

            media = parseFloat(sal) / parseInt(i);
            console.log("A média salarial dos habitantes é de: " + media);

            mediaFilhos = parseInt(filhos) / parseInt(i);
            console.log("A média de filhos de habitantes é de: " + mediaFilhos);
        }
    }

    function exercicio21(){
        var area = parseFloat(prompt("Informe o valor da ÁREA."));
        var raio = parseFloat(prompt("Informe o valor do RAIO."));
        var pi = 3.14159

        area = pi * (raio * raio);
        console.log("O valor da área é: " + area);

    }

    function exercicio22(){
        var td = 0;
        var ht = 0;
        var vh = 0;
        var pd = 0;
        var sd = 0;

        ht = parseInt(prompt("Quantas horas você trabalhou no mês?"));
        vh = parseInt(prompt("Quanto que você ganha por hora?"));
        pd = parseInt(prompt("Digite o Desconto em Porcentagem"));
        sd = parseFloat(prompt("Informe o salário"));

        sd = ht * vh;
        console.log("Seu salário bruto é " + sd);

        parseInt(td) = (pd/100) * sb;
        console.log("Seu total de desconto é de: " + td);

        parseInt(sl) = sb - td;
        console.log("Seu salário liquido é de: " + sl);
    }

    function exercicio23(){
        let cel = 0;
        let f = 0;

        cel = parseFloat(prompt("Informe a temperatura em CELSIUS."));
        f = (9*cel + 150) / 5;
        console.log("A temperatura em " + cel + " convertido em Fahrenheit fica: " + f);
    }

    function exercicio24(){
        let raio = 0;
        let alt = 0;

        raio = parseFloat(prompt("Informe o valor de raio."));
        alt = parseFloat(prompt("Informe o valor da altura"));

        volume = 3.14159 * (raio * raio) * alt;
        console.log("O VOLUME da Lata de Óleo é: " + volume);
    }
    
    //Chamando as funções
    

    //Chamando o Método OPERAÇÃO
    operacao();