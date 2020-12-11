#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(int argc, char *argv[])
{
    char *command;
    char fp_in[20], fp_out[20], prog[20];
    int i;
    puts("Enter the operation name");
    gets(prog);
    puts("enter the Input File name");
    gets(fp_in);
    puts("Enter the output file name");
    gets(fp_out);
    command = (char*)malloc(100*sizeof(char));

    command = strcpy(command, prog);
    command = strcat(command, " ");
    command = strcat(command, fp_in);
    command = strcat(command, " ");
    command = strcat(command, fp_out);
    command = strcat(command, " ");

    puts(command);

    i = system(command);

    if(i == -1)
    {
        printf("ERROR : Input File and Output file name must be given");
    }
    else if(i == -2)
    {
        printf("\nERROR : Input file not Found\n");
    }
    else if(i == -3)
    {
        printf("\nERROR : Input file not Found\n");
    }
    else if(i == 0)
    {
        printf("\nFILE sucessfully copied\n");
    }

    return 0;

}
