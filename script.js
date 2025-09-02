// Função para mostrar a receita quando o botão for clicado
function mostrarReceita(tipo) {
    let receitaDescricao = '';

    if (tipo === 'bolo-cafe') {
        receitaDescricao = `
            <h3>Bolo de Café</h3>
            <p>Ingredientes: 3 colheres de sopa de café solúvel, 2 xícaras de açúcar, 2 xícaras de farinha de trigo, 3 ovos, 1 xícara de óleo, 1 colher de sopa de fermento em pó.</p>
            <p>Modo de preparo: Bata todos os ingredientes no liquidificador, coloque em uma forma untada e asse em forno pré-aquecido a 180°C por 40 minutos.</p>
        `;
    } else if (tipo === 'trufas') {
        receitaDescricao = `
            <h3>Trufas de Chocolate</h3>
            <p>Ingredientes: 1 lata de leite condensado, 1 xícara de creme de leite, 200g de chocolate meio amargo, cacau em pó para cobrir.</p>
            <p>Modo de preparo: Derreta o chocolate e misture com o leite condensado e o creme de leite. Faça bolinhas e passe no cacau em pó. Deixe na geladeira por 1 hora.</p>
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
    event.preventDefault(); // Previne
