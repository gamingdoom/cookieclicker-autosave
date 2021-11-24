function (autosave) {
var filename=Game.bakeryName.replace(/[^a-zA-Z0-9]+/g,'')+'Bakery'+Date.now();
var text=Game.WriteSave(1);
var blob=new Blob([text],{type:'text/plain;charset=utf-8'});
saveAs(blob,filename+'.txt');
}
autosave();