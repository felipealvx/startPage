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
    { text: "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later.", author: "Mitch Hedberg" },
    { text: "Gentlemen, you can't fight in here. This is the war room.", author: "President Merkin Muffley (Peter Sellers), Dr. Strangelove" },
    { text: "My mother always used to say: The older you get, the better you get, unless you’re a banana.", author: "Rose (Betty White), The Golden Girls" },
    { text: "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.", author: "Jack Handey" },
    { text: "Clothes make the man. Naked people have little or no influence in society.", author: "" },
    { text: "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.", author: "Will Ferrell" },
    { text: "I love being married. It's so great to find that one special person you want to annoy for the rest of your life.", author: "Rita Rudner" },
    { text: "Ned, I would love to stand here and talk with you—but I’m not going to.", author: "Phil Connors (Bill Murray), Groundhog Day" },
    { text: "When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.", author: "Erma Bombeck" },
    { text: "I want my children to have all the things I couldn't afford. Then I want to move in with them.", author: "Phyllis Diller" },
    { text: "Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.", author: "Ellen DeGeneres" },
    { text: "Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.’", author: "Sumit Srivastava (me)" },
    { text: "Breaking up is like knocking over a Coke machine. You can’t do it in one push; you got to rock it back and forth a few times, and then it goes over.", author: "Jerry (Jerry Seinfeld), Seinfeld" },
    { text: "I’m not superstitious, but I am a little stitious.", author: "Michael Scott (Steve Carrell), The Office" },
    { text: "I walk around like everything’s fine, but deep down, inside my shoe, my sock is sliding off.", author: "Anonymous" },
    { text: "I haven't spoken to my wife in years. I didn't want to interrupt her.", author: "Rodney Dangerfield" },
    { text: "I used to sell furniture for a living. The trouble was, it was my own.", author: "Les Dawson" },
    { text: "There’s nothing wrong with you that an expensive operation can’t prolong.", author: "Surgeon (Graham Chapman), Monty Python’s Flying Circus" },
    { text: "Someone asked me, if I were stranded on a desert island what book would I bring: ‘How to Build a Boat.’", author: "Steven Wright" },
    { text: "Ted Striker: 'Surely you can’t be serious.' Dr. Rumack: 'I am serious. And don’t call me Shirley.'", author: "Ted Striker (Robert Hays) and Dr. Rumack (Leslie Nielsen), Airplane!" },
    { text: "There is no sunrise so beautiful that it is worth waking me up to see it.", author: "Mindy Kaling, Is Everyone Hanging Out Without Me?" },
    { text: "You know you’ve reached middle age when you’re cautioned to slow down by your doctor, instead of by the police.", author: "Joan Rivers" },
    { text: "Truth hurts. Maybe not as much as jumping on a bicycle with a seat missing, but it hurts.", author: "Lt. Frank Drebin (Leslie Nielsen), Naked Gun 2½: The Smell of Fear" },
    { text: "My Mama says that alligators are ornery because they got all them teeth and no toothbrush.", author: "Bobby Boucher (Adam Sandler), The Waterboy" },
    { text: "I never feel more alone than when I’m trying to put sunscreen on my back.", author: "Jimmy Kimmel" },
    { text: "Marriage is like an unfunny, tense version of Everybody Loves Raymond, but it doesn’t last 22 minutes. It lasts forever.", author: "Pete (Paul Rudd), Knocked Up" },
    { text: "Being a mom means never buying the right amount of produce. Either everyone suddenly loves grapes and a week’s worth are eaten in one afternoon, or fruit flies are congregating around my rotting bananas.", author: "Lessons from the Minivan" },
    { text: "I’m not insane. My mother had me tested.", author: "Sheldon Cooper (Jim Parsons), The Big Bang Theory" },
    { text: "Common sense is like deodorant. The people who need it most never use it.", author: "Anonymous" },
    { text: "If I’m not back in five minutes, just wait longer.", author: "" },
    { text: "I refuse to join any club that would have me as a member.", author: "Groucho Marx" },
    { text: "Do not take life too seriously. You will never get out of it alive.", author: "Elbert Hubbard" },
    { text: "People who think they know everything are a great annoyance to those of us who do.", author: "" },
    { text: "Get your facts first, then you can distort them as you please.", author: "" },
    { text: "I always wanted to be somebody, but now I realize I should have been more specific.", author: "" },
    { text: "No man has a good enough memory to be a successful liar.", author: "" },
    { text: "My fake plants died because I did not pretend to water them.", author: "" },
    { text: "Between two evils, I always pick the one I never tried before.", author: "" },
    { text: "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.", author: "" },
    { text: "We are all here on earth to help others; what on earth the others are here for I don't know.", author: "" },
    { text: "Laziness is nothing more than the habit of resting before you get tired.", author: "Jules Renard" }
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