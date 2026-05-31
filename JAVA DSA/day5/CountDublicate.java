

public class CountDublicate {
    public static int Printx(int [] myArr){
         int x=0;

        for(int i=1;i<myArr.length;i++){
            if(myArr[i]!=myArr[x]){
                x++;
                myArr[x]=myArr[i];
              
            }
           
        }
         return x+1;
    }
    public static void main(String[] args) {
        int [] myArr = {0,1,1,2,2,4,5,5};
        int result = Printx(myArr);
        System.out.println(result);

       
    }
    
}
