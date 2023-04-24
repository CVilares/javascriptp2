let pergunta = {
    titulo: 'Gato',
    alternativa:['Gat','Cat','Gate','Dog'],
    correcta: 1
};
function showquestion (q) {
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent= q.titulo;
}
showquestion(pergunta);
