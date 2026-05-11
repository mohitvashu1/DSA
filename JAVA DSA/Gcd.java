public class Gcd{
    public static void main(String[] args) {
         int a=10, b=260;
        int n = Math.min(a, b);
int gcd =1;
        for(int i=1;i<=n;i++){
            if(a%i==0 && b%i==0){
                gcd = i;

            }

        }
        System.out.println(gcd);
    }
}