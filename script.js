$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
        var novaTarefa = $('#input-tarefa').val().trim();
        if (novaTarefa !== "") {
            $('#lista-tarefa').append('<li>' + novaTarefa + '</li>');
            $('#input-tarefa').val("");
        }
    });

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});