document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab-button');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;

            if (!tab.classList.contains('active')) {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                forms.forEach(f => {
                    f.classList.toggle('active', f.id === targetId);
                });
            }
        });
    });
});
