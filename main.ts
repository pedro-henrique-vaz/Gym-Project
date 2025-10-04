// Define a estrutura (interface) para os dados de um aluno graduado
interface AlunoGraduado {
    nome: string;
    fotoUrl: string;
    dataGraduacao: string;
    modalidade: string; 
    grau: string;
    nota: string;
    descricao: string;
}

// Dados de exemplo (simulando uma chamada de API)
const dadosAlunos: AlunoGraduado[] = [
    {
        nome: "Alexandre Silva",
        fotoUrl: "https://via.placeholder.com/300x200?text=Kickboxing", 
        dataGraduacao: "10/06/2025",
        modalidade: "Kickboxing", 
        grau: "Faixa Preta 1º Dan",
        nota: "9.5",
        descricao: "Dominante no low-kick e excelente footwork. Classificado para o Nacional.",
    },
    {
        nome: "Bruna Costa",
        fotoUrl: "https://via.placeholder.com/300x200?text=Muay+Thai", 
        dataGraduacao: "10/06/2025",
        modalidade: "Muay Thai", 
        grau: "Prajied Azul",
        nota: "9.8",
        descricao: "Performance agressiva e domínio total das sequências de clinch e joelhadas. Destaque do ano.",
    },
    {
        nome: "Carlos Eduardo",
        fotoUrl: "https://via.placeholder.com/300x200?text=Boxe", 
        dataGraduacao: "10/06/2025",
        modalidade: "Boxe", 
        grau: "Nível Avançado",
        nota: "9.0",
        descricao: "Progressão notável em defesa e precisão nos jabs e diretos. Foco na próxima competição.",
    },
];


// Garante que o script só rode após o HTML estar carregado.
document.addEventListener('DOMContentLoaded', () => {

    // --- Atualização Automática do Ano ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear.toString();
        console.log(`Ano do Copyright atualizado para: ${currentYear}`);
    }

    // --- Renderização Dinâmica dos Cards de Alunos ---
    const container = document.getElementById('aluno-cards-container');

    if (container) {
        // Itera sobre os dados dos alunos e cria o HTML para cada um
        dadosAlunos.forEach(aluno => {
            const cardHtml = `
                <div class="aluno-card">
                    <img src="${aluno.fotoUrl}" alt="Foto de ${aluno.nome}">
                    <h3>${aluno.nome}</h3>
                    <p><strong>Modalidade:</strong> ${aluno.modalidade}</p>
                    <p><strong>Grau:</strong> ${aluno.grau}</p>
                    <p><strong>Graduação:</strong> ${aluno.dataGraduacao}</p>
                    <p><strong>Nota:</strong> <span class="nota">${aluno.nota}</span></p>
                    <p><strong>Avaliação:</strong> ${aluno.descricao}</p>
                </div>
            `;
            // Adiciona o novo card ao contêiner
            container.innerHTML += cardHtml;
        });

        console.log(`Foram renderizados ${dadosAlunos.length} cards de alunos.`);
    }
    
    // --- 3. Lógica do Botão (Exemplo de Interatividade) ---
    const filiacaoButton = document.querySelector('.btn-primary');
    if (filiacaoButton) {
        filiacaoButton.addEventListener('click', (event: Event) => {
            event.preventDefault(); 
            alert('Aguarde nossa equipe de filiação entrar em contato. O formulário de filiação será em breve adicionado aqui!');
        });
    }

});