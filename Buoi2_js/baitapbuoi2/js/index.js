function tinh_tong(n)
{
    var tong = 0;
    var index = 0;
 
    while (index <= n)
    {
        // Nếu số chẵn thì cộng vào
        if (index % 2 == 0){
            tong += index;
        }
 
        // tăng biến đếm
        index++;
    }
 
    document.write("Tổng số chẵn từ 1 tới " + n + " là: " + tong + "<br/>");
}