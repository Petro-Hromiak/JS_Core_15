
const a = $(`#s1`).text()
const b = $(`.s2`).text()
const c = $(`#second i`).text()
const d = $(`q[title]`).text()
const e = $(`a[target='_blank']`).text()
const f = $(`.extra:eq(1)`).text()

alert(a + b + c + d + e + f)


