export default {
  bind(el, binding, vnode) {
    Util.toggle(el, binding);
  },
  update(el, binding, vnode) {
    Util.toggle(el, binding);
  },
  componentUpdated(el, binding, vnode) {
    Util.toggle(el, binding);
  },
  createElementFromHTML(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    //return div.firstChild;
    return div;
  },
  unbind(el, binding, vnode) {
    Util.toggle(el, binding);
  }
};

let Util = {
  show(el) {
    this.hide(el);
    let box = document.createElement("div");
    box.classList = "spinner";
    //el.style.position = "relative";
    el.style.opacity = "0.6";
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.position = "absolute";
    box.style.top = "0px";
    box.style.left = "0px";
    box.style.display = "flex";
    box.style.alignItems = "center";
    box.style.justifyContent = "center";
    box.style.backgroundImage = "url('/ajax-loader.gif')";
    box.style.backgroundRepeat = "no-repeat";
    box.style.backgroundPosition = "center";

    //box.innerHTML = "<img src='../../assets/spinner.gif'></div>";
    //box.style.backgroundColor = "red";
    el.appendChild(box);
  },
  hide(el) {
    //el.style.position = "";
    let spinner = el.getElementsByClassName("spinner")[0];
    if (spinner && spinner) el.removeChild(spinner);
    el.style.opacity = "1";
  },
  shown(el) {
    return !!el.getElementsByClassName("spinner").lenght;
  },
  toggle(el, binding) {
    this.hide(el);
    if (binding.value) {
      this.show(el);
    }
  }
};
