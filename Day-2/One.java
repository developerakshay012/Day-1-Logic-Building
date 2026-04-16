public class One{


    public static void main(String[] args) {
        
        int num = 5;
       

        for(int  i = 1; i<=num; i++){
              int line =0 ;

            for(int j = 1; j<=i; j++){
                 line = (line+1) %2;
                System.out.print(line+" ");
            }
            System.out.println();
        }

    }
}