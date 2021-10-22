import './sass/main.scss';
import CountdownTimer from'../src/js/timer';

const timer4Template = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});

