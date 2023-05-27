fetch('files/AllPlugins.txt')
    .then(response => response.text())
    .then(data => {
        var lines = data.split('\n').filter(line => line.trim() !== '').reverse(); // remove empty lines first, then reverse
        var videos = [];

        for (var i = 0; i < lines.length; i += 2) {
            var title = lines[i + 1];
            var id = lines[i].split('https://www.youtube.com/watch?v=')[1];

            videos.push({
                id: id,
                title: title
            });
        }

        var videoGallery = document.getElementById('video-gallery');

        videos.forEach(function(video) {
            var videoContainer = document.createElement('div');
            videoContainer.className = 'video-container';

            videoContainer.innerHTML = `
                <h3>${video.title}</h3>
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                    <img src="https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}">
                </a>
            `;

            videoGallery.appendChild(videoContainer);
        });
    })
    .catch(error => console.error('Error:', error));
