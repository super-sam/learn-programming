#include<stdio.h>
#include<stdlib.h>

int main()
{
    char ch, password[82];
    int i = 0;
    printf("ENTER PASSWORD: ");
    while((ch = getch()) != '\r')
    {

        if((int)ch == 8)
        {
            printf("\b \b");
            password[i] = '\0';
            i--;
        }
        else
        {
            putchar('*');
            password[i] = ch;
            i++;
        }
    }
    password[i] = '\0';
    printf("\nyour password is : %s", password);
}
