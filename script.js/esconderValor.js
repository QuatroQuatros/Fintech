var valorVisivel = true;

  function esconderValor() {
    var valor = document.getElementById('valorTotal');
    var valorEscondido = document.getElementById('valorEscondido');
    var iconPreview = document.getElementById('iconPreview');
    if (valorVisivel) {
        valor.classList.add('hidden');
        valorEscondido.classList.remove('hidden');
        iconPreview.src = '../img/icons/invisible.svg'
        valorVisivel = false;
    } else {
        valorEscondido.classList.add('hidden');
        valor.classList.remove("hidden");
        iconPreview.src = '../img/icons/visible.svg'
        valorVisivel = true;
    }
  }