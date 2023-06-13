import IItem from "./interface/IItem";

export default class Movie implements IItem {
    start(): void {
        this.getDescription();
        console.log("O Filme esta comecando");
    }
    getDescription(): void {
        console.log("Filme de comedia");
    }

}