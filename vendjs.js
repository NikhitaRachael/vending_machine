window.onscroll = function() {stahead()};
var header = document.getElementById("Header");
var sticky = header.offsetTop;
function stahead() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function billing1()
{
  let price=document.getElementById("add1").value;
  let quan=document.getElementById("qty1").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing2()
{
  let price=document.getElementById("add2").value;
  let quan=document.getElementById("qty2").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing3()
{
  let price=document.getElementById("add3").value;
  let quan=document.getElementById("qty3").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing4()
{
  let price=document.getElementById("add4").value;
  let quan=document.getElementById("qty4").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing5()
{
  let price=document.getElementById("add5").value;
  let quan=document.getElementById("qty5").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing6()
{
  let price=document.getElementById("add6").value;
  let quan=document.getElementById("qty6").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing7()
{
  let price=document.getElementById("add7").value;
  let quan=document.getElementById("qty7").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}
function billing8()
{
  let price=document.getElementById("add8").value;
  let quan=document.getElementById("qty8").value;
  let amt=price*quan;
  alert("Total amount=Rs."+amt+". Proceed to pay.");
}