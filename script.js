const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(str) {
    return str.replace(/^(a |an |the )/i, '');
}

const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

const bandList = document.getElementById('band');
sortedBands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
