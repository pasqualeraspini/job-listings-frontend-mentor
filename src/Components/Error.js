const Error = (className, message) => {
    const filtersContainer = document.querySelector('.filter-list').parentElement;

    if (document.querySelector(`.${className}`)) {
        return false
    }

    const error = document.createElement('div');

    error.className = className;

    error.textContent = message;

    filtersContainer.insertAdjacentElement('afterend', error);

    setTimeout(() => {
        error.remove();
    }, 2000)
}
    
export default Error;