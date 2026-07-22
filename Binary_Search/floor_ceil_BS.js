class Solutions {
   constructor(nums,x) {
      this.nums = nums;
      this.x = x;
   }
   findFloor(nums,x){
      //largest value <=x;
      let low =0,high = nums.length-1;
      let ans = -1;
      while(low<=high){
         let mid = low + Math.floor((high-low)/2);
         if(nums[mid]<=x){
            ans = nums[mid];
            low = mid+1;
         }else{
            high = mid-1;
         }
      }
      return ans;
   }
   findCeil(nums,x){
      //smallest value >=x;
      let low =0,high = nums.length-1;
      let ans = -1;
      while(low<=high){
         let mid = low + Math.floor((high-low)/2);
         if(nums[mid]>=x){
            ans = nums[mid];
            high = mid-1;
         }else{
            low = mid+1;
         }
      }
      return ans;
   }
   getFloorCeilBS(nums,x){
      let floor = this.findFloor(nums,x);
      let ceil = this.findCeil(nums,x);
      return [floor,ceil];
   }
}

let nums =[3, 4, 4, 7, 8, 10], x= 5;
let sol = new Solutions(nums,x);
let result = sol.getFloorCeilBS(nums,x);
console.log(result);