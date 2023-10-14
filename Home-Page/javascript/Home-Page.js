


// Get the new books from the JSON server
fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(books => {
    if (books.length > 0) {
      var booksArr = books;
      var newBooks = document.getElementById("newBooks");
      // var visibleBooks = 5;
      var currentStart = 0;
      var currentEnd = 5;

      function renderBooks() {
        newBooks.innerHTML = "";
        var visibleBooksArr = booksArr.slice(currentStart, currentEnd);

        visibleBooksArr.forEach((book) => {
          var newBooks_card = document.createElement('div');
          newBooks_card.classList.add('newBooks_card');
          newBooks_card.innerHTML = `
          
            <img class="" src="${book.image}" alt="cover" width="190rem" height="280rem">
            <p class="newBooks-card_text">${book.author}</p>
            <h1 class="newBooks-card_title">${book.title}</h1>           
            <i class="fa-solid fa-heart"></i>`;
          newBooks.appendChild(newBooks_card);
        });
      }

      renderBooks();
// End Get the newBooks from the JSON server

   

// Handel the slider in NewBooks-cards section 
      var arrowBtns = document.querySelectorAll('.newBooks-scroll i');
      arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.id === "left" && currentStart > 0) {
            currentStart -= 1;
            currentEnd -= 1;
          } else if (btn.id === "right" && currentEnd < booksArr.length) {
            currentStart += 1;
            currentEnd += 1;
          }
          renderBooks();

        });
      });
    }
  });
// End Handel the slider in NewBooks-cards section 
