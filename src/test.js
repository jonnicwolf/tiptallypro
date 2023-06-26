function keyGen (segments) {
  const rng = (max,min) => Math.floor(Math.random() * (max - min + 1)) + min;
  const charTypeGen = (max) => Math.floor(Math.random() * (max));
  const charTypes = [
    {max: 64, min: 33},
    {max: 90, min: 65},
    {max: 122, min: 97}
  ];
  const resultArr = [];
  let key = '';
  for (let i=0; i<segments; i++) {
    for (let i=1; i <= 8; i++) {
      const type = charTypeGen(charTypes.length);
      const char = rng(charTypes[type].max, charTypes[type].min);
      resultArr.push(String.fromCharCode(char));
      if (resultArr.length === 8) {
        key+=resultArr.join('');
        resultArr.length = 0;
      };
    };
  };
  return key;
};

console.log(keyGen(3))

