function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


var a;
function showhide()
{
    if(a==1)
    {
        document.getElementById("map").style.display="inline";
        return a=0;
    }

    else
    {
        document.getElementById("map").style.display="none";
        return a=1;
    }

}