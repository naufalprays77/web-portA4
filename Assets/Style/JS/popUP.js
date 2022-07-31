function popUP() {
  let modalBtns = [...document.querySelectorAll('.add-books')];

  modalBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = 'block';
    };
  });
  let closeBtns = [...document.querySelectorAll('.close')];
  closeBtns.forEach(function (btn) {
    btn.onclick = function () {
      let modal = btn.closest('.modal');
      modal.style.display = 'none';
    };
  });
}

const modal = document.getElementById('modalBook');
document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('forms-books');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    AddBook();
    modal.style.display = 'none';
    document.getElementById('forms-books').reset();
  });
  if (checkStorage()) {
    loadDatafromStorage();
    refreshDataFromBooks();
  }
});

popUP();
