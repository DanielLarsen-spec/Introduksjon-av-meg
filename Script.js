function openTab(){
if (document.getElementById('open').innerHTML ==""){
Danny()
}else{
    document.getElementById('open').innerHTML ="";
}
}
    
function Danny(){
document.getElementById('open').innerHTML = /*HTML*/`
<div class="Innercard">
<div>
Hei! jeg heter Daniel Larsen. Er 27 år gammel og kommer fra Larvik.
</div>

På fritiden driver jeg med:
<div>
<ul>
<li>Trening</li>
<li>Gaming</li>
<li>Golf</li>
<li>Svømming</li>
</ul>
</div>
</div>

`;
}















