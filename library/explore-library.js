import { books } from './books.js';

document.addEventListener("DOMContentLoaded", () => {
    const bookGrid = document.querySelector('.book-grid');
    const genreButtons = document.querySelectorAll('.genre-button');
    const searchInput = document.getElementById('book-search');
    const noBooksMsg = document.querySelector('.no-books-message');

    const modal = document.querySelector('.book-modal');
    const modalCover = modal.querySelector('.modal-cover');
    const modalTitle = modal.querySelector('.modal-title');
    const modalAuthor = modal.querySelector('.modal-author');
    const modalDescription = modal.querySelector('.modal-description');
    const modalLevel = modal.querySelector('.modal-reading-level');
    const closeModal = modal.querySelector('.close-modal');

    const bookCards = books.map(book => {
        const card = document.createElement('div');
        card.className = "book-card";
        card.dataset.genre = book.genre;
        card.dataset.author = book.author.toLowerCase();
        card.dataset.title = book.title.toLowerCase();
        card.innerHTML = `
            <img src="${book.coverImage}" alt="${book.title} cover">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;

        // Open modal on click
        card.addEventListener('click', () => {
            modalCover.src = book.coverImage;
            modalTitle.textContent = book.title;
            modalAuthor.textContent = `By: ${book.author}`;
            modalDescription.textContent = book.description;
            modalLevel.textContent = `Reading Level: ${book.readingLevel}`;
            modal.classList.add('active');
        });

        bookGrid.appendChild(card);
        return card;
    });

    // Function to update visible books
    function updateBooks() {
        const query = searchInput.value.toLowerCase();
        const activeGenre = document.querySelector('.genre-button.active').dataset.genre;

        let visibleCount = 0;
        bookCards.forEach(card => {

            const matchesGenre = activeGenre === "All" || card.dataset.genre === activeGenre;
            const matchesTitle = card.dataset.title.includes(query);
            const matchesAuthor = card.dataset.author.includes(query);

            if (matchesGenre && (matchesTitle || matchesAuthor)) {
                card.style.display = "flex";
                visibleCount++;
            } 
            else {
                card.style.display = "none";
            }
        });

        noBooksMsg.style.display = visibleCount === 0 ? "block" : "none";
    }

    // Genre filtering
    genreButtons.forEach(button => {
        button.addEventListener('click', () => {
            genreButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            searchInput.value = ""; 
            updateBooks();
        });
    });

    // Search functionality
    searchInput.addEventListener('input', () => updateBooks());

    // Close modal
    closeModal.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('active');
    });

    updateBooks();
});
