const themeButton = document.querySelector('#theme')
const root = document.querySelector(':root')
const v = '--primary-color'

const themeMap = {
    'blue':'red',
    'red':'black',
    'black':'blue',
}

function handler(event){ 
    const color = getComputedStyle(root).getPropertyValue(v)

    root.style.setProperty(v, themeMap[color])
}

themeButton.addEventListener('click', handler)