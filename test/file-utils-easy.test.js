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


describe('read tests', () => {
  it('file list', () => {
    const path = 'test/assets/';
    return expect(fue.readDirectoryFiles(path))
      .resolves.toHaveLength(3);
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
