// Função para mostrar a receita quando o botão for clicado
function mostrarReceita(tipo) {
    let receitaDescricao = '';

    if (tipo === 'macarrao') {
        receitaDescricao = `
            <h3>Macarrão ao Alho e Óleo</h3>
            <p>Ingredientes: 250g de macarrão, 4 dentes de alho, 2 colheres de sopa de azeite, sal e pimenta a gosto.</p>
            <p>Modo de preparo: Cozinhe o macarrão. Em uma frigideira, aqueça o azeite, adicione o alho picado e frite até dourar. Misture com o macarrão e sirva!</p>
        `;
    } else if (tipo === 'bolo') {
        receitaDescricao = `
            <h3>Bolo de Chocolate</h3>
            <p>Ingredientes: 3 ovos, 2 xícaras de açúcar, 1 xícara de leite, 2 xícaras de farinha, 1 xícara de cacau em pó.</p>
            <p>Modo de preparo: Misture todos os ingredientes, despeje em uma forma untada e asse por 30 minutos a 180°C.</p>
        `;
    }

    // Exibe a descrição da receita na tela
    const receitaContainer = document.createElement('div');
    receitaContainer.classList.add('receita-detalhada');
    receitaContainer.innerHTML = receitaDescricao;
    
    // Adiciona a receita detalhada abaixo da receita
    document.getElementById('receitas').appendChild(receitaContainer);
}

// Formulário de Contato
const formContato = document.getElementById('formContato');

formContato.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert('Obrigado pelo seu contato, ' + nome + '! Em breve responderemos seu e-mail.');
        formContato.reset(); // Limpa o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
