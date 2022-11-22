let btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
    const value1 = +document.getElementById('num1').value;
    const value2 = +document.getElementById('num2').value;

    let result = document.getElementById('j-result');
    result.textContent = '';

    if (!(value1 >= 1 && value1 <= 10)) {
        result.textContent = 'Номер страницы вне диапазона от 1 до 10';
        return;
    } else if (!(value2 >= 1 && value2 <= 10)) {
        result.textContent = 'Лимит вне диапазона от 1 до 10';
        return;
    } else if (!(value1 >= 1 || value1 <= 10 || value2 >= 1 || value2 <= 10)) {
        result.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10»';
        return;
    } else {
        fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
            .then((response) => {
                document.getElementById('result').src = response.url;
            });
        console.log(result);
    }
})
