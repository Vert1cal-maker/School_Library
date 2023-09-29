var pathname = $(location).attr('pathname');
var bookIdPosition = pathname.lastIndexOf('/') + 1;
var isBookInUse = false;
var bookId;


// doAjaxQuery('GET', '/api/v1/books/' + pathname.substr(bookIdPosition), null, function(res) {
//     view.fillBookInfo(res.data);
//     if (res.data.event) {
//         isBookInUse = true;
//         bookId = res.data.id;
//     }
// });

/* --------------------Show the result, for sending the -----------------------
----------------------email in the queue for the book ---------------------- */
// var showResultSendEmailToQueue = function(email, result) {
//     var busy = $('#bookID').attr('busy');
//     $('.form-queue', '.btnBookID', (busy === null) ? '.freeBook' : '.busyBook').css('display', 'none');
//     $('.response').css('display', 'block');
//     $('span.youEmail').text(' ' + email);
// };

/*--------------- Send email. Get in Queue in for a book ---------------------*/
// var sendEmailToQueue = function(id, email) {
//     doAjaxQuery('GET', '/api/v1/books/' + id + '/order?email=' + email, null, function(res) {
//         showResultSendEmailToQueue(email, res.success);
//     });
// };

/* --------------- Checking validity of email when typing in input -----------*/
// $('.orderEmail').keyup(function(event) {
//     var email = $(this).val();
//     var isEmail = controller.validateEmail(email);
//     if (email === '') {
//         $('.input-group').removeClass('has-error has-success');
//         view.hideElement('.glyphicon-remove', '.glyphicon-ok');
//     } else {
//         if (isEmail) {
//             view.showSuccessEmail();
//             if (event.keyCode == 13) {
//
//                 var id = $('#bookID').attr('book-id');
//                 sendEmailToQueue(id, email);
//             }
//         } else {
//             view.showErrEmail();
//         }
//     }
// });

/*--------------------------Rating-------------------------------------------*/
const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.book-rating');


stars.forEach((star) => {
    star.addEventListener('click', () => {
        const starValue = parseInt(star.getAttribute("data-rating"), 10)
        const url = window.location.href
        const matches = url.match(/\/(\d+)$/);
        const bookId = matches[1];
        axios.post(`/api/v1/book/${bookId}?rating=${starValue}`);

        stars.forEach(el => {
            el.classList.remove("active");
        });


        for (let i = 1; i <= starValue; i++) {
            stars[i - 1].classList.add("active");
        }

    })
})









/*------------------ Sending email by clicking on the button ----------------*/
$('.btnBookID').click(function(event) {
    const url = window.location.href
    const matches = url.match(/\/(\d+)$/);
    const bookId = matches[1];

    axios.post(`api/v1/books/${bookId}`).then(response => {

        alert(
            "Книга свободна и ты можешь прийти за ней." +
            " Наш адрес: г. Кропивницкий, переулок Васильевский 10, 5 этаж." +
            " Лучше предварительно прозвонить и предупредить нас, чтоб " +
            " не попасть в неловкую ситуацию. Тел. 099 196 24 69"
        );
    })

});


