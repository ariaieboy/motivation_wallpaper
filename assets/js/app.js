// load the wallpaper after the window loaded
window.addEventListener('load', (e) => boot());

function generateDateString(year, month, day) {
    return year.toString() + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0')
}

// Listening to property changes in wallpaper engine conf
window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {
        if (properties.year && properties.month && properties.day) {
            let m = moment(generateDateString(properties.year.value, properties.month.value, properties.day.value))
            if (m.isValid()) {
                window.dateObj = m;
            }
        }
        if (properties.level) {
            window.level = properties.level.value
        }
    }
};

function boot() {
    changeWallpaper();
}

function changeWallpaper() {
    let imageUrl = `https://source.unsplash.com/collection/63442439/${window.screen.width}x${window.screen.height}`;
    document.body.style.background = `url("${imageUrl}"), linear-gradient(to right, #232526, #414345)`;
    let image = document.createElement('img');
    image.src = imageUrl;
    image.onload = () => document.getElementById('loader').style.display = "none";
}