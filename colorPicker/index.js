let colorcolumns = document.getElementsByClassName("color-col")

document.getElementById("color-form").addEventListener("submit", function (e) {
    e.preventDefault()
    const hexi = document.getElementById("color").value.slice(1);
    const mode = document.getElementById("scheme").value;
    const format = "json"
    const data = {
        rgb: color,
        format: format,
        mode: scheme
    }
    console.log(hexi, mode)
    fetchColors(hexi, mode)

})



function fetchColors(hexi, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexi}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.colors.length; i++) {
                colorcolumns[i].style.background = data.colors[i].hex.value
                colorcolumns[i].innerHTML = `<p>${data.colors[i].hex.value}</p>`
            }
        })
}