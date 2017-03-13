import * as $ from 'jquery'
export class Container {
    quizItems: any;
    selectedItem: any;

    scoreCount = 0;

    constructor() {
        this.init();
        this.getNextQuestion();
    }

    init() {
        this.quizItems = $('.quiz__item').toArray();
        // this.quizItems = shuffleArray(this.quizItems);
        $('button#migrant').click(this.handleMigrant)
        $('button#refugee').click(this.handleRefugee)
        $('button#next').click(this.getNextQuestion)
    }

    handleMigrant = () => {
        this.checkAnswer('migrant')
    }
    handleRefugee = () => {
        this.checkAnswer('refugee')
    }

    checkAnswer(answer: string) {
        if (answer === $(this.selectedItem).data().answer) {
            this.showCorrectAnswer();
            this.scoreCount++;
        } else {
            this.showInCorrectAnswer()
        }
        this.disableControls();
        $('.quiz__score').text(`Answers correct: ${this.scoreCount}`);

    }

    disableControls() {
        $('.quiz__controls').addClass('locked');
        $('.quiz__mini-score').addClass('is-visible');
    }


    showCorrectAnswer() {
        $(this.selectedItem).find('.is-correct').addClass('is-visible');
        $(this.selectedItem).find('.quiz__item-question').removeClass('is-visible');
    }

    showInCorrectAnswer() {
        $(this.selectedItem).find('.is-incorrect').addClass('is-visible');
        $(this.selectedItem).find('.quiz__item-question').removeClass('is-visible');
    }

    getNextQuestion = () => {
        $('.quiz__item-answer').removeClass('is-visible');
        $('.quiz__controls').removeClass('locked');
        $('.quiz__item').hide();
        if (this.quizItems.length > 0) {
            this.selectedItem = this.quizItems.shift();
            $(this.selectedItem).show();    
        } else {
            
            $('.quiz__item').removeClass('is-visible');
            $('.quiz__controls').hide();
            $('.quiz__item--final').show();
            $('.quiz__mini-score').removeClass('is-visible');
            
        }
        
    }
}


function shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}