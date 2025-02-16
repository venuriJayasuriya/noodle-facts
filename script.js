const noodleFacts = [
    {
        fact: "Ancient Origins",
        description: "Noodles are believed to have originated in China over 4,000 years ago."
    },
    {
        fact: "Variety of Types",
        description: "There are many types of noodles, including wheat noodles, rice noodles, egg noodles, and buckwheat noodles."
    },
    {
        fact: "Cultural Significance",
        description: "In many cultures, noodles symbolize longevity and are often served during birthdays and celebrations."
    },
    {
        fact: "Global Popularity",
        description: "Noodles are a staple food in many countries, including Italy (pasta), Japan (soba and udon), and Thailand (rice noodles)."
    },
    {
        fact: "Different Cooking Methods",
        description: "Noodles can be boiled, fried, or baked, and they can be served in soups, stir-fries, or salads."
    },
    {
        fact: "Nutritional Value",
        description: "Noodles can be a good source of carbohydrates, and whole grain or vegetable-based noodles can provide additional nutrients and fiber."
    },
    {
        fact: "Instant Noodles",
        description: "Instant noodles were invented in Japan in 1958 by Momofuku Ando."
    },
    {
        fact: "Noodle Festivals",
        description: "Many regions celebrate noodle festivals, showcasing local noodle dishes."
    },
    {
        fact: "Noodle Shapes",
        description: "Noodles come in various shapes and sizes, including long strands (like spaghetti) and tiny shapes (like orzo)."
    },
    {
        fact: "Culinary Techniques",
        description: "The art of making noodles from scratch involves techniques such as kneading, rolling, and cutting."
    }
];

document.getElementById('factButton').addEventListener('click', function() {
    const loading = document.getElementById('loading');
    const factDisplay = document.getElementById('factDisplay');
    
    loading.style.display = 'block';
    factDisplay.innerHTML = '';

    setTimeout(() => {
        loading.style.display = 'none';
        const randomFact = noodleFacts[Math.floor(Math.random() * noodleFacts.length)];
        factDisplay.innerHTML = `<h2>${randomFact.fact}</h2><p>${randomFact.description}</p>`;
    }, 1000); // Simulate loading time
});
