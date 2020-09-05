
//PROGRAM 1

var str ="weeeqwertyuio"
var ser="i"
for(var i=0;i<str.length;i++)
{
    if(str[i]==ser)
    {
        console.log("char is in "+i+" position" )
    }
}


//PROGRAM 2

var min =2;
console.log(min*60+" sec")

//PROGRAM 3

var person = ["shishir","sam","romen","indian"]
var ser ="a"
var count=0;
for(let key in person)
{
    for( i=0;i<person.length;i++)
    {
        if(person[i]==ser)
        {
            count++;
            break;
        }
    }
}


//PROGRAM 5

var att=[1,2,78,908,56678]
for(var i=4;i<=0;i++)
{
    console.log(att[i]);
}
