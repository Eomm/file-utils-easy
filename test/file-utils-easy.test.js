'use strict';

const { Readable } = require('stream');
const fue = require('../index');

describe('write tests', () => {
  it('write relative', () => {
    const fileContent = 'Hello world';
    const filePath = 'hello.txt';
    return expect(fue.writeToFile(fileContent, filePath))
      .resolves.toEqual(filePath);
  });

  it('write in not existing path', () => {
    const fileContent = 'Hello world';
    const filePath = 'output/hello.txt';
    return expect(fue.writeToFile(fileContent, filePath))
      .rejects.toBeDefined();
  });

  it('write stream', () => {
    const contentStream = new Readable();
    contentStream.push('Hello stream');
    contentStream.push(null);

    const filePath = 'test/output/hello-stream.txt';
    return expect(fue.writeToFileStream(contentStream, filePath))
      .resolves.toEqual(filePath);
  });

  it('write stream error', () => {
    const filePath = 'not-exist/stream.txt';
    return expect(fue.writeToFileStream(null, filePath))
      .rejects.toBeDefined();
  });
});

describe('append tests', () => {
  it('create with append relative', async () => {
    const fileContent = 'Hello world';
    const filePath = 'test/assets/append.txt';
    if (await fue.existFile(filePath)) {
      await fue.deleteFile(filePath);
    }
    return expect(fue.appendToFile(fileContent, filePath)).resolves.toEqual(filePath);
  });
  
  it('append relative', async () => {
    const fileContent = 'Hello world';
    const filePath = 'test/assets/append.txt';
    if (await fue.existFile(filePath)) {
      await fue.deleteFile(filePath);
    }
    expect(fue.writeToFile(fileContent, filePath)).resolves.toEqual(filePath);
    const addingContent = ' - this is some added text';
    expect(fue.appendToFile(addingContent, filePath)).resolves.toEqual(filePath);
    return expect(fue.readFile(filePath)).resolves.toEqual(fileContent + addingContent);
  });

  it('append in not existing path', () => {
    const fileContent = 'Hello world';
    const filePath = 'output/not-exist.txt';
    return expect(fue.appendToFile(fileContent, filePath))
      .rejects.toBeDefined();
  });
});

describe('alter tests', () => {
  it('rename file to existing path', () => {
    const fileContent = 'Hello world';
    const from = 'test/assets/alter/from.txt';
    const to = 'test/output/to.txt';

    const flow = fue.writeToFile(fileContent, from)
      .then(saved => fue.renameFile(saved, to))
      .then(fue.existFile);
    return expect(flow).resolves.toEqual(to);
  });

  it('rename file to not existing path', () => {
    const from = 'test/assets/alter/from-constant.txt';
    const to = 'test/output/not-exist/to.txt';

    const flow = fue.renameFile(from, to);
    return expect(flow).rejects.toBeDefined();
  });

  it('copy file with rename to existing path', () => {
    const from = 'test/assets/alter/copy.txt';
    const to = 'test/output/copied.txt';

    const flow = fue.copyFile(from, to)
      .then(fue.existFile);
    return expect(flow).resolves.toEqual(to);
  });

  it('copy file to not existing path', () => {
    const from = 'test/assets/alter/copy.txt';
    const to = 'test/output/not-exist/copied.txt';

    const flow = fue.copyFile(from, to);
    return expect(flow).rejects.toBeDefined();
  });
});

describe('delete tests', () => {
  it('delete existing file', () => {
    const fileContent = 'Hello world';
    const filePath = 'delete-me.txt';
    const flow = fue.writeToFile(fileContent, filePath)
      .then(fue.existFile)
      .then(fue.deleteFile);
    return expect(flow).resolves.toEqual(filePath)
      .then(() => {
        const exist = fue.existFile(filePath);
        expect(exist).rejects.toBeDefined();
      });
  });

  it('delete file inexisting', () => {
    const filePath = 'inexisisting-file';
    return expect(fue.deleteFile(filePath))
      .rejects.toBeDefined();
  });

  it('delete directory files none', () => {
    const path = 'test/assets/noRead';
    return expect(fue.deleteDirectoryFiles(path))
      .resolves.toHaveLength(0);
  });

  it('delete directory files', () => {
    const path = 'test/assets/noRead/also';
    return expect(fue.writeToFile('', `${path}/delete.me`)
      .then(() => fue.writeToFile('', `${path}/also.me`))
      .then(() => fue.deleteDirectoryFiles(path)))
      .resolves.toHaveLength(2);
  });

  it('delete directory files with filter', () => {
    const path = 'test/assets/noRead/also/notThis';
    return expect(fue.writeToFile('', `${path}/delete.me`)
      .then(() => fue.writeToFile('', `${path}/not.me`))
      .then(() => fue.deleteDirectoryFiles(path, fileName => !fileName.startsWith('not'))))
      .resolves.toHaveLength(1);
  });
});

describe('read tests', () => {
  it('file list', () => {
    const path = 'test/assets/';
    return expect(fue.readDirectoryFiles(path))
      .resolves.toHaveLength(4);
  });

  it('file list not existing path', () => {
    const path = 'fail/';
    return expect(fue.readDirectoryFiles(path))
      .rejects.toBeDefined();
  });

  it('read file content', () => {
    const filePath = 'test/assets/readFile.txt';
    return expect(fue.readFile(filePath))
      .resolves.toEqual('hello');
  });

  it('read JSON file', () => {
    const filePath = 'test/assets/readJson.json';
    return expect(fue.readJsonFile(filePath))
      .resolves.toEqual({ hello: 'world' });
  });

  it('file not existing ', () => {
    const filePath = 'not-exist.txt';
    return expect(fue.readFile(filePath))
      .rejects.toBeDefined();
  });
});

describe('url test', () => {
  it('save url https', () => {
    const filePath = 'https-image.jpg';
    const url = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return expect(fue.saveUrlToFile(url, filePath))
      .resolves.toEqual(filePath);
  });

  it('save url http', () => {
    const filePath = 'http-image.jpg';
    const url = 'http://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    return expect(fue.saveUrlToFile(url, filePath))
      .resolves.toEqual(filePath);
  });

  it('malformed url', () => {
    const filePath = 'error.jpg';
    const url = 'malformed-url';
    return expect(fue.saveUrlToFile(url, filePath))
      .rejects.toBeDefined();
  });

  it('inexisting url', () => {
    const filePath = 'error.jpg';
    const url = 'http://www.malformed.url/';
    return expect(fue.saveUrlToFile(url, filePath))
      .rejects.toBeDefined();
  });
});
