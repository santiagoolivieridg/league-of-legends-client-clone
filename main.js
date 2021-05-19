const tooltip = document.querySelector('.tooltip');
const questionIcon = document.querySelector('.question-icon');

let Tooltip = false;

questionIcon.addEventListener("mouseover", showTooltip);
questionIcon.addEventListener("mouseout", hideTooltip);


function showTooltip() {
    if (!Tooltip) {
        tooltip.classList.add('visible');

        Tooltip = true;
    } 
}

function hideTooltip() {
    if (Tooltip) {
        tooltip.classList.remove('visible');

        Tooltip = false;
    }
}
