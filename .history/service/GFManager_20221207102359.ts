import {GirlFriend} from '../model/GirlFriend';
import { girlFriend } from '../.history/model/GirlFriend_20221207090852';

export class GfManager {
    listGirlFriend: GirlFriend[] = [];

    showALl(): GirlFriend[] {
        return this.listGirlFriend;
    }

    findByNameContaining(name: string) {
        let arr: GirlFriend[] = [];
        for (let i of this.listGirlFriend) {
            if (i.name.toLowerCase().includes(name.toLowerCase()) === true) {
                arr.push(i);
            }
        }
        return arr;
    }

    add(girlFriend: GirlFriend) {
        return this.listGirlFriend.push(girlFriend);
    }

    remove(index: number) {
        return this.listGirlFriend.splice(index, 1);
    }

    edit(index: number) {
}