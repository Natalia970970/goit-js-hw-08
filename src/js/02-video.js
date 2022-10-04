import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onTimeUpdate({seconds}) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const currTime = localStorage.getItem("videoplayer-current-time");

if (currTime) {
    player.setCurrentTime(currTime);
}
