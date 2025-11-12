const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const listItems = document.querySelectorAll("li");


const listItemArray = Array.from(listItems).map(li => li.textContent);

searchInput.addEventListener("input", (event)=> {
    const filtered = listItemArray.filter((word) => 
        word.toLowerCase().includes(searchInput.value.toLowerCase()));
    
    itemList.textContent = "";

    filtered.forEach((item) => {
        let newItem = document.createElement("li");
        itemList.appendChild(newItem);
        newItem.textContent = item;
    });
});