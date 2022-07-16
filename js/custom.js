function codePreview(){
    var html = document.getElementById('htmlCode').value;
    var css = "<style>" + document.getElementById('cssCode').value + "</style>";
    var js = "<script>" + document.getElementById('jsCode').value + "</script>";
    var frame = document.getElementById("previewCon").contentWindow.document;
    frame.open();
    frame.write(html+css+js);
    frame.close();
}