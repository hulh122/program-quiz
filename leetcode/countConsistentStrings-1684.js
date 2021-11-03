function countConsistentStrings(allowed, words) {
    let res = 0;
    const allowedList = allowed.split('');
    words.forEach(word => {
        if (word.split('').every(item => allowedList.includes(item))) {
            res++;
        }
    });
    return res;
};

console.log(countConsistentStrings('ab', ["ad","bd","aaab","baa","badab"]))
