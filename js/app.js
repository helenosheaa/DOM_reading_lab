document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    const formInput = document.querySelector('#reading-list');

    const readingItem = document.createElement('p')

    readingItem.textContent = `Title: ${title}, Author: ${author}, Category: ${category}`;

    readingItem.classList.add("reading-item");

    formInput.appendChild(readingItem);

    form.reset();
  });

    const readingList = document.querySelector('#reading-list');

    const button = document.querySelector('#btn');
    button.addEventListener("click", () => {
      while (readingList.firstChild) {
      readingList.removeChild(readingList.firstChild);
      }
    });


})
