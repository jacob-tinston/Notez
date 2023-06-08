// Helpers 

const windowHt = window.innerHeight;


// Reveal Animation

const scrollAnim = (reveal) => {
    reveal.forEach(element => {
        let trigger = windowHt / (element.getAttribute("reveal-trigger") ? parseInt(element.getAttribute("reveal-trigger")) : 1.2);
        let elPos = element.getBoundingClientRect().top;

        if (elPos < trigger) element.classList.add('revealed');
    });
};


// Anims Init

export const initAnims = () => {
    scrollAnim(document.querySelectorAll(".reveal"));
    
    window.addEventListener('scroll', () => {
        scrollAnim(document.querySelectorAll(".reveal"));
    }, {passive:true});
}
