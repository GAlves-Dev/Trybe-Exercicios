var grade = 20

if (grade >= 80) {
    message = 'Parabens, Voce foi aprovado';
} else if (grade >= 60 && grade < 80) {
    message = 'Voce esta na lista de espera';
} else {
    message = "Infelismente, reprovou";
};

console.log(message);
