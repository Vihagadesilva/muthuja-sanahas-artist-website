/**
 * MUTHUJA SANAHAS | GALLERY & LIGHTBOX JS
 * Handles photoshoot masonry layout, dynamic filtering, and lightbox viewer.
 */

// Curated high-res photoshoot items from Blanco Space shoot (all 42 images)
const defaultGalleryItems = [
    {
        "id": "DSC06910",
        "category": "portraits",
        "caption": "Muthuja Signature Blue Series",
        "thumb": "assets/images/gallery/thumbs/DSC06910.jpg",
        "web": "assets/images/gallery/web/DSC06910.jpg"
    },
    {
        "id": "DSC06916",
        "category": "live",
        "caption": "Muthuja with YouTube Silver Play Button",
        "thumb": "assets/images/gallery/thumbs/DSC06916.jpg",
        "web": "assets/images/gallery/web/DSC06916.jpg"
    },
    {
        "id": "DSC06930",
        "category": "live",
        "caption": "Milestone Celebration & Studio Energy",
        "thumb": "assets/images/gallery/thumbs/DSC06930.jpg",
        "web": "assets/images/gallery/web/DSC06930.jpg"
    },
    {
        "id": "DSC06939",
        "category": "live",
        "caption": "Holding the YouTube Silver Creator Award",
        "thumb": "assets/images/gallery/thumbs/DSC06939.jpg",
        "web": "assets/images/gallery/web/DSC06939.jpg"
    },
    {
        "id": "DSC06942",
        "category": "live",
        "caption": "Silver Award Milestone Celebration",
        "thumb": "assets/images/gallery/thumbs/DSC06942.jpg",
        "web": "assets/images/gallery/web/DSC06942.jpg"
    },
    {
        "id": "DSC06948",
        "category": "live",
        "caption": "Studio Session with Creator Award",
        "thumb": "assets/images/gallery/thumbs/DSC06948.jpg",
        "web": "assets/images/gallery/web/DSC06948.jpg"
    },
    {
        "id": "DSC06955",
        "category": "live",
        "caption": "Celebrating 100,000 YouTube Subscribers Award",
        "thumb": "assets/images/gallery/thumbs/DSC06955.jpg",
        "web": "assets/images/gallery/web/DSC06955.jpg"
    },
    {
        "id": "DSC06961",
        "category": "bts",
        "caption": "Moody Contrast Studio Lighting",
        "thumb": "assets/images/gallery/thumbs/DSC06961.jpg",
        "web": "assets/images/gallery/web/DSC06961.jpg"
    },
    {
        "id": "DSC06972",
        "category": "portraits",
        "caption": "Signature Sunglasses Editorial Portrait",
        "thumb": "assets/images/gallery/thumbs/DSC06972.jpg",
        "web": "assets/images/gallery/web/DSC06972.jpg"
    },
    {
        "id": "DSC06976",
        "category": "portraits",
        "caption": "Artist Close-Up Portrait",
        "thumb": "assets/images/gallery/thumbs/DSC06976.jpg",
        "web": "assets/images/gallery/web/DSC06976.jpg"
    },
    {
        "id": "DSC06979",
        "category": "bts",
        "caption": "Behind The Scenes Creative Direction",
        "thumb": "assets/images/gallery/thumbs/DSC06979.jpg",
        "web": "assets/images/gallery/web/DSC06979.jpg"
    },
    {
        "id": "DSC06985",
        "category": "portraits",
        "caption": "Cobalt Blue Studio Profile",
        "thumb": "assets/images/gallery/thumbs/DSC06985.jpg",
        "web": "assets/images/gallery/web/DSC06985.jpg"
    },
    {
        "id": "DSC06989",
        "category": "portraits",
        "caption": "Muthuja Sanahas High Fashion Editorial",
        "thumb": "assets/images/gallery/thumbs/DSC06989.jpg",
        "web": "assets/images/gallery/web/DSC06989.jpg"
    },
    {
        "id": "DSC06997",
        "category": "bts",
        "caption": "Cinematic Shadowplay & Highlights",
        "thumb": "assets/images/gallery/thumbs/DSC06997.jpg",
        "web": "assets/images/gallery/web/DSC06997.jpg"
    },
    {
        "id": "DSC07000",
        "category": "portraits",
        "caption": "Muthuja Sanahas Studio Series",
        "thumb": "assets/images/gallery/thumbs/DSC07000.jpg",
        "web": "assets/images/gallery/web/DSC07000.jpg"
    },
    {
        "id": "DSC07005",
        "category": "portraits",
        "caption": "Reflective Studio Pose & Lighting",
        "thumb": "assets/images/gallery/thumbs/DSC07005.jpg",
        "web": "assets/images/gallery/web/DSC07005.jpg"
    },
    {
        "id": "DSC07015",
        "category": "portraits",
        "caption": "Artistic Portrait in Modern Styling",
        "thumb": "assets/images/gallery/thumbs/DSC07015.jpg",
        "web": "assets/images/gallery/web/DSC07015.jpg"
    },
    {
        "id": "DSC07019",
        "category": "bts",
        "caption": "Moody Blue Bokeh & Deep Shadows",
        "thumb": "assets/images/gallery/thumbs/DSC07019.jpg",
        "web": "assets/images/gallery/web/DSC07019.jpg"
    },
    {
        "id": "DSC07020",
        "category": "live",
        "caption": "Creator Award Proud Moment in Studio",
        "thumb": "assets/images/gallery/thumbs/DSC07020.jpg",
        "web": "assets/images/gallery/web/DSC07020.jpg"
    },
    {
        "id": "DSC07021",
        "category": "live",
        "caption": "Artist in Motion Live Session",
        "thumb": "assets/images/gallery/thumbs/DSC07021.jpg",
        "web": "assets/images/gallery/web/DSC07021.jpg"
    },
    {
        "id": "DSC07026",
        "category": "portraits",
        "caption": "Deep Indigo Monochrome Aesthetic",
        "thumb": "assets/images/gallery/thumbs/DSC07026.jpg",
        "web": "assets/images/gallery/web/DSC07026.jpg"
    },
    {
        "id": "DSC07035",
        "category": "portraits",
        "caption": "Muthuja Vocalist Close-Up Expression",
        "thumb": "assets/images/gallery/thumbs/DSC07035.jpg",
        "web": "assets/images/gallery/web/DSC07035.jpg"
    },
    {
        "id": "DSC07040",
        "category": "portraits",
        "caption": "Confident Stance & Sunglass Silhouette",
        "thumb": "assets/images/gallery/thumbs/DSC07040.jpg",
        "web": "assets/images/gallery/web/DSC07040.jpg"
    },
    {
        "id": "DSC07043",
        "category": "live",
        "caption": "Dynamic Lighting & Stage Presence",
        "thumb": "assets/images/gallery/thumbs/DSC07043.jpg",
        "web": "assets/images/gallery/web/DSC07043.jpg"
    },
    {
        "id": "DSC07050",
        "category": "bts",
        "caption": "Golden Sunburst & Warm Halo Silhouette",
        "thumb": "assets/images/gallery/thumbs/DSC07050.jpg",
        "web": "assets/images/gallery/web/DSC07050.jpg"
    },
    {
        "id": "DSC07054",
        "category": "live",
        "caption": "Celebrating 100K YouTube Community",
        "thumb": "assets/images/gallery/thumbs/DSC07054.jpg",
        "web": "assets/images/gallery/web/DSC07054.jpg"
    },
    {
        "id": "DSC07064",
        "category": "bts",
        "caption": "Cinematic Anamorphic Light Streaks (B&W)",
        "thumb": "assets/images/gallery/thumbs/DSC07064.jpg",
        "web": "assets/images/gallery/web/DSC07064.jpg"
    },
    {
        "id": "DSC07066",
        "category": "bts",
        "caption": "Dramatic High Contrast Studio Shadow",
        "thumb": "assets/images/gallery/thumbs/DSC07066.jpg",
        "web": "assets/images/gallery/web/DSC07066.jpg"
    },
    {
        "id": "DSC07069",
        "category": "bts",
        "caption": "Monochrome Atmospheric Profile",
        "thumb": "assets/images/gallery/thumbs/DSC07069.jpg",
        "web": "assets/images/gallery/web/DSC07069.jpg"
    },
    {
        "id": "DSC07084",
        "category": "bts",
        "caption": "Behind The Scenes Lighting Architecture",
        "thumb": "assets/images/gallery/thumbs/DSC07084.jpg",
        "web": "assets/images/gallery/web/DSC07084.jpg"
    },
    {
        "id": "DSC07092",
        "category": "live",
        "caption": "Silver Play Button Award Portrait",
        "thumb": "assets/images/gallery/thumbs/DSC07092.jpg",
        "web": "assets/images/gallery/web/DSC07092.jpg"
    },
    {
        "id": "DSC07100",
        "category": "portraits",
        "caption": "Blanco Space Music Editorial Shoot",
        "thumb": "assets/images/gallery/thumbs/DSC07100.jpg",
        "web": "assets/images/gallery/web/DSC07100.jpg"
    },
    {
        "id": "DSC07103",
        "category": "live",
        "caption": "Studio Silver Award Milestone Moment",
        "thumb": "assets/images/gallery/thumbs/DSC07103.jpg",
        "web": "assets/images/gallery/web/DSC07103.jpg"
    },
    {
        "id": "DSC07107",
        "category": "portraits",
        "caption": "Atmospheric Studio Portrait in Blue",
        "thumb": "assets/images/gallery/thumbs/DSC07107.jpg",
        "web": "assets/images/gallery/web/DSC07107.jpg"
    },
    {
        "id": "DSC07114",
        "category": "live",
        "caption": "Live Session Studio Energy & Award",
        "thumb": "assets/images/gallery/thumbs/DSC07114.jpg",
        "web": "assets/images/gallery/web/DSC07114.jpg"
    },
    {
        "id": "DSC07116",
        "category": "portraits",
        "caption": "Muthuja Studio Portrait in Cobalt Blue",
        "thumb": "assets/images/gallery/thumbs/DSC07116.jpg",
        "web": "assets/images/gallery/web/DSC07116.jpg"
    },
    {
        "id": "DSC07117",
        "category": "live",
        "caption": "Milestone Celebration Close-Up",
        "thumb": "assets/images/gallery/thumbs/DSC07117.jpg",
        "web": "assets/images/gallery/web/DSC07117.jpg"
    },
    {
        "id": "DSC07125",
        "category": "portraits",
        "caption": "Editorial Music Shoot by Blanco Space",
        "thumb": "assets/images/gallery/thumbs/DSC07125.jpg",
        "web": "assets/images/gallery/web/DSC07125.jpg"
    },
    {
        "id": "DSC07139",
        "category": "portraits",
        "caption": "Expressive Singer Portrait in Studio",
        "thumb": "assets/images/gallery/thumbs/DSC07139.jpg",
        "web": "assets/images/gallery/web/DSC07139.jpg"
    },
    {
        "id": "DSC07142",
        "category": "portraits",
        "caption": "Performance Mood & Creative Expression",
        "thumb": "assets/images/gallery/thumbs/DSC07142.jpg",
        "web": "assets/images/gallery/web/DSC07142.jpg"
    },
    {
        "id": "DSC07145",
        "category": "live",
        "caption": "YouTube Silver Award Commemoration",
        "thumb": "assets/images/gallery/thumbs/DSC07145.jpg",
        "web": "assets/images/gallery/web/DSC07145.jpg"
    },
    {
        "id": "DSC07146",
        "category": "portraits",
        "caption": "Signature Artist Portrait & Vision",
        "thumb": "assets/images/gallery/thumbs/DSC07146.jpg",
        "web": "assets/images/gallery/web/DSC07146.jpg"
    }
];

let activeGalleryItems = [];
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;

    renderGallery(defaultGalleryItems);
    setupGalleryFiltering();
    setupLightbox();
});

function renderGallery(items) {
    const grid = document.getElementById('masonry-grid');
    if (!grid) return;

    grid.innerHTML = '';
    items.forEach((item, index) => {
        grid.innerHTML += `
            <div class="gallery-item ${item.category}" data-category="${item.category}" data-web="${item.web}" data-caption="${item.caption}" data-index="${index}" tabindex="0" role="button" aria-label="${item.caption}">
                <div class="gallery-img" style="background-image: url('${item.thumb}');" data-src="${item.web}"></div>
                <div class="gallery-item-overlay">
                    <span class="gallery-item-caption">${item.caption}</span>
                </div>
            </div>
        `;
    });

    updateActiveItems();
}

function updateActiveItems() {
    activeGalleryItems = Array.from(document.querySelectorAll('.gallery-item'))
        .filter(el => el.style.display !== 'none');
}

function setupGalleryFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCat = item.getAttribute('data-category');
                if (filter === 'all' || itemCat === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 20);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });

            setTimeout(updateActiveItems, 320);
        });
    });
}

function setupLightbox() {
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const closeBtns = document.querySelectorAll('[data-close="lightbox"]');

    function openLightbox(item) {
        updateActiveItems();
        currentImageIndex = activeGalleryItems.indexOf(item);
        if (currentImageIndex === -1) currentImageIndex = 0;

        showImageAtIndex(currentImageIndex);

        lightboxModal.classList.add('active');
        lightboxModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            if (nextBtn) nextBtn.focus();
        }, 100);
    }

    function showImageAtIndex(idx) {
        if (activeGalleryItems.length === 0) return;

        if (idx >= activeGalleryItems.length) {
            currentImageIndex = 0;
        } else if (idx < 0) {
            currentImageIndex = activeGalleryItems.length - 1;
        } else {
            currentImageIndex = idx;
        }

        const targetItem = activeGalleryItems[currentImageIndex];
        const webSrc = targetItem.getAttribute('data-web') || targetItem.querySelector('.gallery-img').getAttribute('data-src');
        const caption = targetItem.getAttribute('data-caption') || 'Muthuja Sanahas';

        lightboxImg.src = webSrc;
        lightboxImg.alt = caption;
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');

        const mModal = document.getElementById('music-modal');
        const vModal = document.getElementById('video-modal');
        if ((!mModal || !mModal.classList.contains('active')) && (!vModal || !vModal.classList.contains('active'))) {
            document.body.style.overflow = '';
        }
    }

    const grid = document.getElementById('masonry-grid');
    if (grid) {
        grid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) openLightbox(item);
        });

        grid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const item = e.target.closest('.gallery-item');
                if (item) {
                    e.preventDefault();
                    openLightbox(item);
                }
            }
        });
    }

    closeBtns.forEach(btn => btn.addEventListener('click', closeLightbox));

    if (nextBtn) nextBtn.addEventListener('click', () => showImageAtIndex(currentImageIndex + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => showImageAtIndex(currentImageIndex - 1));

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showImageAtIndex(currentImageIndex + 1);
        if (e.key === 'ArrowLeft') showImageAtIndex(currentImageIndex - 1);
    });

    let touchStartX = 0;
    let touchEndX = 0;

    if (lightboxModal) {
        lightboxModal.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightboxModal.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const threshold = 50;
            if (touchEndX < touchStartX - threshold) {
                showImageAtIndex(currentImageIndex + 1);
            } else if (touchEndX > touchStartX + threshold) {
                showImageAtIndex(currentImageIndex - 1);
            }
        }, { passive: true });
    }
}
