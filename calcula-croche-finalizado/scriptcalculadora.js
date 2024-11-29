// Função para calcular o preço de venda
function calcularPreco() {
    // Captura os valores dos inputs
    const material = parseFloat(document.getElementById('material').value);
    const horas = parseFloat(document.getElementById('horas').value);
    const custoHora = parseFloat(document.getElementById('custoHora').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    // Verifica se algum campo está vazio ou possui valor inválido
    if (isNaN(material) || isNaN(horas) || isNaN(custoHora) || isNaN(porcentagem)) {
        document.getElementById('resultado').innerHTML = `<span style="color: red;">Por favor, preencha todos os campos corretamente.</span>`;
        document.getElementById('resultado').style.display = 'block';
        return;
    }

    // Calcula os valores
    const custoTotalHoras = horas * custoHora;
    const custoTotal = material + custoTotalHoras;
    const lucro = custoTotal * (porcentagem / 100);
    const precoVenda = custoTotal + lucro;

    // Exibe o resultado diretamente no HTML
    document.getElementById('resultado').innerHTML = `
        <p><strong>Preço de Venda:</strong> R$ ${precoVenda.toFixed(2)}</p>
        <p>Detalhamento:</p>
        <ul>
            <li>Material: R$ ${material.toFixed(2)}</li>
            <li>Horas Trabalhadas: ${horas}h</li>
            <li>Custo por Hora: R$ ${custoHora.toFixed(2)}</li>
            <li>Lucro (${porcentagem}%): R$ ${lucro.toFixed(2)}</li>
        </ul>
    `;
    document.getElementById('resultado').style.display = 'block'; // Torna visível o resultado
}

// Função para limpar os campos e o resultado
function limparCampos() {
    document.getElementById('nomePeca').value = '';
    document.getElementById('material').value = '';
    document.getElementById('horas').value = '';
    document.getElementById('custoHora').value = '';
    document.getElementById('porcentagem').value = '';
    document.getElementById('resultado').innerHTML = 'O preço será exibido aqui';
    document.getElementById('resultado').style.display = 'none'; // Oculta o resultado
}

// Funções para a barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        overlay.style.display = 'none';
    } else {
        sidebar.style.left = '0px';
        overlay.style.display = 'block';
    }
}

function closeSidebar() {
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('overlay').style.display = 'none';
}
