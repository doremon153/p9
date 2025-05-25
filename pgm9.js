const fs = require('fs');
const path = require('path');

function getDirectoryContents(dirPath) {
  const items = [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      items.push({
        name: entry.name,
        type: 'directory',
        contents: getDirectoryContents(fullPath)
      });
    } else if (entry.isFile()) {
      items.push({
        name: entry.name,
        type: 'file'
      });
    }
  });

  return items;
}

// ✅ FIXED path with correct format
const directoryPath = 'C:/Users/anilk/Desktop/MovieGenie';
const result = getDirectoryContents(directoryPath);
console.log(JSON.stringify(result, null, 2));
