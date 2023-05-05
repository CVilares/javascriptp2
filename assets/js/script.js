let perguntas = [
  {
    titulo: 'Gato',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correcta: 1
  },
  {
    titulo: 'pato',
    alternativas: ['duck', 'Cat', 'Gate', 'Dog'],
    correcta: 0
  },
  {
    titulo: 'cao',
    alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
    correcta: 3
  },
  {
    titulo: 'passaro',
    alternativas: ['Gat', 'bird', 'Gate', 'Dog'],
    correcta: 1
  },
  {
    titulo: 'lagarto',
    alternativas: ['Gat', 'lizard', 'Gate', 'Dog'],
    correcta: 1
  },
  {
    titulo: 'leao',
    alternativas: ['Gat', 'Cat', 'lion', 'Dog'],
    correcta: 2
  }
];

let app = {
  totalscore: 0,
  Atualpos: 0,
  
  start: function () {
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element, index) => {
      element.addEventListener('click', () => {
        this.checkAnswer(index);
      });
    });
    this.mostraquestao(perguntas[this.Atualpos]);
  },

  mostraquestao: function (q) {
    this.qatual = q;
    //showing title
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    //showing alternatives
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function (element, index) {
      element.textContent = q.alternativas[index];
    });
  },

  nextquestion: function (user) {
    this.Atualpos++;
    if (this.Atualpos == perguntas.length) {
      this.Atualpos = 0;
    }
  },

  checkAnswer: function (user) {
    if (this.qatual.correcta == user) {
      console.log('correcta');
      this.totalscore++;
    } else {
      console.log('Errada');
    }
    this.updateScore();
    this.nextquestion();
    this.mostraquestao(perguntas[this.Atualpos]);
  },

  updateScore: function () {
    let scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Your score is: ${this.totalscore}`;
  },

  showResult : function(correcta){
    let resultDiv = document.getElementById ('result')
    let result=''
  if (correcta == true){
    result = 'correct answer'
  }
  else{
    let pergunta = perguntas[this.Atualpos];
    let cindice = pergunta.correcta;
    let ctexto = pergunta.alternativas[index];
    result= 'wrong answer ${cindice.ctexto}';

  }

}
}


app.start();
