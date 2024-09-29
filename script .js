document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generate').addEventListener('click', generateM3U);

    function generateM3U() {
        const url = document.getElementById('url').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validar que todos los campos estén llenos
        if (!url || !username || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Crear contenido del archivo M3U
        const m3uContent = `#EXTM3U\n#EXTINF:-1,${username}\nhttp://${username}:${password}@${url}`;

        // Crear un blob con el contenido M3U
        const blob = new Blob([m3uContent], { type: 'text/plain' });
        const link = document.getElementById('downloadLink');
        link.href = URL.createObjectURL(blob);
        link.download = 'playlist.m3u';

        // Mostrar el enlace para descargar
        link.style.display = 'block';
        link.innerText = 'Descargar M3U';
    }
});
