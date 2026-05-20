public class MinOf3 {
    static int  a =100,b=5,z=10;
    public static String minOfThree(){
    if(a<b&&a<z){
        return "a is smallest";
    } else if(b<a&& b<z){
         return "b is smallest";

    } else{
        return "z is the smallest";
    }
        
    
}
public static void main(String[] args) {
    String ans= minOfThree();
    System.out.println(ans);
}
}
