document.addEventListener('DOMContentLoaded', function() {
    const fruits = ['Apple🍎', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
    const input = document.getElementById('fruit-search');
    const suggestions = document.querySelector('.suggestions ul');

    function highlightSuggestion(e) {
        // Remove highlight from all suggestions
        document.querySelectorAll('.suggestions li').forEach(li => {
            li.classList.remove('highlight');
        });
        // Highlight the suggestion under the cursor
        e.target.classList.add('highlight');
    }

    input.addEventListener('input', function() {
        const inputVal = this.value.trim().toLowerCase();
        suggestions.innerHTML = ''; // Clear existing suggestions
        if (inputVal.length > 0) {
            const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(inputVal));
            filteredFruits.forEach(fruit => {
                const li = document.createElement('li');
                li.textContent = fruit;
                // Add event listener for hover to highlight suggestion
                li.addEventListener('mouseover', highlightSuggestion);
                // Add event listener for click to select the suggestion
                li.addEventListener('click', function() {
                    input.value = this.textContent;
                    suggestions.innerHTML = ''; // Clear suggestions after selection
                });
                suggestions.appendChild(li);
            });
        }
    });
});
