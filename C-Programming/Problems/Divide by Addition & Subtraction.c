//ALGORITHM : DIVIDE TWO INTEGER AND FIND QUOTENT AND REMINDER USING ADDITION AND SUBTRACTION

/*
1: Read the value of x and y
2: Set the value of quotent to 0;
3: while x >= y
   do(step 3.1 and 3.2)
   3.1 x <- x-y
   3.2 q <- q+1
4: Display the value of quotent q and reminder x
*/

#include<stdio.h>

main()
{
      int x, y, quotent;
      quotent = 0;
      
      puts("ENTER x and y value : ");
      scanf("%d%d", &x, &y);
      if(x < 0 || y < 1)
           exit(-1);
      while(x >= y)
      {
              x = x - y;
              quotent++;
      }
      printf("quotent = %d, reminder = %d", quotent, x);
      getch();
} 
