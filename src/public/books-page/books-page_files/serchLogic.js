const inputElement = document.getElementById('search');
const listView = document.getElementById('list');
const search = document.getElementById('dropdown')
let selectedValue = "title";
var value = '';


search.addEventListener('change', () => {
    selectedValue = search.value
})


inputElement.addEventListener('input', function() {
    listView.innerHTML = '';
    value = inputElement.value;

    // Виклик функції для відправки запиту тільки якщо введено значення
    if (value.trim() !== '') {
        $('.loader').show();
        const text = value.replace(/(^\s+|\s+$)/g, '');
        sendRequest(selectedValue, text);
        $('#list').show()
        $('.number_found').text(1 + " " + 10);
    } else {
        $('#list').hide()
    }
    setTimeout(function() {
        $('.loader').hide();
    }, 300);
});

/* ------------------------------- Hide auto search -------------------------*/
$('body').click(function(event) {
    if ($(event.target).attr('id') !== 'search' && $(event.target).attr('id') !== 'list') {
        $('#list').hide(200);
    }
});


function sendRequest(atr, value) {
    fetch(`http://localhost:3030/api/v1/search/?${atr}=${encodeURIComponent(value)}`).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

        return response.json();
    }).then(data => {
        data.slice(0, 10).forEach(book => {

            const bookDiv = document.createElement('div');
            const image = document.createElement('img');
            const aTittle = document.createElement('a');
            const pAuthor = document.createElement('p')


            image.src = book.book_image;
            image.style.width = '8%';
            image.style.margin = "10px"

            aTittle.textContent = book.book_title
            aTittle.style.fontSize = "14px"
            aTittle.href = `http://localhost:3030/api/v1/book/${book.book_id}`

            pAuthor.textContent = `${book.author_name}`
            pAuthor.style.fontSize = "2 px";


            bookDiv.style.display = 'flex';



            bookDiv.appendChild(image);
            const textContainer = document.createElement('div');
            textContainer.appendChild(aTittle);
            textContainer.appendChild(pAuthor);
            bookDiv.appendChild(textContainer);
            listView.appendChild(bookDiv);

        })
    })

}
