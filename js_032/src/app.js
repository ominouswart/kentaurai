import 'bootstrap';



window.addEventListener('load', _ => {

    if (document.querySelector('.alert')) {
        setTimeout(_ => {
            document.querySelector('.alert').remove();
        }, 2000 );
    }



});