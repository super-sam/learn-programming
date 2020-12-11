#include<stdio.h>

void main(int number_of_parameter, char *pointer_array_storing_paramenter[])
{
    int i = 0;
    printf("\n\nthis is example of main with PARAMETER AND NO RETURN TYPE");

    printf("\nNUMBER OF PARAMETER INSERTED ARE :  %d\n", number_of_parameter);
    printf("\nTHE PARAMENTERS ENTERER ARE:\n");

    while(i <= number_of_parameter)
    {
        puts(pointer_array_storing_paramenter[i]);
        i++;
    }

}
