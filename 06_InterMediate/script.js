const UnList = document.getElementById('uList')
const element = document.getElementById('car')

UnList.addEventListener('click',function(e){
    alert('Unordered List Clicked')
},false)

element.addEventListener('click',function(e){
    alert('Element was Clicked');
    e.stopPropagation();
},false)
