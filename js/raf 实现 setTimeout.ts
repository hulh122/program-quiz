/*
* 题目：用 requestAnimationFrame 实现 setTimeout
* */

const mockSetTimeout = function (callback: Function, time: number) {
    let start;
    let id;

    const fn = (timestamp: number) => {
        if (!start) {
            start = timestamp;
        }
        if (timestamp - start >= time) {
            callback();
            cancelAnimationFrame(id);
        } else {
            id = requestAnimationFrame(fn);
        }
    }

    id = requestAnimationFrame(fn);
}
