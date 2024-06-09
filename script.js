const cards =[
    {
        img:`./images/yuta-okutsuki.jpg`,
        title:`Yuta Okkotsu`,
        description:`Yuta Okkotsu, a talented Jujutsu High student, wields the powerful curse Rika, showing immense potential and determination, becoming a key figure in the fight against curses.`,
    },
    {
        img:`./images/gojo-satoro.jpg`,
        title:`Gojo Satoro`,
        description:`Gojo Satoru, an exceptional sorcerer with the Six Eyes and Limitless cursed technique, is known for his unmatched strength and confidence, protecting humanity from curses.`,
    },
    {
        img:`./images/sukuna.jpg`,
        title:`Ryomen Sukuna`,
        description:`Ryomen Sukuna, the King of Curses, is a malevolent and ancient sorcerer turned curse with immense power, feared by both sorcerers and curses alike for his cruelty.`,
    },
    {
        img:`./images/mei.avif`,
        title:`Mei Mei`,
        description:`Mei Mei, a skilled and pragmatic Grade 1 sorcerer, excels in battle with her versatile and strategic use of the Black Bird Manipulation technique, prioritizing wealth and power.`,
    },
]
const cardContainer = document.querySelector('.card-container');

cards.forEach(card =>{
    const cardBox = document.createElement('div');
    cardBox.classList.add('card-box');
    cardBox.innerHTML = `
    <div class="img-box" style="background: url('${card.img}') no-repeat center / cover;"></div>
                <div class="card">
                    <div class="title-box">${card.title}</div>
                    <div class="descrip-box">${card.description}</div>
                </div>
    `;
    cardContainer.appendChild(cardBox);
})