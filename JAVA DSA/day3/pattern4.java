
//      *
//     ***
//    *****
//   *******
//  *********
// ***********


public class pattern4 {

    public static void starPrint(){
        var n=5;
       for(var i=0 ; i<=n;i++){
        var star ="";
        for(var j=1;j<(n-i+1);j++){
            star+=" ";
        }
        for(var k=1;k<(i+1);k++){
            star+="*";
        }
         for(int var2 = 0; var2 <= i; ++var2) {
            star+="*";
         }
         System.out.println(star);
       }

    }
    public static void main(String[] args) {
        starPrint();
        
    }
    
}
