// The Nullish Coalescing Operator
=====================================

<p id='p'></p> // cat

<script>
 y = 'cat'
 x = null
  x??=y;
  document.getElementById('p').innerHTML=x

</script> -->

<!-- <!-- Practicing javaScript Objects and methods as well as this  -->
=========================================================================
<!-- <p id='id'></p>
sss

<script>
  let element = document.getElementById('id');
  const hum = {
    name : "Emran",
    skill: "Fighter",
    programmingLanguage: "javaScript",
    fun : function() {
      return this.name+" "+this.skill;
    }
  
  }
   
  
  element.innerHTML = hum.fun();
  
</script>  -->


<!--  practicing js string methods -->
===========================================
<!-- <p id='id'></p>


<script>

  sot = function(){
        let element = document.getElementById('id');
        aa = "this is the osthir string"
    element.innerHTML = aa.slice(0,aa.length);
  }
  sot()
  
</script>  -->
<!--  practicing js string methods -->
<!-- <p id='id'></p>


<script>

  sot = function(){
    let element = document.getElementById('id');
    aa = "this is the osthir string   "
    // aa = aa.split("")
    mainString = `this is the string, ${aa} ${4+4+'e'} 
      <h2 style="color:#f1356d">Bismillah</h2>
      
    `
   
    aa[0]='d';
    //st="";
    aa = aa.toString(",")
    // for(int i=0; i<aa)
    element.innerHTML = mainString;
  }
  sot()
  
</script>  -->
<!-- <!--  practicing js string methods -->
<!-- <p id='id'></p>

<p id='ar'  style="color:#f1356d" ></p>

<button onclick=fun1()>Sort Normally</button>

<button onclick=fun2()>Sort Reverse</button>

<script>
  txt = `<h2 style="color:#f1356d">Bismillah</h2>`;
  document.getElementById('id').innerHTML = txt;
  arr = [3,4,2,12,3,23,13,54,213,3,4,25,23,4,234]
  const cars = [
    {'name' :'toyota','year' : '2021'},
    {'name' :'mer','year' : '2010'},
    {'name' :'vols','year' : '1991'},
    {'name' :'muta','year' : '2201'},
    {'name' :'akomo','year' : '2051'}
  ]
  txt = "";
  for(i=0; i<cars.length;i++){
    txt+=cars[i].name+" "+cars[i].year+"<br>";
  }
  
  
  document.getElementById('ar').innerHTML=txt;
  
  
  

    
  const fun1=()=>{
    cars.sort(function(a,b){return a.year-b.year})
    txt="" 
    for(i=0; i<cars.length;i++){
    txt+=cars[i].name+" "+cars[i].year+"<br>";
  }
     document.getElementById('ar').innerHTML=txt;
    
  }
  
  
  const fun2=()=>{
    cars.sort(function(a,b){
      x = a.name.toLowerCase();
      y = b.name.toLowerCase();
      if(x<y){return -1;}
      if(x>y){return 1;}
      return 0;
       
    });
    txt="" 
    for(i=0; i<cars.length;i++){
    txt+=cars[i].name+" "+cars[i].year+"<br>";
    }
     document.getElementById('ar').innerHTML=txt;
  }
</script>   -->

<!--Array Iteration   -->
====================================================
<!-- <p id='id'> </p>

<div id='dv'>
</div>
<script>
  document.getElementById('id').innerHTML = 'Bismillah</br>';
  arr = [2,3,5,7,11,13,17]
  
  txt =""
  arr.forEach((ind,val,a)=>{
    txt+= ind*3*7*11*13;
    txt+='</br>'
    
  })
  document.getElementById('dv').innerHTML=txt;
  
</script> -->
