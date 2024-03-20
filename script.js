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




document.addEventListener("DOMContentLoaded", function() {
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
            document.getElementById("checkbox").checked=true;

        } else {
            document.documentElement.style.setProperty('--grey', "#F4F2EE");
            document.documentElement.style.setProperty('--white', "#ffffff");
            document.documentElement.style.setProperty('--icons', "#666666");
            document.documentElement.style.setProperty('--border', "#666666");
            document.documentElement.style.setProperty('--text-color', "#000000");
            document.getElementById("checkbox").checked=false;
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
hamburIcon = document.getElementById('menu');
let asideMenu = document.getElementById("asideMenu");
console.log(hamburIcon);
let menuClicked = false;

hamburIcon.addEventListener("click", () => {
    menuClicked = !menuClicked;

    if (!menuClicked) {
        asideMenu.style.display = "none";
       
    } else {
        asideMenu.style.display = "flex";
         asideMenu.style.zIndex = "11111"
    }


});

//more option script
const more = document.querySelectorAll(".more");
let moreClicked = false;
more.forEach(option => {
    option.addEventListener("click", () => {
        moreClicked = !moreClicked;
        
        console.log();
        if (moreClicked) {
            option.nextElementSibling.style.display = "flex";
        }
        else {
            option.nextElementSibling.style.display = "none";
        }
        // Adding focusout event listener
        const focusoutHandler = () => {
            option.nextElementSibling.style.display = "none";
            moreClicked = false;
            // option.removeEventListener("focusout", focusoutHandler);
        };

        option.addEventListener("focusout", focusoutHandler);
    });
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


// Option list operations

// document.addEventListener("DOMContentLoaded", function() {
//     const saveButtons = document.querySelectorAll(".option-list#save");
//     let saveList = [];

//     if (localStorage.getItem('savedItems')) {
//         saveList = JSON.parse(localStorage.getItem('savedItems'));
//         console.log("Items loaded from localStorage:", saveList);
//     }

//     saveButtons.forEach(function(button) {
//         button.addEventListener("click", function() {
//             const card = button.closest(".card");
//             const cardHTML = card.outerHTML;
//             saveList.push(cardHTML);
//             localStorage.setItem('savedItems', JSON.stringify(saveList));
//             console.log("Card saved:", saveList);

//             // Load ab.html and insert the saved HTML content into the main div
//             fetch('./ab.html')
//                 .then(response => response.text())
//                 .then(data => {
//                     const parser = new DOMParser();
//                     const htmlDoc = parser.parseFromString(data, 'text/html');
//                     const mainDiv = htmlDoc.getElementById('main');
//                     saveList.forEach(savedItem => {
//                         mainDiv.innerHTML += savedItem;
//                     });
//                     document.body.innerHTML = htmlDoc.documentElement.innerHTML;
//                 })
//                 .catch(error => console.error('Error loading ab.html:', error));
//         });
//     });
// });