import './sass/main.scss';
import CountdownTimer from'../src/js/timer';

const timerTemplate = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jul 17, 2022'),
});

timerTemplate.start();

const timerTemplate2 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Oct 24, 2021 19:19:18'),
});

timerTemplate2.start()