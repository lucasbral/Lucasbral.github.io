/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  function SendEmail(){
    Email.send({
        SecureToken : "6a55bd40-00b2-457d-84ad-42cabe27d70f",
        To : 'lucasdecarvalhosobral@gmail.com',
        From : "lucasdecarvalhosobral@gmail.com",
        Subject : "Nova Mensagem do Site",
        Body : "Nome: " + document.getElementById("name").value +
        "<br> Email: " + document.getElementById("email").value +
        "<br> Telefone: " + document.getElementById("phone").value +
        "<br> Mensagem: " + document.getElementById("message").value
        
    }).then(function(response){
        if (response == 'OK') {
            alert("Mensagem enviada !")
            }
        else {
            alert(response.statusText);
                throw new Error("Error:" + response);
            }
    });
    }

