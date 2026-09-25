document.addEventListener('DOMContentLoaded', () => {
    
    // التفاعل عند الضغط على أزرار المنتجات
    const cardButtons = document.querySelectorAll('.btn-card');
    
    cardButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const cardTitle = e.target.parentElement.querySelector('h3').innerText;
            const cardPrice = e.target.parentElement.querySelector('.price').innerText;
            
            alert(`شكراً لاختيارك منصة تراست كارد!\n\nالمنتج: ${cardTitle}\nالسعر: ${cardPrice}\n\nسيتم إضافة خاصية الدفع والشراء المباشر قريباً.`);
        });
    });

    // التفاعل عند البحث
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query !== "") {
                alert(`جاري البحث في تراست كارد عن: "${query}"...`);
            } else {
                alert("يرجى كتابة كلمة للبحث عنها أولاً!");
            }
        });
    }

    // زر إضافة إعلان
    const addBtn = document.querySelector('.btn-primary');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert("ميزة إضافة الإعلانات للزوار قيد التطوير وستعمل قريباً!");
        });
    }
});
