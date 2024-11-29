function toggleSidebar() {
    var sidebar = document.querySelector('#sidebar');
    var content = document.querySelector('#content');
    var overlay = document.querySelector('#overlay');
    var isVisible = sidebar.style.left === '0px';

    if (isVisible) {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '60px';
        overlay.style.display = 'none';
    } else {
        sidebar.style.left = '0px';
        content.style.marginLeft = '250px';
        overlay.style.display = 'block';
    }
}

function closeSidebar() {
    var sidebar = document.querySelector('#sidebar');
    var content = document.querySelector('#content');
    var overlay = document.querySelector('#overlay');

    sidebar.style.left = '-250px';
    content.style.marginLeft = '60px';
    overlay.style.display = 'none';
}
