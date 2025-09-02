const canvas = document.getElementById("volleyballGame");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    raio: 15,
    velocidadeX: 4,
    velocidadeY: 4,
    cor: "#FF6347"
};

let jogador = {
    x: 0,
    y: canvas.height / 2 - 50,
    largura: 15,
    altura: 100,
    cor: "#32CD32",
    velocidade: 5
};

let ia = {
    x: canvas.width - 15,
    y: canvas.height / 2 - 50,
    largura: 15,
    altura: 100,
    cor: "#FF8C00",
    velocidade: 4
};

let pontuacaoJogador = 0;
let pontuacaoIA = 0;

// Função para desenhar a bola
function desenharBola() {
    ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.raio, 0, Math.PI * 2);
    ctx.fillStyle = bola.cor;
    ctx.fill();
    ctx.closePath();
}

// Função para desenhar as raquetes
function desenharRaquete(x, y, largura, altura, cor) {
    ctx.beginPath();
    ctx.rect(x, y, largura, altura);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();
}

// Função para desenhar o placar
function desenharPlacar() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Jogador: " + pontuacaoJogador, 20, 30);
    ctx.fillText("IA: " + pontuacaoIA, canvas.width - 150, 30);
}

// Função para atualizar a posição da bola
function atualizarBola() {
    bola.x += bola.velocidadeX;
    bola.y += bola.velocidadeY;

    // Colisão com as paredes superior e inferior
    if (bola.y - bola.raio <= 0 || bola.y + bola.raio >= canvas.height) {
        bola.velocidadeY = -bola.velocidadeY;
    }

    // Colisão com as raquetes
    if (bola.x - bola.raio <= jogador.x + jogador.largura && bola.y >= jogador.y && bola.y <= jogador.y + jogador.altura) {
        bola.velocidadeX = -bola.velocidadeX;
        pontuacaoJogador++;
    }
    if (bola.x + bola.raio >= ia.x && bola.y >= ia.y && bola.y <= ia.y + ia.altura) {
        bola.velocidadeX = -bola.velocidadeX;
        pontuacaoIA++;
    }

    // Se a bola passar de uma raquete (gol)
    if (bola.x - bola.raio <= 0 || bola.x + bola.raio >= canvas.width) {
        resetarBola();
    }
}

// Função para resetar a posição da bola após um gol
function resetarBola() {
    bola.x = canvas.width / 2;
    bola.y = canvas.height / 2;
    bola.velocidadeX = -bola.velocidadeX;
    bola.velocidadeY = 4;
}

// Função para
