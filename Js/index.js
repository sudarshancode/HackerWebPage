window.onload = () => {
    const image = document.getElementById('myImage');
    image.classList.add('rotate-mirror');
    
    
    setInterval(() => {
        image.classList.toggle('rotate-mirror');
    }, 2000);
};