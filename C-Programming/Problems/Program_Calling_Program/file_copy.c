#include<stdio.h>
#include<stdlib.h>

int main(int argc, char *argv[])
{
    FILE *fp_in, *fp_out;
    char ch;
    if(argc != 3)
    {
        exit(-1);
    }

    if((fp_in = fopen(argv[1], "r")) == NULL)
    {
        exit(-2);
    }
    if((fp_out = fopen(argv[2], "w")) == NULL)
    {
        exit(-3);
    }
    while(!feof(fp_in))
    {
        ch = getc(fp_in);
        putc(ch, fp_out);
    }

    return 0;
}
