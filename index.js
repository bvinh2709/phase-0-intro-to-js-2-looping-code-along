// Code your solutions in this file

function writeCards(name = ["Guadalupe", "Ollie", "Aki"], event = "surprise")
{
    let newArray =[];
    for(let i = 0; i < name.length; i++)
    {
        newArray[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(number)
{
    let i = number;
    while (i >= 0)
    {
        console.log(i);
        i--;
    }
    return i;
}
