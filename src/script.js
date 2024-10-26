   let three =  document.querySelector('#three_line');
 let up = document.querySelector('#up'); 
 let ul = document.querySelector('ul');
 let p_img = document.querySelectorAll('.p_img');
 let sicilian = document.querySelector ('.sicilian') ;
   
  three.addEventListener("click", ()=>{
      ul.classList.add('add_1');
      ul.classList.remove('add_2');      three.style.display='none';
      up.style.display='block';
  });
  
  up.addEventListener("click", ()=>{
      ul.classList.add('add_2');
      ul.classList.remove('add_1');      three.style.display='block';
      up.style.display='none';
  });
  
document.querySelectorAll('.p_img').forEach((p_img) => {
  p_img.addEventListener('click', () => {
    if (!p_img.classList.contains('active')) {
      document.querySelectorAll('.p_img').forEach((img) => {
        img.classList.remove('active');
      });
    }
    p_img.classList.toggle('active');
    sicilian.style.filter="blur(0px)";
  });
});