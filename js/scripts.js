var scrabbleScore = function(word){
    if (word.length === 0){
        return "Please enter a word";
    }

    var alphabet = {
        a :1, e :1, i :1, o :1, u :1, l :1, n :1, r :1, s :1, t :1,
        d :2, g :2,
        b :3, c :3, m :3, p :3,
        f :4, h :4, v :4, w :4, y :4,
        k :5,
        j :8, x :8,
        q :10, z :10
    }

    var word_lower = word.toLowerCase();
    // var word_split = word_lower.split("");

    var sum = 0;

    // for(var i = 0; i < word_lower.length; i++){
    //     // var word_index = word_split[i];
    //     // console.log(word_index + " this is word_index in loop");

        // for(word_lower in alphabet){
        //     console.log(word_lower);
        //     sum += alphabet[word_lower];
        // }


    // }
    sum += alphabet[word];
    console.log(sum);
    return sum;
};



/*
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/
