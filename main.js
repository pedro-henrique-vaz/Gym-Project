var dadosAlunos = [
    {
        nome: "Gabriel Santana",
        fotoUrl: "https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg",
        dataGraduacao: "10/06/2025",
        modalidade: "Kickboxing",
        grau: "Faixa Preta 1º Dan",
        nota: "9.5",
        descricao: "Dominante no low-kick e excelente footwork.",
    },
    {
        nome: "Bruna Costa",
        fotoUrl: "https://st.depositphotos.com/1224365/2485/i/600/depositphotos_24858345-stock-photo-close-up-of-a-normal.jpg",
        dataGraduacao: "10/06/2025",
        modalidade: "Muay Thai",
        grau: "Prajied Azul",
        nota: "9.8",
        descricao: "Performance agressiva e domínio total das sequências de clinch e joelhadas.",
    },
    {
        nome: "Pedro Henrique",
        fotoUrl: "https://st.depositphotos.com/1224365/2498/i/450/depositphotos_24980235-stock-photo-portrait-of-a-normal-man.jpg",
        dataGraduacao: "10/06/2025",
        modalidade: "Boxe",
        grau: "Nível Avançado",
        nota: "9.0",
        descricao: "Progressão notável em defesa e precisão nos jabs e diretos.",
    },
];

function rolarSuavemente(posicaoAlvo, duracao = 800) {
    const inicioY = window.scrollY;
    const distancia = posicaoAlvo - inicioY;
    const tempoInicial = performance.now();

    function passo(tempoAtual) {
        const tempoPassado = tempoAtual - tempoInicial;
        const progresso = Math.min(tempoPassado / duracao, 1);
        
        const suavizacao = progresso < 0.5 
            ? 2 * progresso * progresso 
            : -1 + (4 - 2 * progresso) * progresso; 

        window.scrollTo(0, inicioY + distancia * suavizacao);

        if (progresso < 1) {
            window.requestAnimationFrame(passo);
        }
    }

    window.requestAnimationFrame(passo);
}

function tratarRolagem(evento) {
    if (this.hash !== "") {
        evento.preventDefault();

        const seletorHash = this.hash;
        const elementoAlvo = document.querySelector(seletorHash);

        if (elementoAlvo) {
            const alturaCabecalho = document.querySelector('.app-header').offsetHeight;
            const posicaoAlvo = elementoAlvo.getBoundingClientRect().top + window.scrollY - alturaCabecalho;

            rolarSuavemente(posicaoAlvo);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var botaoTopo = document.getElementById('scrollTopBtn');
    
    var spanAno = document.getElementById('current-year');
    if (spanAno) {
        var anoAtual = new Date().getFullYear();
        spanAno.textContent = anoAtual.toString();
        console.log("Ano do Copyright atualizado para: ".concat(anoAtual));
    }

    var container = document.getElementById('aluno-cards-container');
    if (container) {
        dadosAlunos.forEach(function (aluno) {
            var htmlCard = "\n \t\t\t\t<div class=\"aluno-card\">\n \t\t\t\t\t<img src=\"".concat(aluno.fotoUrl, "\" alt=\"Foto de ").concat(aluno.nome, "\" onerror=\"this.onerror=null;this.src='https://placehold.co/300x200/2a2a2a/f0f0f0?text=Foto'\" />\n \t\t\t\t\t<h3>").concat(aluno.nome, "</h3>\n \t\t\t\t\t<p><strong>Modalidade:</strong> ").concat(aluno.modalidade, "</p>\n \t\t\t\t\t<p><strong>Grau:</strong> ").concat(aluno.grau, "</p>\n \t\t\t\t\t<p><strong>Gradua\u00E7\u00e3o:</strong> ").concat(aluno.dataGraduacao, "</p>\n \t\t\t\t\t<p><strong>Nota:</strong> <span class=\"nota\">").concat(aluno.nota, "</span></p>\n \t\t\t\t\t<p><strong>Avalia\u00e7\u00e3o:</strong> ").concat(aluno.descricao, "</p>\n \t\t\t\t</div>\n \t\t\t");
            container.innerHTML += htmlCard;
        });
        console.log("Foram renderizados ".concat(dadosAlunos.length, " cards de alunos."));
    }

    var botaoFiliacao = document.querySelector('.btn-primary');
    if (botaoFiliacao) {
        botaoFiliacao.addEventListener('click', function (evento) {
            evento.preventDefault();
            console.log('Botão de filiação clicado. Implemente um modal personalizado aqui!');
            alert('Teste!');
        });
    }

    if (botaoTopo) {
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                botaoTopo.classList.add('show');
            } else {
                botaoTopo.classList.remove('show');
            }
        };

        botaoTopo.addEventListener('click', function() {
            rolarSuavemente(0); 
        });
        
        window.onscroll(); 
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(ancora => {
        ancora.addEventListener('click', tratarRolagem);
    });
});