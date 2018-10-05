'use strict';

const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

/**
 * Write a string to a file
 * @param {string} fileContent the payload of the file
 * @param {string} filePath path and filename: where store the file
 * @returns {Promise<string>} resolve with the filePath received in input
 */
function writeToFile(fileContent, filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContent, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(filePath);
      }
    });
  });
}


/**
 * Write a stream to a file
 * @param {stream} fileStream the stream payload
 * @param {string} filePath path and filename: where store the file
 * @returns {Promise} resolve with the filePath received in input
 */
function writeToFileStream(fileStream, filePath) {
  return new Promise((resolve, reject) => {
    const writerStream = fs.createWriteStream(filePath)
      .on('finish', () => resolve(filePath))
      .on('error', err => reject(err));
    fileStream.pipe(writerStream);
  });
}


/**
 * Read the metadata of the file
 * @param {string} filePath path and filename: the file to read
 */
function readFileStats(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, fstat) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(fstat);
    });
  });
}


/**
 * List the file names of a content of a directory, ignoring directories
 * @param {string} directory path of the directory to read
 * @returns {Promise<array>} names of the files in the input directory
 */
function readDirectoryFiles(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const isFile = fileName => readFileStats(path.join(directory, fileName))
        .then((fstat) => {
          if (fstat.isFile()) {
            return fileName;
          }
          return null;
        });

      Promise.all(files.map(isFile))
        .then(fileList => resolve(fileList.filter(f => f !== null)))
        .catch(reject);
    });
  });
}


/**
 * Read the content of a file as a UTF8 string
 * @param {string} filePath path and filename: the file to read
 * @returns {Promise<string>} resolve with the string content of the file
 */
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}


/**
 * Read the content of a file as a UTF8 string and then parse it as a JSON
 * @param {string} filePath path and filename: the file to read
 * @returns {Promise<object>} resolve with the JSON content of the file
 */
function readJsonFile(filePath) {
  return readFile(filePath).then(content => JSON.parse(content));
}


/**
 * Save the content of a url to a file
 * @param {string} url where to GET the content
 * @param {string} filePath path and filename: the file to save
 * @returns {Promise<string>} resolve with the filePath
 */
function saveUrlToFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const outFile = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, (response) => {
      response.pipe(outFile);
      response.on('end', () => resolve(filePath));
      response.on('error', (err) => {
        // outFile.destroy();
        // fs.unlinkSync(filePath);
        reject(err);
      });
    })
      .on('error', (err) => {
        reject(err);
      });
  });
}


/**
 * Delete a file from the file system
 * @param {string} filePath path and filename: the file to delete
 * @returns {Promise<string>} resolve with the filePath deleted
 */
function deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      }
      resolve(filePath);
    });
  });
}


/**
 * Delete all the files in a directory, applying an optional filter
 * @param {string} directory path of the directory to clean
 * @returns {Promise<array>} resolve with all the files deleted succesfully
 */
function deleteDirectoryFiles(directory, filter = () => true) {
  return readDirectoryFiles(directory)
    .then((files) => {
      const quietDelete = f => deleteFile(path.join(directory, f)).catch(() => null);
      const deletingFiles = files.filter(filter).map(quietDelete);
      return Promise.all(deletingFiles).then(deleted => deleted.filter(d => d !== null));
    });
}


module.exports = Object.freeze({
  writeToFile,
  writeToFileStream,
  readDirectoryFiles,
  readFile,
  readJsonFile,
  saveUrlToFile,
  deleteFile,
  deleteDirectoryFiles,
  readFileStats,
});
