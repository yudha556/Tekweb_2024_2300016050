
let color = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'yellow'];
let currentIndex = 0;

document.getElementById('tombol').addEventListener('click', function changeBackground() {
    document.body.style.backgroundColor = color[currentIndex];
    currentIndex = (currentIndex + 1) % color.length;
});

const fontSizeSlider = document.getElementById('fontSizeSlider');
const sizeValue = document.getElementById('sizeValue');

fontSizeSlider.addEventListener('input', function() {
    const size = this.value;
    document.body.style.fontSize = size + 'px';
    sizeValue.textContent = size + 'px';
});

const toggleSwitch = document.getElementById('darkModeToggle');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

const fontSelect = document.getElementById('fontStyleSelect');

fontSelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});