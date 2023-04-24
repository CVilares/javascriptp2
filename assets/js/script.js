let pergunta = {
    titulo: 'qual a capital de portugal?'
    alternativa:['lisbon','porto','ermesinde','coimbra'],
    correcta: 0
};
function showquestion (q) {
    let titleDiv= document.getElementById('titulo');
    titleDiv.textContent= q.titulo;
}
showquestion(pergunta);