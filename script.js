// التفاعل عند الضغط على أزرار الشراء أو التفاصيل
document.addEventListener('DOMContentLoaded', () => {
    
    // ربط أزرار الشراء والتفاصيل للتفاعل
    const cardButtons = document.querySelectorAll('.btn-card');
    
    cardButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const cardTitle = e.target.parentElement.querySelector('h3').innerText;
            const cardPrice = e.target.parentElement.querySelector('.price').innerText;
            
            alert(`لقد اخترت: ${cardTitle}\nالسعر: ${cardPrice}\n\nسيتم توجيهك قريباً لطلب المنتج!`);
        });
    });

    // تفاعل زر البحث
    const searchBtn = document.querySelector('.btn-search');
    const searchInput = document.querySelector('.search-box input');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query !== "") {
                alert(`جاري البحث عن: "${query}"...`);
            } else {
                alert("يرجى كتابة كلمة للبحث عنها!");
            }
        });
    }
});
