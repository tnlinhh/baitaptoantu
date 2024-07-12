            //Bài 1
/*
    21 * (53 + '5' - '2') + 21 - '20' / '5' - (11 + 2 - '6' * 4)
  = 21 * ('535' - '2') + 21 - '20'/ '5' - (13 - 24)
  = 21 * 533 + 21 - 4 + 11
  = 11221
*/

            //Bài 2
/*
    a = 1; b = 2, 
    c = b++ - --b + a++ - b-- + ++a 
      = 2 - 2 + 1 - 2 + 3
      = 2

    b++ = 2 (sau đó sẽ tăng lên 3)
    --b = 2 (vì bị giảm 1 trước khi sử dụng)
    a++ = 1 (sử dụng rồi tăng lên 2)
    b-- = 2 (giá trị b được sử dụng rồi sau đó mới giảm xuống 1)
    ++a = 3 (giá trị trước đó là 2 tăng lên 1)
Vậy a = 3 , b = 1 , c = 2
   
*/    
let a = 1;
let b = 2;
let c = b++ - --b + a++ - b-- + ++a ;
alert("a = " + a + ", b = " + b + ", c = " +c);

