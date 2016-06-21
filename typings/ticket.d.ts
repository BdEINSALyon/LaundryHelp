interface Ticket {
  _id?: string;
  date: Date;
  laundry: string;
  machine: string;
  problem: string;
  comment: string;
  person: Person;
  nbTokensToGive?: number;
  answerComment?: string;
  refunded?: Date;
}
