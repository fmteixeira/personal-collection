const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    // return index === 0 ? match.toLowerCase() : match.toUpperCase();
    return match.toUpperCase();
  });
};

module.exports = {
  camelize,
};
