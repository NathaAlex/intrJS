function verificarTabela(){
    var tabela = document.getElementById('tabela');

    if (tabela == null) {
        tabela = document.createElement('table');
        tabela.id = 'tabela';
        var body = document.querySelector('body');
        body.appendChild(tabela);
        var thead = document.createElement('thead');
        tabela.appendChild(thead);

        var th1 = document.createElement('th');
        th1.innerText = 'Matricula';
        thead.appendChild(th1);

        var th2 = document.createElement('th');
        th2.innerText = 'Nome';
        thead.appendChild(th2);

        var th3 = document.createElement('th');
        th3.innerText = 'Faltas';
        thead.appendChild(th3);
        
        var th4 = document.createElement('th');
        th4.innerText = 'Nota B1';
        thead.appendChild(th4);

        var th5 = document.createElement('th');
        th5.innerText = 'Nota B2';
        thead.appendChild(th5);

        var th6 = document.createElement('th');
        th6.innerText = 'Média Parcial';
        thead.appendChild(th6);
        
        var th7 = document.createElement('th');
        th7.innerText = 'Nota PR';
        thead.appendChild(th7);
        
        var th8 = document.createElement('th');
        th8.innerText = 'Média final';
        thead.appendChild(th8);
        
        var th9 = document.createElement('th');
        th9.innerText = 'Situação';
        thead.appendChild(th9);
    }
    return tabela;
}

function inserirAluno(totalAulas) {

    var aluno = {};
    var tabela = verificarTabela();
    
    aluno.matricula = prompt('Digite a matricula do aluno...');
    aluno.nome = promtp('Digite o nome do aluno');
    aluno.faltas = parseInt(prompt('Digite a quantidade de faltas'));
    aluno.notab1 = parseFloat(prompt('Digite a nota B1'))
    aluno.notab2 = parseFloat(prompt('Digite a nota B2'))
    aluno.mediaPacial = (aluno.notab1 + aluno.notab2) / 2;
    var percentFaltas = aluno.faltas / totalAulas;
    if (percentFaltas > 0.25){
        aluno.situacao = 'reprovado por falta';
        aluno.notaPR = '-';
        aluno.mediaFinal = aluno.mediaPacial;

    } else{
        if(aluno.mediaPacial >= 7){
            aluno.mediaFinal = aluno.mediaPacial;
            aluno.situacao = 'Aprovado';
            aluno.notaPR = '-';
        } else {
            aluno.notaPR = parseFloat(prompt('Digite a nota da prova de recuperação...'));
            aluno.mediaFinal = (aluno.mediaPacial + aluno.notaPR) / 2
            if (aluno.mediaFinal >=5){
                aluno.situacao = "APROVADO";
            } else {
                aluno.situacao = 'REPROVADO';
            }
        }
    }
}

function inserirAlunoTabela(){
    var linha = tabela.insertRow(-1);
}