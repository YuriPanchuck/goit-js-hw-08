import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

setCurrentTime();

player.on('timeupdate', throttle(playedTime, 1000));

function playedTime(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}

function setCurrentTime() {
  const savedTimeToPlay = localStorage.getItem('videoplayer-current-time');
  if (savedTimeToPlay) {
    player.setCurrentTime(savedTimeToPlay);
  }
}

