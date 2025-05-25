let fs = require('fs');
let path = require('path');

function listDirectoryContents(dirPath) {
  try {
    let result = fs.readdirSync(dirPath).map(item => {
      let fullPath = path.join(dirPath, item);
      return {
        name: item,
        type: fs.statSync(fullPath).isDirectory() ? 'directory' : 'file',
        path: fullPath
      };
    });
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err.message);
  }
}

// Example usage
listDirectoryContents("C:\\Users\\anilk\\Desktop\\power BI");
