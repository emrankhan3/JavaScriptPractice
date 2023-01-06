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
