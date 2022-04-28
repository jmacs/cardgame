const path = require('path');
const fs = require('fs');

const FILE_EXT = '.ts';
const INDEX_FILE_NAME = 'index.ts';
const SRC = path.resolve(__dirname, '../src');

// generate an index.ts for each of these directories
const DIRECTORIES_TO_INDEX = [
    {
        path: `${SRC}/game/cards`,
        exportFunction: defaultExport,
    },
    {
        path: `${SRC}/app/sequences`,
        exportFunction: namedExport,
    },
];

function removeFileExtension(file) {
    return file.replace(/\.[^/.]+$/, '');
}

function namedExport(file) {
    return `export * from './${removeFileExtension(file)}';`;
}

function createExportName(file) {
    return removeFileExtension(file).replace(/[^a-zA-Z0-9/-]+/, '').replace('-', '_');
}

function defaultExport(file) {
    return `export {default as ${createExportName(file)}} from './${removeFileExtension(file)}';`;
}

function isFileMatch(file) {
    return file !== INDEX_FILE_NAME && file.endsWith(FILE_EXT);
}

DIRECTORIES_TO_INDEX.forEach((srcDirectory) => {
    const exportStatements = fs.readdirSync(srcDirectory.path)
        .filter(isFileMatch)
        .map(srcDirectory.exportFunction);

    exportStatements.push('');

    const fileContent = exportStatements.join('\n');
    const indexFilePath = path.join(srcDirectory.path, INDEX_FILE_NAME);

    fs.writeFile(indexFilePath, fileContent, (err) => {
        if (err) {
            console.error(err);
            return process.exit(1);
        }
        console.log(`generated ${indexFilePath}`);
    });
});
