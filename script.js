/* source fading in: https://www.youtube.com/watch?v=huVJW23JHKQ */

// save all divs with classes element-right or element-left
const elements = document.querySelectorAll(".element-right, .element-left");

/* make appear when 50% of div is on screen */
const appearOptions = {
    rootMargin: "0px 0px -150px 0px"
};

// DEBUGGING - DELETE BEFORE SUBMITTING !
console.log(elements);

// IntersectionObserver: add class appear for divs on screen
const observer = new IntersectionObserver
(function(
    entries,
    observer
) {
    /* depending on preference uncomment and delete lines:
    now: divs fade in and fade out
    after: divs stay after fading in */
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear"); // DELETE
            //return;
        } else {
            entry.target.classList.add("appear");
            //observer.unobserve(entry.target);
        }
    });
},
appearOptions);

elements.forEach(element => {
    observer.observe(element);
});

