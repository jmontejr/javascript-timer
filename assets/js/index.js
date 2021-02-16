(function timer() {
    'use strict';

    const clock = document.querySelector('.timer__clock');
    const buttons = document.querySelector('.timer__buttons');
    let seconds = 0;
    let timer;

    const createDateObject = seconds => {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const incrementTimer = () => {
        timer = setInterval(() => {
            seconds++;
            clock.innerText = createDateObject(seconds);
        }, 1000);
    };

    const actions = {
        start: function() {
            clearInterval(timer);
            clock.classList.contains('timer__clock--active') && clock.classList.remove('timer__clock--active');
            incrementTimer(seconds);
        },
        pause: function() {
            clearInterval(timer);
            clock.classList.add('timer__clock--active');
        },
        reset: function() {
            clearInterval(timer);
            seconds = 0;
            clock.classList.contains('timer__clock--active') && clock.classList.remove('timer__clock--active');
            clock.innerText = '00:00:00';
        }
    };

    buttons.addEventListener('click', function(event) {
        const element = event.target;
        if(element.classList.contains('start')) { actions['start'](); }
        if(element.classList.contains('pause')) { actions['pause'](); }
        if(element.classList.contains('reset')) { actions['reset'](); }
    });

})();
