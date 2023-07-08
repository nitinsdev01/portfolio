if (document.body.classList.contains('pp-viewing-home')) {
    console.log("Home");
}
//Share Modal Starts
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

//Get the title of window
var titlePage = window.document.title;
        
//Get the URL of window
var urlPage = window.document.location.href;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
            if(navigator.share){
                navigator.share({
                    title: `${titlePage}`,
                    url: `${urlPage}`
                });
            } else {
          modal.style.display = "grid";
            }
        };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//Share Modal Ends
//Copy Profile Starts
function hideCopied() {
    $(".copied").css("margin-top", "-20px", "1000ms");
    $(".copied").css("opacity", "0", "1000ms");
    $(".copied").css("z-index", "-1");
}

$(document).ready(function () {
    $('.copy-btn').on("click", function () {
        value = $(this).data('clipboard-text'); //Upto this I am getting value
        $(".copied").css("margin-top", "10px");
        $(".copied").css("opacity", "1");
        $(".copied").css("z-index", "3");
        setInterval(hideCopied, 5000);

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
    });
});
//Copy Profile Ends
//Dark Mode Starts
let darkMode = localStorage.getItem('darkMode');
const manifest = document.getElementById('manifest');
const darkModeBtn = document.querySelector('#darkbtn');
const enableDarkMode = () => {
    document.body.classList.add('darkm');
    localStorage.setItem("darkMode", "enabled");
    manifest.href='/portfolio/manifest-dark.json';
};
const disableDarkMode = () => {
    document.body.classList.remove('darkm');
    localStorage.setItem("darkMode", null);
    manifest.href='/portfolio/manifest.json';
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
//Dark Mode Ends
//Page Pilig Starts
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['home', 'about', 'work', 'contact'],
        navigation: false,
        afterRender: function () {
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function (anchorLink, index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }
        }
    });
});
//Page Pilig Ends
//Top Nav Starts
function openNav() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}
//Top Nav Ends
//Works Carousel Starts
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    responsiveClass: true,
    autoWidth: false,
    smartSpeed: 1500,
    autoplay: false,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            dots: false,
            nav: false,
            loop: true
        },
        1200: {
            items: 4,
            nav: true,
            navText: ["<i class='fas fa-angle-left nav-btn'></i>", "<i class='fas fa-angle-right nav-btn'></i>"],
            loop: true,
            dots: false
        }
    }
});

$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
//Works Carousel Ends