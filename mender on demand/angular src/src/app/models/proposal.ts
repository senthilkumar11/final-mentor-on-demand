export class Proposal
{
    id:number;
    tech:String;
    username:string;
    userEmail:string;
    mentorId:number;
    mentorName:string;
    mentorEmail:string;
    proposal:string;
    payment:string;
    fee:number;
    constructor(tech,username,userEmail,mentorid,mentorName,mentorEmail,proposal,payment,fee)
    {
        this.tech=tech;
this.username=username;
this.userEmail=userEmail;
this.mentorName=mentorName;
this.mentorEmail=mentorEmail;
this.mentorId=mentorid;
this.proposal=proposal;
this.payment=payment;
this.fee=fee;
    }
}