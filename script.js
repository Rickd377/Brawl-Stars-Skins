//search
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

//sort
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


// scrollbtn
let mybutton = document.getElementById("scrollToTop");

// Wanneer de gebruiker 20px van de top van het document scrollt, toon de knop
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Wanneer de gebruiker op de knop klikt, scroll naar de top van het document
mybutton.onclick = function() {topFunction()};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
