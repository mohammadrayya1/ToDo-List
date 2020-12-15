let theInput=document.querySelector('.add-task input');
let plus=document.querySelector('.add-task .plus');
let container=document.querySelector('.task-content');
let noMessge=document.querySelector('.task-content .no-task-message');
let cont=document.querySelector('.tasks-count span');
let complete=document.querySelector('.task-completed span');
var arraybox=[];
let countplus=0;
let deleteall=document.querySelector('.todo-container .deleteall');


function show()
{
    let element=document.createElement('span');
            element.className='no-task-message';
            let textel=document.createTextNode('No Task To Show');
            element.appendChild(textel);
            container.appendChild(element);
}


window.onload=()=>
{
    theInput.focus();
}

plus.addEventListener('click',()=>

{

if(theInput.value==='')
{
    console.log('No Value');
}
else
{
    noMessge.remove();

  let spantext=document.createElement('span');
  spantext.className='task-box';
  let text=document.createTextNode(theInput.value);

  let spandelet=document.createElement('span');
  spandelet.className='delete';

  let testdelet=document.createTextNode('delete');

  spandelet.appendChild(testdelet);



spantext.appendChild(text);
spantext.appendChild(spandelet);

arraybox.push(spantext);
container.appendChild(spantext);
++countplus;
cont.innerHTML =countplus;

}


});



deleteall.addEventListener('click',()=>
{
 

arraybox.forEach((items)=>
{
    items.remove();
});
cont.innerHTML=0;
countplus=0;
show();


});


document.addEventListener('click',(e)=>
{
    if(e.target.className=='delete')
    {
        e.target.parentNode.remove();
 
        console.log(countplus);
        countplus=countplus-1;
        cont.innerHTML =countplus;

        if(countplus==0)
        {
            show();
 
        }
    }

    if(e.target.classList.contains('task-box'))
    {
        e.target.classList.toggle('finished');
    }
});

