/**
 * MUTHUJA SANAHAS | MUSIC & VIDEOS JS
 * Handles dynamic tracks, videos, and interactive modals
 */

// Default music data matching brand assets
const defaultMusic = [
    {
        id: "dannawada-mawa",
        title: "Dannawada Mawa (දන්නවද මාව)",
        artist: "Muthuja Sanahas Ft. DILU Beats",
        description: "An evocative sonic journey blending raw emotion, nostalgic Sinhala melodies, and contemporary pop-trap elements. The breakthrough single that resonated with millions across Sri Lanka and worldwide.",
        credits: "Vocals & Melody: Muthuja Sanahas | Music: DILU Beats | Lyrics: Muthuja Sanahas | Visuals: Blanco Space",
        coverImageUrl: "assets/images/albums/web_dannawada-mawa-3000.jpg",
        spotifyUrl: "https://open.spotify.com/track/70qd1zswDOz1vtaAY33JmA?si=425243d3c6c541e4",
        youtubeUrl: "https://youtu.be/PWEbGXarNs0",
        appleMusicUrl: "https://music.apple.com/",
        isLatest: true,
        isPublished: true
    },
    {
        id: "hinahena-wala",
        title: "Hinahena Wala (හිනැහෙන වළා)",
        artist: "Muthuja Sanahas Ft. SANTHUR",
        description: "A soulful, atmospheric ballad celebrating love, longing, and poetic storytelling over lush cinematic chords.",
        credits: "Vocals: Muthuja Sanahas | Music & Mix: SANTHUR | Lyrics: Muthuja Sanahas | Production: Ala Thappara Gane",
        coverImageUrl: "assets/images/albums/web_album-cover-2.jpg",
        spotifyUrl: "https://open.spotify.com/artist/muthujasanahas",
        youtubeUrl: "https://www.youtube.com/watch?v=KbiBcFVqTRM",
        appleMusicUrl: "https://music.apple.com/",
        isLatest: false,
        isPublished: true
    },
    {
        id: "adare-piyapath",
        title: "Adare Piyapath (ආදරේ පියාපත්)",
        artist: "Muthuja Sanahas Ft. SANTHUR",
        description: "Trending chart-topping anthem with infectious rhythm, heartfelt lyrics, and a soaring vocal performance.",
        credits: "Vocals & Lyrics: Muthuja Sanahas | Additional Lyrics: Hulannuge Podi Hamuduruwo | Music: SANTHUR | Video: Ruzii",
        coverImageUrl: "assets/images/albums/web_album-cover-3.jpg",
        spotifyUrl: "https://open.spotify.com/artist/muthujasanahas",
        youtubeUrl: "https://www.youtube.com/watch?v=6yKGMPMObVA",
        appleMusicUrl: "https://music.apple.com/",
        isLatest: false,
        isPublished: true
    }
];

// Default videos data
const defaultVideos = [
    {
        id: "vid-1",
        title: "Dannawada Mawa (මගෙ මතකය නුඹ ගාව) - Muthuja Sanahas Ft. DILU Beats",
        youtubeId: "PWEbGXarNs0",
        thumbnailUrl: "assets/images/thumbnails/yt-thumb-1.jpg",
        isPublished: true
    },
    {
        id: "vid-2",
        title: "Hinahena Wala (හිනැහෙන වළා) - Muthuja Sanahas Ft. SANTHUR",
        youtubeId: "KbiBcFVqTRM",
        thumbnailUrl: "assets/images/thumbnails/hinahena-wala.jpg",
        isPublished: true
    },
    {
        id: "vid-3",
        title: "Adare Piyapath (ආදරේ පියාපත්) - Muthuja Sanahas feat. SANTHUR",
        youtubeId: "6yKGMPMObVA",
        thumbnailUrl: "assets/images/thumbnails/adare-piyapath-trending.jpg",
        isPublished: true
    }
];

let musicData = {};

// Render Content directly from showcase data
function loadMusicAndVideos() {
    renderMusic(defaultMusic);
    renderVideos(defaultVideos);
}

function renderMusic(musicList) {
    const grid = document.getElementById('music-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    musicData = {}; // Reset
    
    // Update Latest Release card if found
    const latestTrack = musicList.find(t => t.isLatest) || musicList[0];
    if (latestTrack) {
        const latestArtwork = document.getElementById('latest-release-art');
        if (latestArtwork && latestTrack.coverImageUrl) {
            latestArtwork.src = latestTrack.coverImageUrl;
        }
        const latestTitle = document.getElementById('latest-title');
        const latestArtist = document.getElementById('latest-artist');
        const latestDesc = document.getElementById('latest-desc');
        const latestSpotifyBtn = document.getElementById('latest-spotify-btn');
        
        if (latestTitle) latestTitle.textContent = latestTrack.title;
        if (latestArtist) latestArtist.textContent = latestTrack.artist;
        if (latestDesc && latestTrack.description) latestDesc.textContent = latestTrack.description;
        if (latestSpotifyBtn && latestTrack.spotifyUrl) latestSpotifyBtn.href = latestTrack.spotifyUrl;
    }

    musicList.forEach(track => {
        if (!track.isPublished) return;
        
        // Store for modal
        musicData[track.id] = track;
        
        grid.innerHTML += `
            <div class="music-card" onclick="openMusicModal('${track.id}')" tabindex="0" role="button" aria-label="Listen to ${track.title}">
                <div class="music-card-image">
                    <img src="${track.coverImageUrl || 'assets/images/albums/web_dannawada-mawa-3000.jpg'}" alt="${track.title}" class="music-card-img" loading="lazy">
                    <div class="card-overlay">
                        <span class="play-icon-glow">▶</span>
                    </div>
                </div>
                <div class="music-card-info">
                    <h4 class="music-card-title">${track.title}</h4>
                    <p class="music-card-artist">${track.artist}</p>
                    <div class="music-card-footer">
                        <span>OFFICIAL RELEASE</span>
                        <span style="color: var(--color-primary-light); font-weight: 600;">LISTEN &rarr;</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderVideos(videoList) {
    const grid = document.getElementById('videos-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    videoList.forEach(video => {
        if (!video.isPublished) return;
        
        const thumbUrl = video.thumbnailUrl || `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
        const isTrending = video.title.toLowerCase().includes('adare piyapath');
        
        grid.innerHTML += `
            <div class="video-card" onclick="openVideoModal('${video.youtubeId}')" tabindex="0" role="button" aria-label="Watch ${video.title}">
                <div class="video-thumbnail-wrapper">
                    ${isTrending ? '<div class="video-badge"><span class="badge badge-trending">#TRENDING</span></div>' : ''}
                    <img src="${thumbUrl}" alt="${video.title}" class="video-thumbnail-img" loading="lazy">
                    <div class="video-play-overlay">
                        <div class="yt-play-button">▶</div>
                    </div>
                </div>
                <h4 class="video-card-title">${video.title}</h4>
            </div>
        `;
    });
}

// Music Modal Logic
function openMusicModal(songId) {
    const modal = document.getElementById('music-modal');
    const data = musicData[songId] || defaultMusic.find(m => m.id === songId);
    
    if (!modal || !data) return;
    
    document.getElementById('modal-music-title').textContent = data.title;
    document.getElementById('modal-music-artist').textContent = data.artist;
    document.getElementById('modal-music-desc').textContent = data.description || '';
    document.getElementById('modal-music-credits').textContent = data.credits || '';
    
    const imgEl = document.getElementById('modal-music-img');
    if (imgEl && data.coverImageUrl) {
        imgEl.src = data.coverImageUrl;
    }
    
    const spotifyLink = document.getElementById('modal-link-spotify');
    if (spotifyLink) {
        spotifyLink.href = data.spotifyUrl || 'https://open.spotify.com/artist/muthujasanahas';
    }
    
    const ytLink = document.getElementById('modal-link-youtube');
    if (ytLink) {
        ytLink.href = data.youtubeUrl || 'https://www.youtube.com/@Muthuja_Sanahas';
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

function closeMusicModal() {
    const modal = document.getElementById('music-modal');
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// Video Modal Logic (Dynamic Iframe Injection)
function openVideoModal(youtubeId) {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    
    if (!modal || !container) return;
    
    const finalId = (youtubeId && youtubeId !== 'youtube_id_placeholder') ? youtubeId : 'PWEbGXarNs0';
    
    container.innerHTML = `<iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube-nocookie.com/embed/${finalId}?autoplay=1&rel=0" 
        title="Muthuja Sanahas YouTube Video Player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>`;
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const container = document.getElementById('video-container');
    
    if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        container.innerHTML = '';
        document.body.style.overflow = '';
    }
}

// Setup Shared Modal listeners
document.addEventListener('DOMContentLoaded', () => {
    loadMusicAndVideos();

    const closeButtons = document.querySelectorAll('[data-close="modal"]');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeMusicModal();
            closeVideoModal();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMusicModal();
            closeVideoModal();
        }
    });
});

window.openMusicModal = openMusicModal;
window.openVideoModal = openVideoModal;
window.closeMusicModal = closeMusicModal;
window.closeVideoModal = closeVideoModal;
