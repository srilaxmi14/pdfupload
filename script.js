$(document).ready(function(){
  $('form').submit(function (e) {
    e.preventDefault();
    var pathvalue = $("#fileInput").val();
    console.log(pathvalue);
    var ext = pathvalue.substring(pathvalue.lastIndexOf('.') + 1);
    let value=pathvalue.split('\\').pop().split('/').pop();
    console.log(value);
    if(ext == "pdf" )
    {
    openPdf(value);
    } 
    else
    {
    alert("Upload pdf files only");
    return false;
    }
   console.log(value);
   e.target.reset();
   console.log("button is clicked");
});

function openPdf(value)
{
console.log(value);
$("#a").html(`<iframe id="myframe" src="/dummy/${value}.pdf" style="height:200px;width:300px;" title="Iframe Example"></iframe>`);
console.log(value);
var myFrame = document.getElementById("myframe");
myFrame.src = value
}

$('#button').click(function(){
  $(this).val("view another")
})
});  







// function openPdf(value)
// {
// console.log(value);
// $("#a").html(` <embed
// type=".pdf"
// src=${value}
// id="pdfload"
// >
// </embed>`);
// document.getElementById('pdfload').getSVGDocument()
// console.log(value);
// //var myFrame = document.getElementById("myframe");
// //$("#a").html(myFrame.src = value)
// }

// $('#button').click(function(){
//   $(this).val("view another")
// })
// });  


// $('form').submit(function (e) {
//      e.preventDefault();

//      value = $("#fileInput").val();
//      console.log(value);
//         // if (value.starts== ".pdf") {
//         //     openPdf(value);
//         // }
//         // else if(value!=".pdf"){
//         //     alert("please chose a pdf file");
//         // }

//     //$("#a").html(`<iframe src="${value}" style="height:200px;width:300px;" title="Iframe Example"></iframe>`);
//     // form.readAsDataURL(value);
//     console.log(value);
//     e.target.reset();
//     console.log(value);
//     console.log("button is clicked");
// });

// function openPdf(value)
// {
// console.log(value);
// //readAsDataURL(value);
// var myFrame = document.getElementById("myframe");
// //var myFrame=document.getElementById("myframe").contentWindow.location.href
// myFrame.src = value;
// }

// $('form').submit(function (e) {
//      e.preventDefault();

//      var value = $("#fileInput").val();
//      console.log(value);
//      openPdf(value);
//         // if (value.starts== ".pdf") {
//         //     openPdf(value);
//         // }
//         // else if(value!=".pdf"){
//         //     alert("please chose a pdf file");
//         // }

//     //$("#a").html(`<iframe src="${value}" style="height:200px;width:300px;" title="Iframe Example"></iframe>`);
//     // form.readAsDataURL(value);
//     console.log(value);
//     e.target.reset();
//     console.log("button is clicked");
// });
