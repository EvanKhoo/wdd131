// faq.js
document.addEventListener("DOMContentLoaded", () => {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;

            if (!answer.style.maxHeight || answer.style.maxHeight === "0px") {
                answer.style.display = "block";
                const height = answer.scrollHeight + "px";
                answer.style.maxHeight = "0px";
                setTimeout(() => {
                    answer.style.maxHeight = height;
                }, 10);
            } else {
                answer.style.maxHeight = "0px";
                setTimeout(() => {
                    answer.style.display = "none";
                }, 300);
            }
        });
    });
});
