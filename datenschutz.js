const toggle = document.getElementById("darkmode-toggle");

toggle.onclick = () => {
    document.body.classList.toggle("dark");
};

/* Scroll Animation */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(section => {
    observer.observe(section);
});