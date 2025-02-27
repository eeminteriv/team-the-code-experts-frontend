import { NgIf } from "@angular/common";

export class Post {
    messageId: number;
    appUser: {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        username: string;
    }
    dateStamp: string;
    messageTitle: string;
    messageBody: string;
    responses: [];
    voteSummary: number;
    votes:  [
                voteId: number,
                // messageId: number,
                // responseId: number,
                // appUser: [],
                // value: number,
            ];
    flags: [
                flagId: number,
                reasonId: number 
    ];
}