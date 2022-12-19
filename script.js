
$('#button').click(function (e) {
  
  e.preventDefault();
  $(this).val("view another");
  var target=$("#fileInput").get(0);
  console.log(target);
  if(!target.files.length)
  {
    return;
  }
  file=target.files[0];
  console.log("main",file);
 

  if(file.type!=="application/pdf")
  {
    alert("Allow pdf files only");
    return;
  }

  var reader=new FileReader();
  var results;
  // reading as a text
  let data= reader.readAsText(file);
  console.log(reader);
  console.log(file);
  reader.onload=function()
  {
      //console.log(data);
      results=reader.result;
      console.log("results",results);
     
      var data = getBase64(results);
      console.log(data);
      
      $("#pdfRender").html(`<iframe id="myFrame" src="${data}" style="height:500px;width:600px;" title="Iframe Example"></iframe>`);
      //alert(results);
      
  
  }

});
//   $('#button').click(function (e) {

//     e.preventDefault();
//     $(this).val("view another");
//     var target=$("#fileInput").get(0);
//     console.log(target);
//     if(!target.files.length)
//     {
//       return;
//     }
//     file=target.files[0];
//     console.log("main",file);
//     if(file.type!=="application/pdf")
//     {
//       alert("Allow pdf files only");
//       return;
//     }
//   const result=window.URL.createObjectURL(file);
//   $("#pdfRender").html(`<iframe src="${result}" style="height:500px;width:600px;" title="Iframe Example"></iframe>`);

// });

// function openPdf(value)
// {
//   e.preventDefault();
//   var target=$("#fileInput").get(0);
//   if(!target.files.length)
//   {
//     return;
//   }
//   file=target.files[0];
//   console.log("main",file);
//   if(file.type!=="application/pdf")
//   {
//     alert("pdf file");
//     return;
//   }
//   const objecturl=window.URL.createObjectURL(file);
// console.log(value);
// $("#a").html(`<iframe src="${objecturl}" style="height:200px;width:300px;" title="Iframe Example"></iframe>`);
// console.log(value);
// }

// $('#button').click(function(){
//   $(this).val("view another")
// })
// });  

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
