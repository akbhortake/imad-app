console.log('Loaded!');
var count=0;
var btn=Doucument.getElementById("btn");
var span=Doucument.getElementById("showcount")
btn.onClick()
{
    count=1+count;
    span.innerHTML(count.toStirng());
}