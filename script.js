
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
//     form.readAsDataURL(value);
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


$('form').submit(function (e) {
    e.preventDefault();

    value = $("#fileInput").val();

function previewFile(file) {

    var reader  = new FileReader();
  
    reader.onloadend = function () {
      console.log(reader.value);
    }
    reader.readAsDataURL(value);
  }
});

