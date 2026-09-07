document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.essay-filter');
    const essays = document.querySelectorAll('.essay-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter.toLowerCase();

            buttons.forEach(btn =>
                btn.classList.toggle('active', btn === button)
            );

            essays.forEach(essay => {
                const categories = (essay.dataset.categories || '')
                    .split(',')
                    .map(category => category.trim().toLowerCase());

                essay.hidden =
                    filter !== 'all' &&
                    !categories.includes(filter);
            });
        });
    });
});
