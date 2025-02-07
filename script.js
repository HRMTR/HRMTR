// 轮播图功能
function setupCarousel() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    // 初始化轮播图
    images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none';
    });

    // 每5秒切换一次图片
    setInterval(showNextImage, 5000);
}

// 加载服务器文件列表
function loadServerFiles() {
    const fileList = document.getElementById('file-list');
    
    // 使用实际的文件列表，将HRMTR服务器3rd铁路建设要求.pdf排在第一位
    const files = [
        { name: 'HRMTR服务器3rd铁路建设要求.pdf', path: 'file/HRMTR服务器3rd铁路建设要求.pdf' },
        { name: 'HRMTR 071501 号文件.pdf', path: 'file/HRMTR 071501 号文件.pdf' },
        { name: 'HRMTR 081901 号文件.pdf', path: 'file/HRMTR 081901 号文件.pdf' },
        { name: 'HRMTR 082201 号文件.pdf', path: 'file/HRMTR 082201 号文件.pdf' }
    ];

    fileList.innerHTML = ''; // 清空现有的列表

    files.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.path;
        a.innerHTML = '<i class="fas fa-file-pdf"></i> ' + file.name;
        a.target = '_blank';
        
        li.appendChild(a);
        fileList.appendChild(li);
    });

    // 如果没有文件，显示一条消息
    if (files.length === 0) {
        const li = document.createElement('li');
        li.textContent = '暂无可用文件';
        fileList.appendChild(li);
    }
}
// 复制了文件代码，改一下 ——LeonMMcoset //
function loadServerFriends() {
    const fileList = document.getElementById('friends-list');
    
    // 使用实际的文件列表，将HRMTR服务器3rd铁路建设要求.pdf排在第一位
    const files = [
        { name: 'Leon轨道交通', path: 'https://leonmmcoset.github.io/vitepress/teach/mtr7180.html' },
        { name: '云山城市建设（暂时没有）', path: 'javascript:;alert(\'暂时没有\')' },
        { name: '永盛工艺（暂时没有）', path: 'javascript:;alert(\'暂时没有\')' },
        { name: 'MTR小众服务器', path: 'http://wujdyd.rth1.xyz'},
    ];

    fileList.innerHTML = ''; // 清空现有的列表

    files.forEach(file => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = file.path;
        a.innerHTML = '<i class="fas fa-server"></i> ' + file.name;
        // a.target = '_blank';
        
        li.appendChild(a);
        fileList.appendChild(li);
    });

    // 如果没有文件，显示一条消息
    if (files.length === 0) {
        const li = document.createElement('li');
        li.textContent = '暂无可用网站';
        fileList.appendChild(li);
    }
}

// 添加平滑滚动功能
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// 添加返回顶部功能

// 在文件末尾添加以下函数
function setupFullscreenImage() {
    const subwayImage = document.querySelector('#subway img');
    const body = document.body;

    subwayImage.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-overlay';
        
        const fullscreenImage = document.createElement('img');
        fullscreenImage.src = subwayImage.src;
        fullscreenImage.className = 'fullscreen-image';
        
        const closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-button';
        
        overlay.appendChild(fullscreenImage);
        overlay.appendChild(closeButton);
        body.appendChild(overlay);
        
        overlay.style.display = 'flex';
        
        body.style.overflow = 'hidden';
        
        // 移除所有与拖动相关的事件监听器
        
        closeButton.addEventListener('click', closeFullscreen);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeFullscreen();
            }
        });

        function closeFullscreen() {
            body.removeChild(overlay);
            body.style.overflow = '';
        }
    });
}

// 当页面加载完成时执行这些函数
window.addEventListener('load', () => {
    setupCarousel();
    loadServerFiles();
    loadServerFriends();
    setupSmoothScrolling();
    setupFullscreenImage();
});
