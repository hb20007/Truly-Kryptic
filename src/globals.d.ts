declare const NODE_ENV;
declare const FIREBASE_PROJECT;

declare module "*.html";
declare module "*.scss";
declare module "*.json";

declare interface Level {
    title: String;
    hints: Array<Hint>;
    answers: Array<string>;
}

declare interface hofUser {
    name: String;
    country: String;
    comment: String;
}

declare type Hint = ({ image: String } | { text: String } | { audio: String }) & { triggers: string[] };