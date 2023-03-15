
$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();

    })

    $('#bnt-cancelar').click(function(){
        $('form').slideUp();

    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#nova-imagem').val();
        const novoIntem = $('<li></li>');
        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoIntem);
        $(`
            <div class="over-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="ver imagem tamanho real">
                    ver imagem tamanho real
                </a>
            </div>
        `).appendTo(novoIntem);
        $(novoIntem).appendTo('ul');
        $('#nova-imagem').val('')
    })

})