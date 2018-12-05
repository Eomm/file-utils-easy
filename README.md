# file-utils-easy

[![Coverage Status](https://coveralls.io/repos/github/Eomm/file-utils-easy/badge.svg?branch=master)](https://coveralls.io/github/Eomm/file-utils-easy?branch=master)

This is a simply file utils lib.

## Installation

```
npm install file-utils-easy
```


## Usage

```js
const fue = require('file-utils-easy');

fue.readDirectoryFiles('path/').then(files => doSomething(files));

```

| Function | Description |
|----------|-------------|
| `writeToFile`         | Write a string to a file
| `writeToFileStream`   | Pipe a stream to a file
| `appendToFile`        | Append a string to a file if already exists, it creates it otherwise
| `readDirectoryFiles`  | Read all the filenames of a directory
| `existFile`           | Check if a file exists
| `readFile`            | Read the string content of a file
| `readFileStats`       | Read the file metadata
| `readJsonFile`        | Read a JSON content of a file
| `saveUrlToFile`       | GET a url and save the content to a file
| `deleteFile`          | Delete a file from the file system
| `deleteDirectoryFiles`| Delete all the files in a directory applying an optional filter on file name
| `renameFile`          | Rename a file
| `copyFile`            | Copy a file to a destination


## Test

For run the tests simply execute:
```
npm test
```


## License
(The MIT License)

Copyright (c) 2018 Manuel Spigolon <behemoth89@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
