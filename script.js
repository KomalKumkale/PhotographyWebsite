// sidebar menu
let menu = document.querySelector(".menu");
menu.addEventListener("mousedown", () => {
    document.querySelector(".fa-user-large").style.transform = 'scale(0.8)';
})
menu.addEventListener("mouseup", () => {
    document.querySelector(".fa-user-large").style.transform = 'scale(1)';
})


// navigation menu

// let lis= document.querySelectorAll(".li");
// lis.forEach(li=>{
//     console.log("Hello"+li.nextElementSibling);

// let nav = document.querySelectorAll(".menulink");
// // console.log(nav);
// nav.forEach(item => {
//     let names = item.nextElementSibling;
//     item.addEventListener("mouseenter",()=>{
//     names.style.display = "block";
//     names.style.opacity = "1";
//     names.style.color="#553D8B";
//     item.style.fontSize="16px";
//     item.style.color="#553D8B";

//     });
//     item.addEventListener("mouseleave",()=>{
//         names.style.display = "none";
//         item.style.fontSize="20px";
//         item.style.color="";
//         names.style.opacity = "0";

//     });
// });

// navigation menu 2
let linked = document.querySelectorAll(".linked");
// console.log(linked);
linked.forEach(link => {
    let a = link.childNodes;
    let icon = a[0];
    let name = a[1];
    link.addEventListener("mouseover", () => {
        console.log(icon, name);
        name.style.display = "block";
        name.style.opacity = "1";
        name.style.color = "#6200EE";
        icon.style.fontSize = "16px";
        icon.style.color = "#6200EE";
        // link.style.transition = "all 0.5s ease-in";

    });
    link.addEventListener("mouseleave", () => {
        console.log(icon, name);

        name.style.display = "none";
        icon.style.fontSize = "20px";
        icon.style.color = "";
        name.style.opacity = "0";
        // link.style.transition = "all 0.5s ease-in";
    });

});




document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox");

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    setTheme(isDarkMode);

    checkbox.addEventListener("change", () => {
        const isChecked = checkbox.checked;
        localStorage.setItem('darkMode', isChecked);
        setTheme(isChecked);
    });

    function setTheme(isDarkMode) {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--grey', "#1b1b1b");
            document.documentElement.style.setProperty('--white', "#000000");
            document.documentElement.style.setProperty('--icons', "#ffffff");
            document.documentElement.style.setProperty('--border', "#ffffff");
            document.documentElement.style.setProperty('--text-color', "#ffffff");
            document.documentElement.style.setProperty('--footer-bg', "to right,#00093c, #2d0b00");
            document.getElementById("checkbox").checked = true;

        } else {
            document.documentElement.style.setProperty('--grey', "#F4F2EE");
            document.documentElement.style.setProperty('--white', "#ffffff");
            document.documentElement.style.setProperty('--icons', "#666666");
            document.documentElement.style.setProperty('--border', "#666666");
            document.documentElement.style.setProperty('--text-color', "#000000");
            document.documentElement.style.setProperty('--footer-bg', "to top, #2d3436 0%, #d3d3d3 74%");
            document.getElementById("checkbox").checked = false;
        }
    }
});


// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//         document.documentElement.style.setProperty('--grey', "#1b1b1b");
//         document.documentElement.style.setProperty('--white', "#000000");
//         document.documentElement.style.setProperty('--icons', "#ffffff");
//         document.documentElement.style.setProperty('--border', "#ffffff");
//         document.documentElement.style.setProperty('--text-color', "#ffffff");
//     } else {
//         document.documentElement.style.setProperty('--grey', "#F4F2EE");
//         document.documentElement.style.setProperty('--white', "#ffffff");
//         document.documentElement.style.setProperty('--icons', "#666666");
//         document.documentElement.style.setProperty('--border', "#666666");
//         document.documentElement.style.setProperty('--text-color', "#000000");
//     }
// });
// --grey: #F4F2EE;
// --white:#ffffff;
// --text-color:#000000;
// --text:#666666;
// --border:#666666;
// --icons:#666666;
// }


// searchbar funtion to search
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchbar");
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const photographerName = card.querySelector(".photographer h1").innerText.toLowerCase();
            const photographerInfo = card.querySelector(".photographer p").innerText.toLowerCase();
            const photographerLocation = card.querySelector(".photographer h6").innerText.toLowerCase();
            if (photographerName.includes(searchText) || photographerInfo.includes(searchText) || photographerLocation.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// heart like dislike functionality

let hearts = document.querySelectorAll(".fa-heart");
hearts.forEach(heart => {

    heart.addEventListener("click", () => {
        heart.classList.toggle("fa-solid");
        heart.style.transform = "scale(1.3)";
        setTimeout(() => {
            heart.style.transform = "scale(1)";
            console.log("Hello");
        }, 500);
        let countElement = heart.nextElementSibling; // Selecting the count element next to the heart icon
        let count = parseInt(countElement.textContent); // Getting the current count
        console.log(count);
        if (heart.classList.contains("fa-solid")) {
            count++;

        } else {
            count--;
        }
        countElement.textContent = count; // Update the count text

        // Update the count in the .count class element
        let countClassElement = heart.parentElement.querySelector(".count");
        if (countClassElement) {
            countClassElement.textContent = count;
        }

    });
});




// sidebar menu  script 
// hamburIcon = document.getElementById('menu');
// let asideMenu = document.getElementById("asideMenu");
// console.log(hamburIcon);
// let menuClicked = false;

// hamburIcon.addEventListener("click", () => {
//     menuClicked = !menuClicked;

//     if (!menuClicked) {
//         asideMenu.style.display = "none";

//     } else {
//         asideMenu.style.display = "flex";
//         asideMenu.style.zIndex = "11111"
//     }

// });

const hamburgerIcon = document.getElementById('menu');
const asideMenu = document.getElementById("asideMenu");
let menuClicked = false;

// Toggle menu on hamburger icon click
hamburgerIcon.addEventListener("click", (event) => {
    menuClicked = !menuClicked;

    if (!menuClicked) {
        asideMenu.style.display = "none";
    } else {
        asideMenu.style.display = "flex";
        asideMenu.style.zIndex = "11111";
    }

    // Prevent the click event from propagating further
    event.stopPropagation();
});

// Close menu when a click occurs outside of it
document.addEventListener("click", (event) => {
    // Check if the click target is outside of the asideMenu and hamburgerIcon
    if (!asideMenu.contains(event.target) && event.target !== hamburgerIcon) {
        asideMenu.style.display = "none";
        menuClicked = false;
    }
});



//more option script
// const more = document.querySelectorAll(".more");
// let moreClicked = false;
// more.forEach(option => {
//     option.addEventListener("click", () => {
//         moreClicked = !moreClicked;

//         console.log();
//         if (moreClicked) {
//             option.nextElementSibling.style.display = "flex";
//         }
//         else {
//             option.nextElementSibling.style.display = "none";
//         }
//         // Adding focusout event listener
//         const focusoutHandler = () => {
//             option.nextElementSibling.style.display = "none";
//             moreClicked = false;
//             // option.removeEventListener("focusout", focusoutHandler);
//         };

//         option.addEventListener("focusout", focusoutHandler);
//     });
// });

const more = document.querySelectorAll(".more");
let moreClicked = false;

more.forEach(option => {
    option.addEventListener("click", () => {
        moreClicked = !moreClicked;

        if (moreClicked) {
            option.nextElementSibling.style.display = "flex";
        } else {
            option.nextElementSibling.style.display = "none";
        }
    });
});

// Adding click event listener on the document level
document.addEventListener("click", (event) => {
    const isMoreSection = Array.from(event.target.classList).includes('more') || event.target.closest('.more');
    
    if (!isMoreSection) {
        more.forEach(option => {
            option.nextElementSibling.style.display = "none";
            moreClicked = false;
        });
    }
});




//category section

const categories = document.querySelectorAll(".category");
categories.forEach(category => {
    category.addEventListener("click", () => {
        let searchCategory = category.textContent;
        console.log(searchCategory);

        document.querySelectorAll(".card").forEach(card => {
            console.log(card);
            console.log(card.textContent);
            if (card.textContent.toLocaleLowerCase().includes(searchCategory.toLocaleLowerCase())) {
                console.log("hello");
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        })

    });
});


// Option list operations save operation
let saveBtns = document.querySelectorAll(".save");

saveBtns.forEach(saveBtn => {

let savedList = [];
        saveBtn.addEventListener("click", () => {
            let i = saveBtn.firstElementChild;
            i.classList.toggle("fa-solid")
            let savedHtml = saveBtn.parentNode.parentElement.parentElement.outerHTML;
            console.log(savedHtml);
            if (i.classList.contains("fa-solid")) {
                saveBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i>SAVED`;
                savedList.push(savedHtml);
                localStorage.setItem('savedCard', savedList);
            } else {
                saveBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i>SAVE`;
                localStorage.removeItem('savedCard');
                // savedList.pop(savedHtml);
            }
        
        });
});

// Option list download operation
// let downloadBtns=document.querySelectorAll(".download");

// downloadBtns.forEach(downloadBtn=>{
//     // console.log(downloadBtn.parentNode.parentElement.parentElement.querySelector(".post-image"));
//     let imagePath = downloadBtn.parentNode.parentElement.parentElement.querySelector(".post-image");
//     console.log(imagePath.childNodes);
// })

document.addEventListener("DOMContentLoaded", function() {
    let downloadButtons = document.querySelectorAll('.download');

    // Attach event listener to each download button
    downloadButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Find the card associated with the download button
            var card = button.closest('.card');
            var image;

            // Check if carousel exists in the card
            var carouselTrack = card.querySelector('.carousel__track');
            if (carouselTrack) {
                var currentSlide = carouselTrack.querySelector('.current-slide');
                image = currentSlide.querySelector('.carousel__images');
            } else {
                // If no carousel, directly get the image within post-image
                image = card.querySelector('.post-image img');
            }

            var imageUrl = image.src;

            // Create a temporary anchor element
            var downloadLink = document.createElement('a');
            downloadLink.href = imageUrl;
            downloadLink.download = 'image.jpg'; // Set the file name

            // Append the anchor element to the body
            document.body.appendChild(downloadLink);

            // Trigger the click event
            downloadLink.click();

            // Clean up created a href link for dowwnload
            document.body.removeChild(downloadLink);
        });
    });
});



