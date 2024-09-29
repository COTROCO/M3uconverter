document.getElementById('generate').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar que todos los campos estén llenos
    if (!url || !username || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear contenido del archivo M3U
    const m3uContent = `#EXTM3U
#EXTINF:-1,${username}
http://${username}:${password}@${url}`;

    // Crear un blob con el contenido M3U
    const blob = new Blob([m3uContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'playlist.m3u';

    // Simular clic para descargar el archivo
    link.click();
});
