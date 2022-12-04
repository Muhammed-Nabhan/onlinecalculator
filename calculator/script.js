function buttonclick(val)
{
    document.getElementById("display").value=document.getElementById("display").value+val;
}
function buttonclear(val)
{
    document.getElementById("display").value="";
}
function equalClick()
{
    var text= document.getElementById("display").value;
    var result=eval(text);
    document.getElementById("display").value=result;
}