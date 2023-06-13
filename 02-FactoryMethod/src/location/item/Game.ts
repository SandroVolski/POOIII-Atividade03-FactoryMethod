import IItem from "./interface/IItem";

export default class Game implements IItem {
    start(): void {
        this.getDescription();
        console.log("O Jogo vai comecar");
    }
    getDescription(): void {
        console.log("Jogo de acao e aventura");
    }

}