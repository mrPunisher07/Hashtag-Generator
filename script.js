document.getElementById('generateBtn').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const hashtags = generateHashtags(inputText);
    document.getElementById('output').innerText = hashtags;
});

function generateHashtags(text) {
    const words = text.replace(/[^\w\s]/g, '').split(/\s+/);

    const hashtags = words.map(word => `#${word.toLowerCase()}`).join(' ');

    return hashtags;
}