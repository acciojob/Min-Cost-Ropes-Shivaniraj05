function mincost(arr)
{ 
//write your code here

	let tc = 0;
	arr.sort((a,b) => b-a);	

	while(arr.length > 1){
		let cc = arr[arr.length-1] + arr[arr.length-2];
		tc+=cc;

		arr.pop();
		arr.pop();

		arr.push(cc);

		arr.sort((a,b) => b-a);
	}

	return tc;
		
		
	}
// return the min cost
  
}

module.exports=mincost;
