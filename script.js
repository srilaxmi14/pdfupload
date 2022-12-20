
$('#button').click(function (e) {

  e.preventDefault();
  $(this).val("view another");
  var target = $("#fileInput").get(0);
  console.log(target);

  if (!target.files.length) {
    return;
  }
  file = target.files[0];
  console.log("main", file);
  console.log("list", file.name);
  // var fileName=$(this).prevAll('fileInput').val().
  var fileName = $(this).prevAll("input[type=file]").val();
  console.log("list of file:", fileName);


  if (file.type !== "application/pdf") {
    alert("Allow pdf files only");
    return;
  }

  var reader = new FileReader();
  var results;
  // reading as a text
  reader.readAsDataURL(file);
  console.log(reader);
  console.log(file);
  reader.onload = function () {
    results = reader.result;
    console.log("results", results);
    $("#pdfRender").html(`<iframe id="myFrame" src="${results}"  title="Iframe Example"></iframe>`);
  }

  // $('#selectFile').submit(function(e){
  //   var val = $(this).find('#fileInput').val();
  //   $('ul.list').append('<li>' + val + '</li>');
  //   console.log(val);
  //   e.preventDefault();
  // });

});




