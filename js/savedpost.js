
const storedOuterHtml = localStorage.getItem('savedCard');
let postSection = document.querySelector(".post");
console.log(storedOuterHtml);
if(storedOuterHtml){
    postSection.innerHTML = postSection.innerHTML+storedOuterHtml;
    console.log(postSection.innerHTML+storedOuterHtml);
}

