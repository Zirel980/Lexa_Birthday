const letter = `

Happy Birthday, my love.

Thank you for filling my life with laughter,
comfort, and unforgettable memories.

No matter where life takes us,
my favorite place will always be beside you.

I hope today reminds you
how deeply loved and appreciated you are.

Here's to many more adventures,
late-night conversations,
inside jokes,
and countless memories we'll create together.

I love you.
Happy Birthday ❤️

`;

let i=0;

function type(){

if(i<letter.length){

document.getElementById("typing").innerHTML+=letter.charAt(i);

i++;

setTimeout(type,40);

}

}

type();
