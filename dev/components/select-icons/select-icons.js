function SelectIcons(el) {
    this.el = el;
    this.toggle = this.el.querySelector("[data-icons-toggle]");
    this.valueEl = this.el.querySelector("[data-icons-value]");
    this.current = this.el.querySelector("[data-icons-current]");
    this.list = this.el.querySelector("[data-icons-list]");

    this.init();
}

SelectIcons.prototype.init = function () {
    const initValue = this.el.querySelector("[data-icons-item]").dataset.iconsItem;
    this.changeValue(initValue);

    this.list.addEventListener("click", (e) => {
        const iconsItem = e.target.closest("[data-icons-item]");

        if (!iconsItem) return;

        const itemValue = iconsItem.dataset.iconsItem;
        this.changeValue(itemValue);
        this.clear();
    });

    this.toggle.addEventListener("click", () => {
        this.toggleValue();
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest("[data-icons]")) {
        this.clear();
        return;
        }
    });
};

SelectIcons.prototype.changeValue = function (val) {
    this.current.src = `img/${val}.png`;
    this.valueEl.value = val;
    let classList = document.body.className.split(" ");
    classList = classList.filter((item) => !item.startsWith("icons-"));
    classList.push(`icons-${val}`);
    document.body.className = classList.join(" ");
};

SelectIcons.prototype.toggleValue = function () {
    this.el.classList.toggle("opened");
};

SelectIcons.prototype.clear = function () {
    this.el.classList.remove("opened");
};
