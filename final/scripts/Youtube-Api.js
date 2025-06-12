
function loadYouTubeIframeAPI() {
    return new Promise((resolve, reject) => {
        window.onYouTubeIframeAPIReady = () => {
            if (window.YT && window.YT.Player) {
                resolve(window.YT);
            } else {
                reject(new Error('YouTube API didn’t initialize correctly'));
            }
        };


        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.onerror = () => reject(new Error('Failed to load YouTube API script'));
        document.head.appendChild(tag);
    });
}


async function initYouTubePlayer() {
    try {
        const YT = await loadYouTubeIframeAPI();
        new YT.Player('player', {
            videoId: 'vYtV_Hf29RE',
            playerVars: {
                rel:           0,
                controls:      1,
                modestbranding:1,
                autoplay:      0
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}


initYouTubePlayer();

