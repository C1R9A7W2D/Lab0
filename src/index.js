function integrate_function(f, left, right, n) {
    let res = 0;
    const step = (right - left) / n;
    for (let x = left + step; x <= right; x += step) {
        let x_star = x - step/2;
        res += f(x_star);
    }
    return res  * step;
}

const f = x => 4*x - x*x;

alert("Let's integrate!");
const left = prompt('Нижний предел: ');
const right = prompt('Верхний предел: ');

alert(`Результат интегрирования: ${integrate_function(f, left, right, 5)}`);