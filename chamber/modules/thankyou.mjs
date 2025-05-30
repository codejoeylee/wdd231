function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const data = {};
    for(const [key, value] of params) {
        data[key] = value;
    }
    return data;
}

function displayFormData() {
    const data = getUrlParams();
    const requiredFields = ['firstname', 'lastname', 'email', 'phone', 'business', 'timestamp'];
    const display = document.getElementById('formDataDisplay');
    let html = '';

    requiredFields.forEach(field => {
        if (data[field]) {
            const label = field.charAt(0).toUpperCase() + field.slice(1);
            html += `
                <div class="data-item">
                    <span class="data-label">${label}:</span>
                    <span class="data-value">${data[field]}</span>
                </div>
            `;
        }
    });

    display.innerHTML = html;
}
window.onload = displayFormData;