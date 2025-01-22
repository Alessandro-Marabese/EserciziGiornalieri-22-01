fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    console.log(responseObj);
    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((bookObj) => {
    console.log(bookObj);

    const row = document.getElementById("book-list");
    bookObj.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");

      col.innerHTML = ` <div class="card">
                    <img src="${book.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.price} €</p>
                        <button type="button" class="btn btn-primary">Scarta</button>
                        <button type="button" class="btn btn-primary">Compra Ora</button>
                    </div>
                </div>`;

      row.appendChild(col);
    });
    const buttons = document.querySelectorAll(".card-body button:first-of-type");
    buttons.forEach(ele => {
        ele.addEventListener("click", function () {
            const cardBody = ele.parentNode;
            const cardElement = cardBody.parentNode;
            const colCard = cardElement.parentNode;
            colCard.classList.add("d-none");            
        })
    });
    const purchaseButtons = document.querySelectorAll(".card-body button:last-child");
    const carrello = document.getElementById("carrello");
    purchaseButtons.forEach(ele =>{
        ele.addEventListener("click", function(){
            const col = document.createElement("div");
            col.classList.add("col");
            const cardBody = ele.parentNode;
            const cardElement = cardBody.parentNode;
            const colCard = cardElement.parentNode;
            col.innerHTML = cardElement.innerHTML;
            colCard.classList.add("d-none");
            carrello.appendChild(col);
        })
    })
})
.catch(err => console.log(err));
