
1. forEach() returns nothing. It just iterate through the array
2. map() returns an array which has the same length as the old array. 
3. filter() return an array which is a subset of the old array based on condition. [ returns subset ] 

This C++ code 

int ar[10] = [1,2,3,4,5,6,7,8,9,10]

vector<int>v;
for(int i=0; i<10; i++){
  if( prime(ar[i]) ) v.push_back(ar[i]);
}

is similar to this:
let ar =[1,2,3,4,5,6,7,8,9,10]
v = ar.filter((val)=>return prime(val))



