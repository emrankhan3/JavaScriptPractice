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

<p id='id'> </p>

<div id='dv'>
</div>
<script>
  document.getElementById('id').innerHTML = 'Bismillah</br>';
  arr = [2,3,5,7,11,13,17]
  
  txt =""
  ko = arr.filter((ind,val,a)=>{
    txt+= ind*3*7*11*13;
    txt+='</br>'
   
    return ind%10==7
  })
  console.log(ko)
  document.getElementById('dv').innerHTML=txt;
  
</script>


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

<!--Array Iteration   -->
<p id='id'> </p>

<div id='dv'>
</div>
<script>
  document.getElementById('id').innerHTML = 'Bismillah</br>';
  arr = [
    {name:'emran',act:"programmer"},
    {name:'shahadat',act:"programmer"},
    {name:'sayed',act:"assistant engineer"},
    {name:'anamul',act:"bcs"},
    {name:'monir',act:"bcs"}
  ]
  
  txt =""
  for(it of arr){
    txt+=`name: ${it.name}, act: ${it.act}</br>`
  }
  document.getElementById('dv').innerHTML=txt;
  
</script>
<!--Array Iteration   -->
<p id='id'> </p>

<div id='dv'>
</div>
<script>
  document.getElementById('id').innerHTML = 'Bismillah</br>';
  arr = [1,9,9,2,3,4,5,5,6,7,8]
  
  txt = "";
  txt+=arr.map((v)=>v*2+'</br>')
  console.log(txt)
  document.getElementById('dv').innerHTML=txt;
  
</script>

<!--Array Iteration   -->
<p id='id'> </p>
<div class="th"> this is the javascirpt practice file</div>
<div id='dv'>
</div>
<script>
  document.getElementById('id').innerHTML = 'Bismillah</br>';
   const prime = (v)=>{
     if (v==1)return false;
     for(let i=2; i*i<=v; i++){
       if(v%i==0)return false;
     }
     return true;
   }
  arr = [1,2,3,4,5,6,7,8,9,10]
  txt=""
  v = arr.filter((val)=>{return prime(val)})
  for(vals of v)txt+=`${vals}</br>`
  document.getElementById('id').innerHTML = txt
  
</script>

//==========================prime number and their binary representation============
document.getElementById('id').innerHTML = "hello"
const reverseStr = (s)=>{
  txt = "";
  for(i = s.length-1; i>-1; i--)txt+=s[i];
  return txt;
}
const binaryRepresentation = (n)=>{
  txt = "";
  while(n>0){
    txt+=(n&1);
    n>>=1;
  }
  return reverseStr(txt);
}
const boom = ()=>{  
  let val = document.getElementById('ip').value;
  txt = ""
  const arr = [];
  for(i=0; i<=val; i++)arr[i]=1;
  
  for(let i=2; i<=val; i++){
    if(arr[i]==1){
      
      txt+=`${i}:    ${binaryRepresentation(i)}</br>`
      for(j=i+i; j<=val; j+=i){
         arr[j]=0;
      } 
    }
  }
  document.getElementById('dv').innerHTML=txt
}

///// button - query selector 
  document.querySelectorAll('button').forEach((button)=>{
    button.onclick = ()=>{
      document.querySelector('#head').style.color=button.dataset.c
    }
  })
////////////////////////
