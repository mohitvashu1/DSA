

public class MaxOf3 {

    static int a = 100;
    static long b = 5000000000000L; // long because number is very large
    static int z = 1000;

    public static String maxOfThree() {

        if (a > b && a > z) {
            return "a is biggest among three";

        } else if (b > a && b > z) {
            return "b is biggest among three";

        } else {
            return "z is the biggest among three";
        }
    }

    public static void main(String[] args) {

        String ans = maxOfThree();
        System.out.println(ans);

    }
}