function ListPrimes(n)
{
    for (let j=0; j<10; j++)
    {
        if(isPrime(n[j]) == true)
        {
            console.log (n[j]);
        }
    }
}



function PrintPrimes(start,end)
{
    for (let i = start; i<=end; i++)
    {
        if (isPrime(i))
        {
            console.log(i);
        }
    }
}

function isPrime(n)
{   

    if (n==1 || n==2)
    {
        return true;
    }
    for (let i=2; i< n; i++)
    {
        if (n%i == 0)
        {
            return false;
        }

    }
    return true;
}

