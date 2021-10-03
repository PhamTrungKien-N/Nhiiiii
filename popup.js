
//BẠN SỬA MÃNG BÊN DƯỚI, MỖI PHẦN TỬ LÀ MỘT KÍ TỰ TÍNH LUỐN KÍ TỰ TRẮNG NHÉ! BẠN CÓ THỂ THÊM NHIỀU PHẦN TỬ HƠN KHÔNG NHẤT THIẾT LÀ 28
//XEM KĨ VIDEO CỦA MÌNH HƠN Ở PHẦN NÀY NHÉ!

status="duminhphongadv"
var a=new Array(),n=""
a[1]='M';
a[2]='ó';
a[3]='n';
a[4]=' ';
a[5]='q';
a[6]='ù';
a[7]='a';
a[8]=' ';
a[9]='l';
a[10]='à';
a[11]=' ';
a[12]='b';
a[13]='í';
a[14]=' ';
a[15]='m';
a[16]='ậ';
a[17]='t';
a[18]='!';
a[19]=' ';
a[20]='Đ';
a[21]='ợ';
a[22]='i';
a[23]=' ';
a[24]='h';
a[25]='ế';
a[26]='t';
a[27]=' ';
a[28]='d';
a[29]='ị';
a[30]='c';
a[31]='h';
a[32]=' ';
a[33]='s';
a[34]='ẽ';
a[35]=' ';
a[36]='b';
a[37]='i';
a[38]='ế';
a[39]='t';
a[40]='♥';

function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==40)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					//PHẦN NÀY LÀ PHẦN HIỆN KHI BẠN BẤM "GỞI ĐI" LINK Ở SAU LÀ ICON MẶT CƯỜI XÓA BỎ CŨNG ĐƯỢC CÒN TEXT THÌ BẠN SỬA LẠI THEO Ý CỦA BẠN.
					$("#divResult").html("</br><h2>Ngày này 21 năm trước có một cô gái xinh đẹp đc chào đời💑 <img src=''</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>♥ Chúc cô gái của kiên ngày càng xinh đẹp, may mắn trong cuộc sống, yêu kiên hơn, nghe lời kiên hơn và mãi bên kiên nha 💖 .<img src=''/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>              Chúc Mừng sinh nhật của Nhi♥!🎂🎂🎂  <img src=''/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				