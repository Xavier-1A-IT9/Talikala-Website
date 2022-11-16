var TRange=null;
function findString (str) {
 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  strFound=self.find(str);
  if (strFound && self.getSelection && !self.getSelection().anchorNode) {
   strFound=self.find(str)
  }
  if (!strFound) {
   strFound=self.find(str,0,1)
   while (self.find(str,0,1)) continue
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {


  if (TRange!=null) {
   TRange.collapse(false)
   strFound=TRange.findText(str)
   if (strFound) TRange.select()
  }
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange()
   strFound=TRange.findText(str)
   if (strFound) TRange.select()
  }
}
}

const $toggler = document.querySelector(".toggler");
const $sidebar = document.querySelector(".sidebar");
const $main = document.querySelector(".main");
const $closeSidebarButton = document.querySelector(".closeSidebarButton");

$closeSidebarButton.addEventListener("click", () => {
  $sidebar.classList.remove("is-opened");
});

$toggler.addEventListener("click", () => {
  $sidebar.classList.toggle("is-opened");
});