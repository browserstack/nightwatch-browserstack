const os = require('os');
const Configstore = require('configstore');
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

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

const config = new Configstore(packageJson.name);
config.delete("localIdentifier")
config.set("localIdentifier", generateLocalIdentifier());

exports.getLocalIdentifier = () => {
  return config.get("localIdentifier");
}
