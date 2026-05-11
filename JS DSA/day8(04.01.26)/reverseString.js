let s =["h","e","l","l","o"];


function reverseString(){
    let n=s.length
    let halfn=Math.floor(n/2)

    for(i=0;i<halfn;i++){
    let swap=s[i]
    s[i]=s[n-1-i]
    s[n-1-i]=swap
}
return s
} 

console.log(reverseString());                                           