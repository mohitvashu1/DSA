public class Palindrome {
   public static boolean CheckNum(int num){
    int ans=0;
    int original=num;

    
    while (num>0) {
        int rem =num%10;
        ans=(ans*10)+rem;
        num=num/10;
        
    }

    if(ans==original){
        return true;
    }else{
        return false;
    }
   }
    public static void main(String[] args) {
        int num = 12321;
        boolean result=CheckNum(num);
        System.out.println(result);
    }
}