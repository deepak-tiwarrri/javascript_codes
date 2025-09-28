function balancedBracket(str) {
   let n = str.length;
   let stack = [];
   for(let i=0;i<n;i++){
      if(str[i]==='{' || str[i]==='[' || str[i]==='('){
         stack.push(str[i]);
      }else{
         //if stack is empty and bracket is closing then it means 
         //no opening bracket found
         if(stack.length===0) return false;
         let topChar = stack.pop();
         if((str[i]===')' && topChar==='(') || (str[i]==='}' && topChar==='{') || (str[i]===']' && topChar==='[')){
            continue;
         }else{
            return false;
         }
      }
   }
   //and at the end if stack is empty then it is valid
   //else stack is not balanced
   return stack.length===0;   
}

const result  = balancedBracket("[]{{}}");
console.log(result);