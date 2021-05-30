const removeVowels = (str) => {
    const reg = /[aoeiu]/gi;
    return str.replace(reg, '');
};
CA;
// 95842 length numbers
// city Sacramento
//

const isPaindrome = (str) => {
    let reversedStr = str.split('').reverse().join('');
    return reversedStr === str;
};

console.log(isPaindrome('hello world'));
