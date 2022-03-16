// object er vetor akta function thakte pare... function theke abr property access kora jay abong man change kora ba calculation kore return kora holo object er method

const student = {
    id: 101,
    name: "RJ Kkibria",
    money: 5000,
    subject: "psychology",
    isRich: false,
    others: ["sociology", "political science", "economics"],
    bestFriend: {
        name: "kundu",
        subject: "psychology",
    },
    takeExam: function(){
        console.log(this.name, "taking exam")
    },
    treatDey: function(expense, tip){
        this.money = this.money - expense - tip;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);

console.log(remaining1);
console.log(remaining2)