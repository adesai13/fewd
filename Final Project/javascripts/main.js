
// Tweet Generator----------------------------------//
$('a.tweet').click(function(e) {
  //Browser not to follow that link
  e.preventDefault();

  //URL of Link
  var loc = $(this).attr('href');

  //Title + Author of Quote
  var title  = escape($('p.quote').text())
  var author = escape($('p.author').text())

  //New Twitter Dialogue Page

        window.open('http://twitter.com/share?text=' + title + ' – '+ author + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
      });


      // Click function----------------------------------------//
      $("td").click(function() {
        $(".table").fadeOut(600, function() {
          $(".quotebox").fadeIn(600);
        });
      });

// Go back function--------------------------------------//
$(".goback").click(function() {
  $(".quotebox").fadeOut(600, function() {
    $(".table").fadeIn(600);
  })
});

// Animate Emoji
$('.emojimage').click(function () {
  $('.emojimage').addClass("animated");
  $('.emojimage').toggleClass("jello infinite");
})

// Animate "How are you Feeling"
$('.herotext').click(function () {
  $(this).addClass("animated rubberBand").on("animationend", function() {
    $(this).removeClass('rubberBand')
  });
})


// -------- Emoji Replace & Replace Quote---------------------//
$('td.happy').click(function() {
  $('.emojimage').attr("src",'images/happy.png')
  $('.anotherquote').click(replaceHappyQuote);
});

$('td.loved').click(function() {
  $('.emojimage').attr("src",'images/loved.png')
  $('.anotherquote').click(replaceLovedQuote);
});

$('td.inspired').click(function() {
  $('.emojimage').attr("src",'images/inspired.png')
  $('.anotherquote').click(replaceInspiredQuote);
});

$('td.sad').click(function() {
  $('.emojimage').attr("src",'images/sad.png')
  $('.anotherquote').click(replaceSadQuote);
});

$('td.guilty').click(function() {
  $('.emojimage').attr("src",'images/guilty.png')
  $('.anotherquote').click(replaceGuiltyQuote);
});

$('td.lonely').click(function() {
  $('.emojimage').attr("src",'images/lonely.png');
  $('.anotherquote').click(replaceLonelyQuote);
});



// Global Variable of quoteNum
var quoteNum = 0;



// --------------------- Quote Section ----------------------------- //


// Happy Quotes
var happyQuotes = [
  {
    quote:"I will prepare and some day my chance will come.", author:"Abraham Lincoln"
  },
  {
    quote:"Always be a first-rate version of yourself and not a second-rate version of someone else.",
    author:"Judy Garland"
  },
  {
    quote:"If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
    author:"Dalai Lama"
  },
  {
    quote:"The happiness of life is made up of the little charities of a kiss or smile, a kind look, a heartfelt compliment.",
    author:"Samuel Taylor Coleridge"
  },
  {
    quote:"Look at everything as though you were seeing it either for the first or last time. Then your time on earth will be filled with glory.",
    author:"Betty Smith"
  }
];

// Insert Happy Quotes

        var replaceHappyQuote = function () {
          $('.quote').text(happyQuotes[quoteNum].quote);
          $('.author').text(happyQuotes[quoteNum].author);

          if (quoteNum >= happyQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.happy').click(replaceHappyQuote);


// Loved Quotes

var LovedQuotes = [
  {
    quote:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered; it keeps no record of wrongs. It does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, and always perseveres.", author:"1 Corinthians 13:4-8"
  },
  {
    quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author:"Unknown"
  },
  {
    quote:"Perhaps love is like a resting place, a shelter from the storm. It exists to give you comfort, it is there to keep you warm, and in those times of trouble when you are most alone, the memory of love will bring you home.",
    author:"John Denver"
  },
  {
    quote:"Love is everything it's cracked up to be. It really is worth fighting for, being brave for, risking everything for.",
    author:"Erica Jong"
  },
  {
    quote:"What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do?",
    author:"Friedrich Nietzsche"
  }
];

// Insert Loved Quotes

        var replaceLovedQuote = function () {
          $('.quote').text(LovedQuotes[quoteNum].quote);
          $('.author').text(LovedQuotes[quoteNum].author);

          if (quoteNum >= LovedQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.loved').click(replaceLovedQuote);



// Inspired Quotes

var InspiredQuotes = [
  {
    quote:"The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    author:"William A. Ward"
  },
  {
    quote:"Be like a duck. Calm on the surface, but always paddling like the dickens underneath.",
    author:"Michael Caine"
  },
  {
    quote:"When the winds of change blow, some people build walls and others build windmills.",
    author:"Chinese Proverb"
  },
  {
    quote:"Every morning we are born again. What we do today matters most.",
    author:"Buddha"
  },
  {
    quote:"If opportunity doesn't knock, build a door.",
    author:"Milton Berle"
  }
];

// Replaced Inspired Quote
        var replaceInspiredQuote = function () {
          $('.quote').text(InspiredQuotes[quoteNum].quote);
          $('.author').text(InspiredQuotes[quoteNum].author);

          if (quoteNum >= InspiredQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.inspired').click(replaceInspiredQuote);

// Sad Quotes

var SadQuotes = [
  {
    quote:"No matter how much it hurts, how dark it gets or no matter how far you fall, you are never out of the fight.",
    author:"Marcus Luttrrell"
  },
  {
    quote:"Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying I will try again tomorrow.",
    author:"Mary Anne Radmacher"
  },
  {
    quote:"At the end of the day you can focus on what's tearing you apart, or what's holding you together.",
    author:"Unknown"
  },
  {
    quote:"Not until we are lost do we begin to find ourselves.",
    author:"Henry David Thoreau"
  },
  {
    quote:"For a star to be born, there is one thing that must happen: a nebula must collapse. So collapse, crumble: this is not your destruction. This is your birth.",
    author:"Unknown"
  }
];

// Replaced Sad Quote
        var replaceSadQuote = function () {
          $('.quote').text(SadQuotes[quoteNum].quote);
          $('.author').text(SadQuotes[quoteNum].author);

          if (quoteNum >= SadQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.sad').click(replaceSadQuote);

// Guilty Quotes

var GuiltyQuotes = [
  {
    quote:"Anyone can give up, it's the easiest thing in the world to do. But to hold it together when everyone else expects you to fall apart, that is true strength.",
    author:"Lao Tzu"
  },
  {
    quote:"Things that matter most must never be at the mercy of things that matter least.",
    author:"Johann Goethe"
  },
  {
    quote:"Today expect something good to happen to you no matter what occurred yesterday. Realize the past no longer holds you captive. It can only continue to hurt you if you hold on to it. Let the past go. A simply abundant world awaits.",
    author:"Sarah Ban Breathnach"
  },
  {
    quote:"No one can make you feel inferior without your consent.",
    author:"Eleanor Roosevelt"
  },
  {
    quote:"Be noble for you are made of stars. Be humble for you are made of earth.",
    author:"Serbian Proverb"
  }
];

// Replaced Gulity Quote
        var replaceGuiltyQuote = function () {
          $('.quote').text(GuiltyQuotes[quoteNum].quote);
          $('.author').text(GuiltyQuotes[quoteNum].author);

          if (quoteNum >= GuiltyQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.guilty').click(replaceGuiltyQuote);

// Lonely Quotes

var LonelyQuotes = [
  {
    quote:"Expect to have hope rekindled. Expect your prayers to be answered in wondrous ways. The dry seasons do not last. The spring rains will come.",
    author:"Sarah Ban Breathnach"
  },
  {
    quote:"May every sunrise hold more promise. May every sunset hold more peace.",
    author:"Unknown"
  },
  {
    quote:"Hardships often prepare ordinary people for extraordinary destiny.",
    author:"C.S. Lewis"
  },
  {
    quote:"Grant me the serenity to accept things that I cannot change, the courage to change things that I can, & the wisdom to know the difference.",
    author:"Reinhold Niebuhr"
  },
  {
    quote:"Inside myself is a place where I live all alone and that's where you renew your springs that never dry up.",
    author:"Pearl Buck"
  }
];

// Replaced Lonely Quote
        var replaceLonelyQuote = function () {
          $('.quote').text(LonelyQuotes[quoteNum].quote);
          $('.author').text(LonelyQuotes[quoteNum].author);

          if (quoteNum >= LonelyQuotes.length - 1) {
            quoteNum = 0;
          } else {
            quoteNum += 1;
          }
        }

        $('td.lonely').click(replaceLonelyQuote);
