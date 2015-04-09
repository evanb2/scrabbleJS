var scrabbleScore = function(word) {
    var group1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var group2 = ["D", "G"];
    var group3 = ["B", "C", "M", "P"];
    var group4 = ["F", "H", "V", "W", "Y"];
    var group5 = ["K"];
    var group6 = ["J", "X"];
    var group7 = ["Q", "Z"];

    var word_upper = word.toUpperCase();
    var split_word = word_upper.split("");
    var sum = sum_group1 + sum_group2;
    var sum_group1 = 0;
    var sum_group2 = 0;

    for(var j = 0; j<split_word.length; j++)
    {
        for(var i = 0; i<group1.length; i++)
        {
            if(group1[i] === split_word[j])
            {
                sum_group1++;
            }
            console.log(sum_group1);
            return sum_group1;
        }

        for(var i = 0; i<group2.length; i++)
        {
            if(group2[i] === split_word[j])
            {
                sum_group2 += 2;
            }
            console.log(sum_group2);
            return sum_group2;
        }
        //
        // for(var i = 0; i<group3.length; i++)
        // {
        //     if(group3[i] === split_word[j])
        //     {
        //         sum += 3;
        //     }
        // }
    }
    return sum;
}
