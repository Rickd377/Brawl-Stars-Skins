document.querySelector('#search-input').
addEventListener('input', filterList);

function filterList() {
    const searchInput = document.querySelector
    ('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.table-row');

    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

let isSorted = false;
let originalOrder = [];

document.querySelector('.filter').addEventListener('click', function() {
  if (!isSorted) {
    originalOrder = Array.from(document.querySelectorAll('.table-row:not(.table-head)'));
    sortList();
    this.style.backgroundColor = '#f1f1f1';
  } else {
    originalOrder.forEach(item => item.parentNode.appendChild(item));
    this.style.backgroundColor = '#fff';
  }
  isSorted = !isSorted;
});

function sortList() {
  const listItems = [...originalOrder];

  listItems.sort((a, b) => a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase()));

  const parent = listItems[0].parentNode;

  listItems.forEach(item => parent.appendChild(item));
}