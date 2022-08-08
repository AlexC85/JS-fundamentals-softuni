function login(input){
    let pass = input[0];
    let pass1 = '';
    let pass2 ='';
    let blocked = 0;
    outer: for(let i = 1; i < input.length; i++){
        pass1 = input[i];
        pass2 = '';
        for(let j = pass1.length - 1; j >= 0; j--){
            pass2 += pass1[j];
            if (pass == pass2){
                console.log(`User ${pass} logged in.`)
                break outer;
                }
            else if (pass1.length == pass2.length){
                blocked += 1;
                if (blocked == 4){
                    console.log(`User ${pass} blocked!`);
                    break outer;
                }
                console.log(`Incorrect password. Try again.`);
                
            }
           
        }
        
        
    }
  
}
login([`momo`, `omom`])