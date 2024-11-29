document.getElementById('url-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const urlInput = document.getElementById('url-input').value;

    // Simulate URL shortening
    const shortUrl = 'https://short.url/' + btoa(urlInput).substring(0, 6);
    const result = document.getElementById('result');
    result.innerHTML = `Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
});
