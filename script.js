const btnEl = document.querySelector('button')
const output = document.getElementById('output').childNodes[0]

btnEl.addEventListener('click', function () {
  const inputVal = document.querySelector('input').value
  output.innerText = inputVal.toUpperCase()
})
