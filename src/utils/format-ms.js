function ms_formatter(ms) {
  const seconds = Math.floor(ms / 1000);
  let minutes;

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60);
  }

  const formattedMinutes = (minutes >= 0 && minutes <= 9) ? `0${minutes}` : minutes; 
  const formattedSeconds = (seconds % 60 >= 0 && seconds % 60 <= 9) ? `0${seconds % 60}` : seconds % 60; 

  return `${formattedMinutes}:${formattedSeconds}`;
}


export default ms_formatter;