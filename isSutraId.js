module.exports = function isSutraId(str) {
  return /^[A-Za-z]\d+$/.test(str);
}
