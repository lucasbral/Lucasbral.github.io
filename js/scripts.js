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

    window.onload = () => {
        const words = [
            { key:"The Weeknd", value: 9   },
            { key:"Pink Floyd", value:5},
            { key:"Chico Science", value:3},
            { key:"Legião Urbana", value: 2},
            { key:"Post Malone", value: 2},
            { key:"Guns N' Roses", value: 2},
            { key:"TIAGO IORC", value: 1},
            { key:"Linkin Park", value: 1},
            { key:"Iron Maiden", value: 1},
            { key:"Charlie Brown Jr.", value: 1},
            { key:"Matanza", value: 1},
            { key:"Raul Seixas", value: 1},
            { key:"Eminem", value: 1},
            { key:"David Guetta", value: 1},
            { key:"System Of A Down", value: 1},
            { key:"BaianaSystem", value: 1},
            { key:"Rammstein", value: 1},
            { key:"Daft Punk", value: 1},
            { key:"Nação Zumbi", value: 3},
            { key:"Scorpions", value: 1},
            { key:"Sia", value: 1},
            { key:"Caetano Veloso", value: 1},
            { key:"David Bowie", value: 1},
            { key:"Metallica", value: 1},
            { key:"Emicida", value: 1},
            { key:"Doja Cat", value: 1},
            { key:"Twenty One Pilots", value: 1},
            { key:"AC/DC", value: 1},
            { key:"Bob Marley & The Wailers", value: 1},
            { key:"DUDA BEAT", value: 1},
            { key:"Slipknot", value: 1},
            { key:"Queen", value: 1},
            { key:"Gorillaz", value: 1},
        ];
        const data = {
          labels: words.map((d) => d.key),
          datasets: [
            {
              label: '',
              data: words.map((d) => 10 + d.value * 5),
            },
          ],
        };
        const ctx = document.getElementById('canvas').getContext('2d');
        window.myBar = new Chart(ctx, {
          type: 'wordCloud',
          data: data,
          options: {
            title: {
              display: true,
              text: 'Chart.js Word Cloud',
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      };