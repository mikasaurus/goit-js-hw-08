import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = ({ seconds } = 0) => {
  localStorage.setItem('videoplayer-current-time', seconds);
};

const currentTime = () => {
  return localStorage.getItem('videoplayer-current-time') || 0;
};

player
  .setCurrentTime(currentTime())
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));
