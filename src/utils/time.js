const msToFull = (ms) => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  hours = hours - days * 24;
  minutes = minutes - days * 24 * 60 - hours * 60;
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
  return `${seconds} s`
  return `${days} d${days > 1 ? "s" : ""} ${hours} h${
    hours > 1 ? "s" : ""
  } ${minutes} m${minutes > 1 ? "s" : ""} ${seconds} s${
    seconds > 1 ? "s" : ""
  }`;
};

export default msToFull;
