'use strict';

// const fs = require('fs');
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
});
