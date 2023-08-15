import inquirer from "inquirer";

let countDownToDate=await inquirer.prompt({
name:"countDownTo",
message:"Enter Date for CountDown"
});
let dateToCountDown=new Date(countDownToDate.countDownTo)
if (dateToCountDown.getTime() < Date.now()){
    console.log("Cannot count down to past.");
}else{
    while(true){        
       if( Date.now()>new Date(countDownToDate.countDownTo).getTime()){
        console.log("\nTimer Closed");
            break;
        }
        else{
            let tempdate=new Date(Date.now().valueOf());
            process.stdout.write(`${tempdate}`);
            process.stdout.cursorTo(0);
            //console.log(`${tempdate}\r\n`);
        }
    }
}
