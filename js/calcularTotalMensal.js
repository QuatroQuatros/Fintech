window.addEventListener('DOMContentLoaded', () => {
    fetch('/arquivos.json') 
        .then(response => response.json())
        .then(data => {
            const valoresDespesas = data.map(item => parseFloat(item.valor.replace(',', '.'))); // Convertendo os valores para números
            const totalDespesas = valoresDespesas.reduce((total, valor) => total + valor, 0);
            
            const totalElement = document.querySelector('.total');
            if (totalElement) {
                totalElement.innerHTML = `Total mensal: <span style="color: ${totalDespesas < 0 ? 'red' : 'green'}">R$ ${totalDespesas.toFixed(2)}</span>`;
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro ao obter os dados do arquivo JSON', error);
        });
});

