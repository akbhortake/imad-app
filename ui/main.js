console.log('Loaded!');
var count=0;
var btn=document.getElementById('btn');
btn.onClick = function ()
{
    alert("hi");
    var span=document.getElementById("showcount");
    count=1+count;
    span.innerHTML("any");
};