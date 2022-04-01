/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => button.remove());
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (let elem of arr) {
        let li = document.createElement('li');
        li.textContent = elem;
        li.addEventListener('mouseover', () => li.setAttribute('title', elem));
        ul.appendChild(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    document.body.appendChild(a);
    a.addEventListener('click', () => {
        let link = a.getAttribute('href');
        if (!a.textContent.includes(link)) {
            a.textContent += ` ${link}`;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<ul><li>Пункт</li></ul><button>Добавить пункт</button>',
    );

    let ul = document.querySelector('ul');
    ul.addEventListener('click', (elem) => (elem.target.textContent += '!'));

    let button = document.querySelector('button');
    button.addEventListener('click', () => {
        let elem = document.createElement('li');
        elem.textContent = 'Пункт';
        ul.append(elem);
    });
}
