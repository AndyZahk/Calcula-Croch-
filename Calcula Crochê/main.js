function calcularPreco() {
    const material = parseFloat(document.getElementById('material').value);
    const horas = parseFloat(document.getElementById('horas').value);
    const custoHora = parseFloat(document.getElementById('custoHora').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    // Verifica se algum dos valores é inválido (NaN)
    if (isNaN(material) || isNaN(horas) || isNaN(custoHora) || isNaN(porcentagem)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcula os valores
    const custoTotalHoras = horas * custoHora;
    const custoTotal = material + custoTotalHoras;
    const lucro = (custoTotal * (porcentagem / 100));
    const precoVenda = custoTotal + lucro;

    // Exibe o resultado
    document.getElementById('resultado').innerText = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
}
