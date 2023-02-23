const os = require('os');
const Configstore = require('configstore');
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const config = new Configstore(packageJson.name);

exports.generateLocalIdentifier = () => {
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
  config.delete("localIdentifier")
  config.set("localIdentifier", `${formattedDate}_${hostname}_${randomChars}`);
  return this.getLocalIdentifier();
}



exports.getLocalIdentifier = () => {
  return config.get("localIdentifier");
}
