function calculateTax(income,expense){

  if(income < 0 || expense < 0 || income<expense){
    return "Invalid Input";
  }

  let profit=income-expense;
  let tax=profit*.20;

  return tax;

}

function sendNotification(email){
  if(!email.includes("@")){
    return "Invalid Email";
  }
  
  const emailParts=email.split("@");
  let mailName=emailParts[0];
  let domainName=emailParts[1];

  return `${mailName} sent you an email from ${domainName}`

}


function checkDigitsInName(name){
  if(typeof name!=="string"){
    return "Invalid Input";
  }

  if(/\d/.test(name)){
    return true;
  }
  else{
    return false;
  }

}


function calculateFinalScore(obj){
  if(typeof obj!=="object"|| obj===null || Array.isArray(obj)){
    return "Invalid Input";
  }

  const { name, testScore, schoolGrade, isFFamily } = obj;

  if(typeof name!=="string"||
     typeof testScore!=="number" || testScore>50||
     typeof schoolGrade!=="number" || schoolGrade>30||
     typeof isFFamily!=="boolean"
  ){
    return "Invalid Input";
  }

  let finalResult=testScore+schoolGrade;
  
  if(isFFamily){
    finalResult+=20;
  }

  return finalResult>=80;
}



function waitingTime(waitingTimes,serialNumber){
  if(!Array.isArray(waitingTimes) || typeof serialNumber!=="number"){
    return "Invalid Input";
  }

  let sum=0;
  for(let i=0;i<waitingTimes.length;i++){
    if(typeof waitingTimes[i]!=="number"){
      return "Invalid Input";
    }
    sum+=waitingTimes[i];
  }
  let averageTime=Math.round(sum/waitingTimes.length);

  let serialRemaining=serialNumber-waitingTimes.length-1;
  
  if(serialRemaining<=0){
    return 0;
  }

  let finalWaitingTime=serialRemaining*averageTime;
  return finalWaitingTime;
}



