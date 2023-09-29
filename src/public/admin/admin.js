const offset = document.getElementById("view");
const download = document.getElementById("bookImage");
const checkBoxes = document.querySelectorAll(".checkbox");
const submitBtn = document.getElementById("submit");
const form = document.getElementById('bookForm');
const close = document.querySelector('.close');
const modal = document.getElementById('myModal');


checkBoxes.forEach((checkbox) => {
    checkbox.checked = false;
});



close.addEventListener("click",hideModal);


// send form data for server
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('bookImage');
    const fileName = fileInput.value.split('\\').pop();

    const formData = {
        bookTitle: document.getElementById('bookTitle').value,
        bookYear: document.getElementById('bookYear').value,
        bookPages: document.getElementById('bookPages').value,
        bookDescription: document.getElementById('bookDescription').value,
        authors: [document.getElementById('author1').value,
        document.getElementById('author2').value, document.getElementById('author3').value],
        bookImage: fileName
    }
  
    axios.post('/admin/api/v1', formData)
        .then(showModal("Книгу успішно добавлено")
        ).catch(error =>{
            showModal('Не вдалося добавити книгу');
        })
});

download.addEventListener("change", previewImage);

offset.addEventListener("change", () => {
    const url = document.location.href.split("?")[0]
    const value = offset.value;
    const result = `${url}?itemsPerPage=${value}`;
    document.location.href = result;
});


const selectedTitles = [];
checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const title = checkbox.getAttribute('data-title');
        if (checkbox.checked) {
            selectedTitles.push(title);
        } else {
            const index = selectedTitles.indexOf(title);
            if (index !== -1) {
                selectedTitles.splice(index, 1);
            }
        }
    })
});

submitBtn.addEventListener("click", () => {

    axios.delete('/admin/api/v1', {
        data: { selectedTitles }
    }).then(response => {
        if (response) {
           showModal("Книгу Успішно видалено")
        }
    })
})



function showModal(massege){
    const modalContent = document.querySelector('.modal-content p');
    modal.style.display = "block";
    modalContent.textContent = massege;
}

function hideModal(){
    modal.style.display = 'none'
    location.reload();
}


function previewImage() {
    const input = download.files[0];
    const preview = document.getElementById('previewImage');

    if (input) {
        const reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
        }

        reader.readAsDataURL(input);
    }
}


