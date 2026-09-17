function integrate_function(f, left, right, n) {
    let res = 0;
    const step = (right - left) / n;
    for (let x = left + step; x <= right; x += step) {
        let x_star = x - step/2;
        res += f(x_star);
    }
    //alert(res);
    return res * step;
}

const f = x => 4*x - x*x;
const N = 10000;

alert("Let's integrate!");
const left = Number(prompt('Нижний предел: '));
const right = Number(prompt('Верхний предел: '));
if (left >= right)
    alert("Нижний предел не может быть больше верхнего!")

alert(`Результат интегрирования: ${integrate_function(f, left, right, N)}`);
