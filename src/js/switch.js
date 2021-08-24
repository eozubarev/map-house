export default class Switch {
    constructor() {
        this.switchBtns = [...document.querySelectorAll('.switch-btn')];
        this.activeClass = 'switch-on';

        this.listeners();
    }

    listeners() {
        for (let i = 0; i < this.switchBtns.length; i++) {
            const switchBtn = this.switchBtns[i];
            switchBtn.addEventListener('click', () => {
                this.toogleSwitchBtn(switchBtn);
            })
            
        }
    }

    toogleSwitchBtn(btn) {
        btn.classList.toggle(this.activeClass);
    }
}
