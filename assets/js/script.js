let pergunta = {
    titulo: 'Gato',
    alternativas: ['Gat','Cat','Gate','Dog'],
    correcta: 1
};

function mostraquestao(q) {
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;

    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        element.addEventListener('click', function(){
            if(index == q.correcta){
                console.log("Acertou")
            }
            else{
                console.log("Errou")
            }
        })
    })
}
mostraquestao(pergunta);
