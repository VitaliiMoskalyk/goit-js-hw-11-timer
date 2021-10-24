import './sass/main.scss';
import CountdownTimer from'../src/js/timer';

const timer4Template = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2022'),
});

timer4Template.start();

const timer4Template2 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 24, 2021 11:47:18'),
});

timer4Template2.start()