// script.js
document.getElementById('generateBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const hashtags = generateHashtags(inputText);
    document.getElementById('output').innerText = hashtags;
});

function generateHashtags(text) {
    // Remove special characters and split into words
    const words = text.replace(/[^\w\s]/g, '').split(/\s+/);

    // Generate hashtags
    const hashtags = words.map(word => `#${word.toLowerCase()}`).join(' ');

    return hashtags;
}