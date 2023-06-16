const colors = document.querySelectorAll('.main-title')

function handleClick(event) {
    const titleValue = event.target.value;
    const headerValue = event.target.getAttribute('data-headervalue');
    const fontValue = event.target.getAttribute('data-fontvalue');
    const footerValue = event.target.getAttribute('data-footervalue');

    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.header');

    const staticElements = [main, footer, header]
    staticElements.forEach(element => {
        element.classList.add('fade');
    })

    setTimeout(() => {
        main.style.backgroundColor = titleValue;
        footer.style.backgroundColor = footerValue;
        header.style.backgroundColor = headerValue;
        header.style.color = fontValue;
        footer.style.color = fontValue;
    }, 300)

}

colors.forEach(color => {
    color.addEventListener('click', handleClick)
})
