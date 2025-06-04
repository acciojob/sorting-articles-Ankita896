const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort(function(a, b) {
    const regex = /^(a |an |the )/i;
    const strA = a.replace(regex, '');
    const strB = b.replace(regex, '');
    return strA.localeCompare(strB);
});

const bandList = document.getElementById('band');
sortedBands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
