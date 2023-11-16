window.addEventListener('DOMContentLoaded', () => {
    const customCSS = `
        .container {
            color: var(--sla);
        }
         
        .linha {
            color: #575757;
        }
        
        .col-4 {
            border-bottom: 20px;
        }
        
        .imagemExemplo {
            width: 20%;
            max-width: 20%;
            min-width: 20%;
        }
        
        .imagemExemplo {
            max-width: 1%;
        }
        
        .nomeDespesa {
            font-size: 20px;
            margin-bottom: 2px;
            color: #fff;
        
        
        .precoDespesa { 
            color: #e24751;
            font-size: 18px;
        }

        .netflix nomeDespesa { 
            color: #e24751;
            font-size: 18px;
        }
        
        .data  {
            color: #e24751;
        }
    `;

    
    const styleElement = document.createElement('style');
    styleElement.innerHTML = customCSS;
    document.head.appendChild(styleElement);

    fetch('/arquivos.json') 
        .then(response => response.json())
        .then(despesasDoBanco => {
            const despesasContainer = document.getElementById('despesas');

            despesasDoBanco.forEach(despesa => {
                const divDespesa = document.createElement('div');
                divDespesa.classList.add('row', 'justify-content-center', 'align-items-center', 'mb-5');

                divDespesa.innerHTML = `
                    <div class="col-4 colunas">
                        <img class="imagemExemplo" src="${despesa.imagem}" alt="">
                    </div>
                    <div class="col-5">
                    <p class="netflix nomeDespesa">${despesa.nome}</p>
                    <h6 class="netflix descricao">${despesa.descricao}</h6>
                    <h6 class="data">${despesa.data}</h6> 
                </div>
                    <div class="col-1 colunas">
                        <p class="netflix precoDespesa">${despesa.valor}</p>
                    </div>
                    <hr class="linha">
                `;

                despesasContainer.appendChild(divDespesa);
            });
        });
});
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