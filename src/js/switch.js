export default class Switch {
    constructor(title, onSwitch) {
        let div = addElement(title)
        this.onSwitch = onSwitch;
        this.element = div.querySelector(".switch-btn")
        this.activeClass = 'switch-on';
        this.element.classList.toggle(this.activeClass);
        this.setup();
        
    }

    setup() {
            this.element.addEventListener('click', () => {
                let isOn = this.element.classList.toggle(this.activeClass);
                this.onSwitch(isOn);
            })
    }
}

function addElement(title) {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    let div = document.createElement("div");
    div.className = "switch-btns__item"
        div.innerHTML = "<div class=\"switch-btns__item\"> <h3>"+ title + "</h3><div class=\"switch-btn\" id=\"switch\"></div></div>";

    // Добавляем только что созданный элемент в дерево DOM

    let container = document.querySelector(".switch-btns__container");
    container.appendChild(div);
    return div
  }