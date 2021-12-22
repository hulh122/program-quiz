function debounce(callback: Function, time: number): Function {
    let timer;
    const that = this;

    return function (...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(that, [...args]);
        }, time);
    };
}

const fn = debounce((time) => {
    console.log(time);
}, 500);

const id = setInterval(fn.bind(this, 2000), 300);
setTimeout(() => {
    clearInterval(id);
}, 2000);
