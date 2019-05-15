//热门景点选项卡
window.onload = function(){
    var act = document.getElementById('city').getElementsByTagName('a');
    var att = document.getElementById('po').getElementsByTagName('ul');
    for(i = 0;i<act.length;i++){
        act[i].index = i;
        act[i].onclick = function(){
            for(j = 0;j<act.length;j++){
                act[j].className = '';
                att[j].style.display = 'none';
            }
            this.className = 'act';
            att[this.index].style.display = 'flex';
        }
    }
}


// 下拉刷新
var c1 = document.getElementById('cy1');
var c2 = document.getElementById('cy2');
var c3 = document.getElementById('cy3');
var btn = document.getElementById('btn');
btn.onclick = function(){
    c1.style.display = 'flex';
    c2.style.display = 'flex';
    c3.style.display = 'flex';
    btn.style.display = 'none';
}