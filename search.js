const searchBar = document.querySelector(".searchfield input"),
searchBtn = document.querySelector(".searchfield button");

searchBtn.onclick = () =>{
    searchBar.classList.toggle("active");
     searchBar.focus();
     searchBtn.classList.toggle("active");

} 