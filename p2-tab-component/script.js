const tabs = document.querySelectorAll("[data-tab]");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove('active');
        });
        tab.classList.add('active');

        contents.forEach(t => {
            t.classList.remove('active');
        });
        
        const content = document.getElementById(`${tab.getAttribute('data-tab')}`);
        content.classList.add('active');
    });
});
