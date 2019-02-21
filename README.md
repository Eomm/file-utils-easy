# file-utils-easy

[![Coverage Status](https://coveralls.io/repos/github/Eomm/file-utils-easy/badge.svg?branch=master)](https://coveralls.io/github/Eomm/file-utils-easy?branch=master)

This is a simply file utils lib.

* [Installation](#Installation)
* [Usage](#Usage)
* [API](#API)
* [Test](#Test)
* [License](#License)


## Installation

```
npm install file-utils-easy
```


## Usage

```js
const fue = require('file-utils-easy');

fue.readDirectoryFiles('path/')
  .then(files => doSomething(files))
  .catch(err => doSomethingElse())

```

## API


* [file-utils-easy](#module_file-utils-easy)
    * [~writeToFile(fileContent, filePath)](#module_file-utils-easy..writeToFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~writeToFileStream(fileStream, filePath)](#module_file-utils-easy..writeToFileStream) ⇒ <code>Promise</code>
    * [~appendToFile(fileContent, filePath)](#module_file-utils-easy..appendToFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~readFileStats(filePath)](#module_file-utils-easy..readFileStats) ⇒ <code>Promise.&lt;fs.Stats&gt;</code>
    * [~readDirectoryFiles(directory)](#module_file-utils-easy..readDirectoryFiles) ⇒ <code>Promise.&lt;array&gt;</code>
    * [~readFile(filePath, [encoding])](#module_file-utils-easy..readFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~readJsonFile(filePath)](#module_file-utils-easy..readJsonFile) ⇒ <code>Promise.&lt;object&gt;</code>
    * [~saveUrlToFile(url, filePath)](#module_file-utils-easy..saveUrlToFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~deleteFile(filePath)](#module_file-utils-easy..deleteFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~deleteDirectoryFiles(directory)](#module_file-utils-easy..deleteDirectoryFiles) ⇒ <code>Promise.&lt;array&gt;</code>
    * [~renameFile(from, to)](#module_file-utils-easy..renameFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~copyFile(from, to)](#module_file-utils-easy..copyFile) ⇒ <code>Promise.&lt;string&gt;</code>
    * [~existFile(filePath)](#module_file-utils-easy..existFile) ⇒ <code>Promise.&lt;string&gt;</code>

<a name="module_file-utils-easy..writeToFile"></a>

### file-utils-easy~writeToFile(fileContent, filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Write a string to a file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the filePath received in input  

| Param | Type | Description |
| --- | --- | --- |
| fileContent | <code>string</code> | the payload of the file |
| filePath | <code>string</code> | path and filename: where store the file |

<a name="module_file-utils-easy..writeToFileStream"></a>

### file-utils-easy~writeToFileStream(fileStream, filePath) ⇒ <code>Promise</code>
Write a stream to a file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise</code> - resolve with the filePath when the stream finish  

| Param | Type | Description |
| --- | --- | --- |
| fileStream | <code>stream</code> | the stream payload |
| filePath | <code>string</code> | path and filename: where store the file |

<a name="module_file-utils-easy..appendToFile"></a>

### file-utils-easy~appendToFile(fileContent, filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Append a string to a file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the filePath received in input  

| Param | Type | Description |
| --- | --- | --- |
| fileContent | <code>string</code> | the payload of the file |
| filePath | <code>string</code> | path and filename: where store the file |

<a name="module_file-utils-easy..readFileStats"></a>

### file-utils-easy~readFileStats(filePath) ⇒ <code>Promise.&lt;fs.Stats&gt;</code>
Read the metadata of the file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;fs.Stats&gt;</code> - a node fs.Stats that provides information about a file  
**See**: https://nodejs.org/api/fs.html#fs_class_fs_stats  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | path and filename: the file to read |

<a name="module_file-utils-easy..readDirectoryFiles"></a>

### file-utils-easy~readDirectoryFiles(directory) ⇒ <code>Promise.&lt;array&gt;</code>
List the files names of a directory, ignoring directories

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;array&gt;</code> - strings names of the files in the input directory  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | path of the directory to read |

<a name="module_file-utils-easy..readFile"></a>

### file-utils-easy~readFile(filePath, [encoding]) ⇒ <code>Promise.&lt;string&gt;</code>
Read the content of a file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the string content of the file  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| filePath | <code>string</code> |  | path and filename: the file to read |
| [encoding] | <code>string</code> | <code>&quot;&#x27;utf8&#x27;&quot;</code> | the encoding file |

<a name="module_file-utils-easy..readJsonFile"></a>

### file-utils-easy~readJsonFile(filePath) ⇒ <code>Promise.&lt;object&gt;</code>
Read the content of a file as a UTF8 string and then parse it as a JSON

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;object&gt;</code> - resolve with the JSON content of the file  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | path and filename: the file to read |

<a name="module_file-utils-easy..saveUrlToFile"></a>

### file-utils-easy~saveUrlToFile(url, filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Save the content of a url to a file

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the filePath saved  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | where will be done an HTTP/GET to get the content |
| filePath | <code>string</code> | path and filename where store the output of url |

<a name="module_file-utils-easy..deleteFile"></a>

### file-utils-easy~deleteFile(filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Delete a file from the file system

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the filePath deleted  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | path and filename: the file to delete |

<a name="module_file-utils-easy..deleteDirectoryFiles"></a>

### file-utils-easy~deleteDirectoryFiles(directory) ⇒ <code>Promise.&lt;array&gt;</code>
Delete all the files in a directory, applying an optional filter

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;array&gt;</code> - resolve with all the files deleted succesfully  

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | path of the directory to clean |

<a name="module_file-utils-easy..renameFile"></a>

### file-utils-easy~renameFile(from, to) ⇒ <code>Promise.&lt;string&gt;</code>
Rename a file to another path

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the destination filePath  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | origin path and filename |
| to | <code>string</code> | destination path and filename |

<a name="module_file-utils-easy..copyFile"></a>

### file-utils-easy~copyFile(from, to) ⇒ <code>Promise.&lt;string&gt;</code>
Copy a file to another path

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the destination filePath  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>string</code> | origin path and filename |
| to | <code>string</code> | destination path and filename |

<a name="module_file-utils-easy..existFile"></a>

### file-utils-easy~existFile(filePath) ⇒ <code>Promise.&lt;string&gt;</code>
Check if a file exists

**Kind**: inner method of [<code>file-utils-easy</code>](#module_file-utils-easy)  
**Returns**: <code>Promise.&lt;string&gt;</code> - resolve with the filePath that exists  
**Throws**:

- <code>error</code> if the file doesn't exist


| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>string</code> | path and filename: the file to control |


## Test

For run the tests simply execute:
```
npm test
```


## License

Copyright [Manuel Spigolon](https://github.com/Eomm), Licensed under [MIT](./LICENSE).
