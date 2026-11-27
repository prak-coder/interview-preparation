function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const freqObj1 = {};
  const freqObj2 = {};
  for (let char of str1) {
    freqObj1[char] = (freqObj1[char] || 0) + 1;
  }
  console.log(freqObj1);
  for (let char of str2) {
    freqObj2[char] = (freqObj2[char] || 0) + 1;
  }
  console.log(freqObj2);
  for (let char in freqObj1) {
    if (freqObj1[char] !== freqObj2[char]) {
      return false;
    }
  }
  return true;
}
console.log(validAnagram(" ", " "));
console.log(validAnagram("troyy", "royyt"));
console.log(validAnagram("cinema", "iceman"));
console.log(validAnagram("cineme", "iceman"));
