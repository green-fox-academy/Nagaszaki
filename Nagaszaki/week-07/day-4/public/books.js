const table = document.querySelector('table');

function appendTableRow(title, author, category, publisher, price){
  const tr = document.createElement('tr');
      const th1 = document.createElement('th');
      const th2 = document.createElement('th');
      const th3 = document.createElement('th');
      const th4 = document.createElement('th');
      const th5 = document.createElement('th');

      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tr.appendChild(th5);

      table.appendChild(tr);

      th1.textContent = title;
      th2.textContent = author;
      th3.textContent = category;
      th4.textContent = publisher;
      th5.textContent = price;
}

function renderTable(){
  const urlParams = new URLSearchParams(window.location.search);
  const allParams = {
    Category : urlParams.get('category'),
    Publisher : urlParams.get('publisher'),
    PriceLowerThan : urlParams.get('plt'),
    PriceGreaterThan : urlParams.get('pgt')
  }

  table.innerText = '';
  appendTableRow('Title','Author','Category','Publisher','Price');
  if(allParams.Category != null && allParams.PriceGreaterThan != null && allParams.Publisher != null && allParams.PriceLowerThan != null){
    fetch(`http://localhost:3000/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(book => {
        if(book.cate_descrip == allParams.Category && book.book_price > allParams.PriceGreaterThan && book.book_price < allParams.PriceLowerThan && book.aut_name == allParams.Publisher){
          appendTableRow(book.book_name,book.aut_name,book.cate_descrip,book.pub_name,book.book_price);
        }
      })
    })
  }else if(allParams.Category != null && allParams.PriceGreaterThan != null && allParams.Publisher == null && allParams.PriceLowerThan != null){
    fetch(`http://localhost:3000/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(book => {
        if(book.cate_descrip.toLowerCase() == allParams.Category && book.book_price > allParams.PriceGreaterThan && book.book_price < allParams.PriceLowerThan){
          appendTableRow(book.book_name,book.aut_name,book.cate_descrip,book.pub_name,book.book_price);
        }
      })
    })
  }else if(allParams.Category != null && allParams.PriceGreaterThan == null && allParams.Publisher == null && allParams.PriceLowerThan != null){
    fetch(`http://localhost:3000/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(book => {
        if(book.cate_descrip.toLowerCase() == allParams.Category && book.book_price < allParams.PriceLowerThan){
          appendTableRow(book.book_name,book.aut_name,book.cate_descrip,book.pub_name,book.book_price);
        }
      })
    })
  } else if(allParams.Category != null && allParams.PriceGreaterThan == null && allParams.Publisher == null && allParams.PriceLowerThan == null){
    fetch(`http://localhost:3000/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(book => {
        if(book.cate_descrip.toLowerCase() == allParams.Category){
          appendTableRow(book.book_name,book.aut_name,book.cate_descrip,book.pub_name,book.book_price);
        }
      })
    })
  } else {
    fetch(`http://localhost:3000/books`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach(book => {
        appendTableRow(book.book_name,book.aut_name,book.cate_descrip,book.pub_name,book.book_price);
      })
    })
  }
}

window.onload = () => {
  renderTable();
}