var scrabbleScore = function(word){
    if (word.length === 0){
        return "Please enter a word";
    };

    var alphabet = {
        a :1, e :1, i :1, o :1, u :1, l :1, n :1, r :1, s :1, t :1,
        d :2, g :2,
        b :3, c :3, m :3, p :3,
        f :4, h :4, v :4, w :4, y :4,
        k :5,
        j :8, x :8,
        q :10, z :10
    };

    var word_lower = word.toLowerCase();
    var word_split = word_lower.split("");

    var sum = 0;

    word_split.forEach( function(letter) {
        sum += alphabet[letter];
    });

    return sum;
};

$(document).ready(function() {
    $("form#input").submit(function(event) {
        var word = $("input#word").val();
        var result = scrabbleScore(word);
        $(".score").text(result);
        event.preventDefault();
    });
});
