function throttle(callback: Function, time: number): Function {
    let prev = 0;
    const that = this;

    return function (...args: any[]) {
        const now = +Date.now();
        if (now - prev > time) {
            callback.apply(that, args);
            prev = now;
        }
    }
}

const fn = throttle(() => {
    console.log('触发');
}, 5000);

setInterval(fn, 10);
