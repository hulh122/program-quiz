function numSplits(s) {
    let res = 0
    const left = [];
    const right = [];
    const leftStatus = {};
    const rightStatus = {};
    for (let i = 0; i < s.length - 1; i++) {
        if (leftStatus[s[i]]) {
            left.push(left[i - 1]);
        } else {
            left.push((left[i - 1] || 0) + 1);
            leftStatus[s[i]] = true;
        }
    }
    for (let i = s.length - 1; i > 0; i--) {
        if (rightStatus[s[i]]) {
            right.push(right[s.length - i - 2]);
        } else {
            right.push((right[s.length - i - 2] || 0) + 1);
            rightStatus[s[i]] = true;
        }
    }
    for (let i = 0; i < left.length; i++) {
        if (left[i] === right[left.length - i - 1]) {
            res++;
        }
    }
    return res;
};


console.log(numSplits('aacaba'))
