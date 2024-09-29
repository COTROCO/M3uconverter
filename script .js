function generateM3U() {
    var url = document.getElementById('url').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // M3U content with IPTV credentials
    var m3uContent = `#EXTM3U\n#EXTINF:-1,Your Channel\n${url}?username=${username}&password=${password}&type=m3u&output=mpegts`;

    // Create a blob from the M3U content
    var blob = new Blob([m3uContent], { type: 'text/plain' });

    // Create a download link for the blob
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'playlist.m3u';
    downloadLink.style.display = 'block';
}