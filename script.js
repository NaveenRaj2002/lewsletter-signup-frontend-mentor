
const btn = document.querySelector(".btn");
btn.disabled = true;
function validation() {
    const inputEl = document.querySelector(".input-box");
    const errorLabelEl = document.querySelector("#error");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const inpVal = document.querySelector(".input-box").value;
    if (inpVal.match(emailPattern)) {
        inputEl.classList.remove("input-error");
        errorLabelEl.classList.remove("show-error");
        btn.disabled = false;
    } else {
        inputEl.classList.add("input-error");
        errorLabelEl.classList.add("show-error");
        btn.disabled = true;
    }
}