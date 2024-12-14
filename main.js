function translateText() {
    const inputText = document.getElementById('inputText').value;
    const language = document.getElementById('languageSelect').value;
    const outputText = document.getElementById('outputText');

    // Foydalanuvchi matn kiritmagan bo'lsa
    if (!inputText) {
        outputText.value = "Iltimos, tarjima qilmoqchi bo'lgan matnni kiriting!";
        return;
    }

    // API uchun til juftligi
    const langPair = `uz|${language}`;

    // MyMemory API URL
    const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${langPair}`;

    // API so'rovini yuborish
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // API javobini tekshirish
            if (data.responseData) {
                // Tarjima matnini chiqarish
                outputText.value = data.responseData.translatedText;
            } else {
                // Xatolik yuz berganida
                outputText.value = "Tarjima qilishda xatolik yuz berdi.";
            }
        })
        .catch(error => {
            // Xatoliklar bilan ishlash
            outputText.value = "Tarjima qilishda xatolik yuz berdi.";
            console.error('Error:', error);
        });
}
