document.addEventListener("DOMContentLoaded", function(event) {
  const maxColumns = 'T'.charCodeAt(0) - 'A'.charCodeAt(0) + 1
  const maxRows = 37

console.log(maxColumns);
  console.log("DOM fully loaded and parsed");
  const table = createTable()
  const columnHeader = createColumnHeader()
  table.appendChild(columnHeader)
  for (let i = 0; i < maxRows; i++) {
    const tr = createRow(i)
    table.appendChild(tr)
  }
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(table)

  function createTable() {
    const table = createElement('table')
    return table
  }
  function createElement(tag) {
    return document.createElement(tag)
  }
  function createColumnHeader() {
    const tr = createElement('tr')
    let th = createElement('th')
    th.innerText = ' '
    th.classList.add('header')
    tr.appendChild(th)
    for (let i = 0; i < maxColumns; i++) {
      th = createElement('th')
      const code = 'A'.charCodeAt(0) + i
      th.innerText = String.fromCharCode(code)
      th.classList.add('header')
      tr.appendChild(th)
    }
    return tr
  }
  function createRowHeader(index) {
    const th = createElement('th')
    th.classList.add('header')
    th.innerText = index.toString()
    return th
  }
  function createRow(index) {
    const tr = createElement('tr')
    const header = createRowHeader(index + 1)
    tr.appendChild(header)
    for (let i = 0; i < maxColumns; i++) {
      const td = createColumn(index, i)
      tr.appendChild(td)
    }
    return tr
  }
  function createColumn(row, col) {
    const td = createElement('td')
    td.classList.add('cell')
    const input = createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', `${row}_${col}`)
    input.setAttribute('id', `${row}_${col}`)
    td.appendChild(input)
    return td
  }
});
