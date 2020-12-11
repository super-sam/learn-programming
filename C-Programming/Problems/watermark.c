#include<stdio.h>
#include<stdlib.h>

int main(void)
{
    char ch, buffer[81];
    int i = 0;
    buffer[0] = '\0';
    printf("ENTER YOUR TEXT HERE\r");
    while((ch = getch()) != '\r')
    {
        if(i == 0)
        {
            printf("ENTER YOUR TEXT HERE\r");
        }
        if((int)ch == 8 && i>0)
        {
            printf("\b \b");
            buffer[--i] = '\0';
        }
        else
        {
            buffer[i++] = ch;
            buffer[i] = '\0';
            putchar(ch);
        }
        if(i == 1)
        {
            printf("\r\t\t\t\t\r");
            printf("%s", buffer);
        }
        if(i == 0)
        {
            printf("ENTER YOUR TEXT HERE\r");
        }
    }
    printf("\n%s\n", buffer);
}
