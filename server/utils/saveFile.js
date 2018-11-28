const fs = require('fs');
const getFileExtension = require('file-extension');

const saveFile = (file) => {
  const { stream, filename } = file;
  const extension = getFileExtension(filename);
  const newFilename = `tea${new Date().getTime()}.${extension}`;

  return new Promise((resolve, reject) => {
    const pathToFile = `${process.cwd()}/images/${newFilename}`;
    const writeStream = stream.pipe(fs.createWriteStream(pathToFile));

    writeStream.on('finish', () => {
      resolve({ urlToFile: `http://localhost:5000/${newFilename}`, filename: newFilename });
    });

    writeStream.on('error', (err) => {
      reject(err);
    });
  });
};

module.exports = saveFile;
