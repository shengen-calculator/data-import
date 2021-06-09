const returnQuantity = (tableName) => {
    return `
        SELECT COUNT(1) AS QTY FROM ${tableName}`;
};
module.exports.returnQuantity = returnQuantity;