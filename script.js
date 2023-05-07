var i=0;
function changeColors(){
    var colors=["red","yellow","green","purple","blue","orange","brown","maroon","olive","fuchsia"]

    document.getElementsByTagName("body")[0].style.background=colors[i++];
    if(i==(colors.length-1)){
        i=0;
    }
}