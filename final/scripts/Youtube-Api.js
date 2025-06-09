// youtube-player-async.js

// 1. Return a Promise that resolves when the API is ready
function loadYouTubeIframeAPI() {
    return new Promise((resolve, reject) => {
        // YouTube will call this global function once it’s loaded
        window.onYouTubeIframeAPIReady = () => {
            if (window.YT && window.YT.Player) {
                resolve(window.YT);
            } else {
                reject(new Error('YouTube API didn’t initialize correctly'));
            }
        };

        // Inject the script
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.onerror = () => reject(new Error('Failed to load YouTube API script'));
        document.head.appendChild(tag);
    });
}

// 2. Await that Promise before using YT.Player
async function initYouTubePlayer() {
    try {
        const YT = await loadYouTubeIframeAPI();
        new YT.Player('player', {
            videoId: 'vYtV_Hf29RE',
            playerVars: {
                rel:           0,   // no related videos
                controls:      1,   // show controls
                modestbranding:1,   // minimal YouTube logo
                autoplay:      0    // don’t autoplay
            }
        });
    }
    catch (err) {
        console.error(err);
    }
}

// 3. Kick it off
initYouTubePlayer();

