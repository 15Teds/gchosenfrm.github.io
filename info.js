console.log('Fetching Troop Info');
var WebmasterInfo = [['Chair Name','Karen Bograd'],
                     ['Chair Email', 'kbograd@troop1hopkinton.org'],
                     ['Chair Phone','508-904-5139'],
                     ['Scoutmaster Name','Damian Packer'],
                     ['Scoutmaster Email','<a href="mailto:scoutmaster@troop1hopkinton.org">scoutmaster@troop1hopkinton.org</a>'],
                     ['Scoutmaster Phone','(617) 909-9959'],
                     ['SPL Name','Aditya Kaushik'],
                     ['SPL Email','spl@troop1hopkinton.org'],
                     ['Webmaster Name','Daniel C-H']];
localStorage.setItem('DevInfo',WebmasterInfo);

var troopTags = document.getElementsByTagName('samp');
for(var i = 0;i < troopTags.length;i++){
  var found = false;
  for(var i2 = 0;i2<WebmasterInfo.length;i2++){
    if(troopTags[i].className == WebmasterInfo[i2][0]){
      troopTags[i].innerHTML = WebmasterInfo[i2][1];
      found = true;
    }
  }
  if(!found){console.warn('unidentified Troop Tag [Index: ' + i + ', classname: ' + troopTags[i].className + ']')}
}
