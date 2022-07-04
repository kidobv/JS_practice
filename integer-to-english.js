// Integer to English

// String[] tens = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
//     String[] ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",
//                     "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

//     public String numberToWords(int num) {
//         if (num == 0)
//             return "Zero";
        
//         return helper(num).trim();
//     }
    
//     private String helper(int num) {
        
//         if (num >= 1000000000) return (helper(num / 1000000000) + " Billion " + helper(num % 1000000000));
//         if (num >= 1000000) return (helper(num / 1000000) + " Million " + helper(num % 1000000));
//         if (num >= 1000) return (helper(num / 1000) + " Thousand " + helper(num % 1000));
//         if (num >= 100) return (helper(num / 100) + " Hundred " + helper((num % 100))).trim();
//         if (num >= 20) return (tens[num / 10] + " " + helper(num % 10)).trim();
//         return ones[num];
//     }

// private final String[] LESS_THAN_20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
// private final String[] TENS = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
// private final String[] THOUSANDS = {"", "Thousand", "Million", "Billion"};

// public String numberToWords(int num) {
//     if (num == 0) return "Zero";

//     int i = 0;
//     String words = "";
    
//     while (num > 0) {
//         if (num % 1000 != 0)
//     	    words = helper(num % 1000) +THOUSANDS[i] + " " + words;
//     	num /= 1000;
//     	i++;
//     }
    
//     return words.trim();
// }

// private String helper(int num) {
//     if (num == 0)
//         return "";
//     else if (num < 20)
//         return LESS_THAN_20[num] + " ";
//     else if (num < 100)
//         return TENS[num / 10] + " " + helper(num % 10);
//     else
//         return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);
// }