
$('form').submit(function (e) {
    e.preventDefault();
    value = $("#fileInput").val();
    //     if (value== ".pdf") {
    //         SetPage(value);
    //     }
    //     else if(value!=".pdf"){
    //         alert("please chose a pdf file");
    //     }
    // window.open(value,"_blank");
    e.target.reset();
    console.log(value);
    console.log("button is clicked");
});


// function SetPage(value)
// {
// console.log(value);
// document.getElementById("myframe").setAttribute("src", value);
// }


function openPdf(value)
{
var myFrame = document.getElementById("myframe");
myFrame.src = value;
}



