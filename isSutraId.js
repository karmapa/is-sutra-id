module.exports = function isSutraId(str) {
  /**
   * jiangkangyur: J1, J8n
   * degekangyur: d1
   * degetengyur: DT1
   * 8thkarmapa: 8K1
   */
  return /^[0-9]*[A-Za-z]+\d+[a-z]?$/.test(str);
}
