const dropTemporaryTable = (tableName) => {
    return `
        DROP TABLE ${tableName}`;
};
module.exports.dropTemporaryTable = dropTemporaryTable;