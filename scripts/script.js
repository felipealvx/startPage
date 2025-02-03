function startTime() {
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM/PM
    hours = hours % 12; // Convert hours to 12-hour format
    hours = hours ? hours : 12; // If hour is 0 (midnight), set it to 12
    min = checkTime(min);

    document.getElementById('txt').innerHTML = hours + ":" + min + " " + ampm;
    document.getElementById('seconds').innerHTML = sec;
    time = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

startTime();

const quotes = [
    { text: "We cannot solve problems with the kind of thinking we employed when we came up with them.", author: "Albert Einstein" },
    { text: "Learn as if you will live forever, live like you will die tomorrow.", author: "Mahatma Gandhi" },
    { text: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.", author: "Mark Twain" },
    { text: "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.", author: "Eleanor Roosevelt" },
    { text: "When you change your thoughts, remember to also change your world.", author: "Norman Vincent Peale" },
    { text: "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.", author: "Walter Anderson" },
    { text: "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.", author: "Diane McLaren" },
    { text: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.", author: "Dale Carnegie" },
    { text: "Nothing in the world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ‘Press On’ has solved and always will solve the problems of the human race.", author: "Calvin Coolidge" },
    { text: "There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.", author: "Mister Rogers" },
    { text: "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.", author: "John Wooden" },
    { text: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { text: "Success is getting what you want; happiness is wanting what you get.", author: "W. P. Kinsella" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { text: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.", author: "Steve Jobs" },
    { text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Sanders Law" },
    { text: "To know how much there is to know is the beginning of learning to live.", author: "Dorothy West" },
    { text: "Goal setting is the secret to a compelling future.", author: "Tony Robbins" },
    { text: "Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.", author: "Alexander Graham Bell" },
    { text: "Either you run the day or the day runs you.", author: "Jim Rohn" },
    { text: "I’m a great believer in luck, and I find the harder I work, the more I have of it.", author: "Thomas Jefferson" },
    { text: "When we strive to become better than we are, everything around us becomes better too.", author: "Paulo Coelho" },
    { text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.", author: "Thomas Edison" },
    { text: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
    { text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.", author: "Steve Jobs" }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    const quote = getRandomQuote();
    document.getElementById('quote').textContent = `"${quote.text}"`;
    document.getElementById('author').textContent = `— ${quote.author}`;
}

// Call displayQuote on page load
window.onload = displayQuote;