function showMap(url) {
    const mapModal = document.getElementById('map-modal');
    const mapIframe = document.getElementById('map-iframe');
    mapIframe.src = url;
    mapModal.style.display = 'flex';
}

function closeMap() {
    const mapModal = document.getElementById('map-modal');
    mapModal.style.display = 'none';
    document.getElementById('map-iframe').src = '';
}