const TIMER = {
  clock: document.querySelector('.timer__clock'),
  buttons: document.querySelector('.timer__buttons'),
  seconds: 0,
  timer: null,

    init() {
      this.listener();
    },

    createDateObject(seconds) {
      const data = new Date(seconds * 1000);
      return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
      });
    },

    incrementTimer() {
      this.timer = setInterval(() => {
        this.seconds++;
        this.clock.innerText = this.createDateObject(this.seconds);
      }, 1000);
    },

    start() {
      clearInterval(this.timer);
      this.clock.classList.contains('timer__clock--active') && this.clock.classList.remove('timer__clock--active');
      this.incrementTimer(this.seconds);
    },

    pause() {
      clearInterval(this.timer);
      this.clock.classList.add('timer__clock--active');
    },

    reset() {
      clearInterval(this.timer);
      this.seconds = 0;
      this.clock.classList.contains('timer__clock--active') && this.clock.classList.remove('timer__clock--active');
      this.clock.innerText = '00:00:00';
    },

    listener() {
      this.buttons.addEventListener('click', event => {
        const element = event.target;
        if(element.classList.contains('start')) { this.start(); }
        if(element.classList.contains('pause')) { this.pause(); }
        if(element.classList.contains('reset')) { this.reset(); }
      });
    }
};

(function main(timer) {
    'use strict';

    timer.init();
})(TIMER);
