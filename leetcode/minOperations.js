function minOperations(boxes) {
    const answer = Array(boxes.length).fill(0);
    for (let i = 0; i < boxes.length; i ++) {
        for (let j = 0; j < boxes.length; j ++) {
            answer[i] += boxes[j] === '0' ? 0 : Math.abs(j - i);
        }
    }
    return answer;
};

console.log(minOperations(`110`));
