var Quotes = [

    {quote: "Be yourself; everyone else is already taken.",
     author: "- Oscar Wilde"
    },

    {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "- Marilyn Monroe"
    },

    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "- Albert Einstein"
    },

    {quote: "So many books, so little time.",
    author: "- Frank Zappa"
    },

    {quote: "A room without books is like a body without a soul.",
    author: "- Marcus Tullius Cicero"
    },

    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "- Bernard M. Baruch"
    },

    {quote: "You only live once, but if you do it right, once is enough.",
    author: "- Mae West"
    },

    {quote: "Be the change that you wish to see in the world.",
    author: "- Mahatma Gandhi"
    },

    {quote: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .",
    author: "- C.S. Lewis"
    },

    {quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    author: "- Marilyn Monroe"
    },
]



function generateQuote(){ 
    var index = Math.floor(Math.random() * Quotes.length);
    document.getElementById("quote").innerHTML= '" ' + Quotes[index].quote + ' "';
    document.getElementById("author").innerHTML=Quotes[index].author;

}


