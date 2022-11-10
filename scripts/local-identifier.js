const os = require('os');

const generateLocalIdentifier = () => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false})
    .format(new Date())
    .replace(/ |, /g, '_')
    .replace(':', '');
  const hostname = os.hostname();
  const randomChars = Math.random().toString(36).slice(2, 6);
  return `${formattedDate}_${hostname}_${randomChars}`;
}

let localIdentifier = null;

exports.getLocalIdentifier = () => {
  if (!localIdentifier) {
    localIdentifier = generateLocalIdentifier();
  }
  return localIdentifier;
}
