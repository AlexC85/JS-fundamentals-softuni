function companyUsers(input){
    let result = [];
    let employees = new Map();
    for (el of input){
        let token = el.split(' -> ');
        let company = token.shift();
        let employeeId = token.shift();
        if (!employees.has(company)){
            employees.set(company, new Set());
           }
           employees.get(company).add(employeeId);
    }
    
     
    result.sort();
    console.log(result.join(` \n`));
}
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])