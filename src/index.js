
exports.min = min = array => array && array.length ? Math.min(...array) : 0;

exports.max = max = array => array && array.length ? Math.max(...array) : 0;

exports.avg = avg = array => array && array.length ? array.reduce((a, b) => a + b) / array.length : 0;