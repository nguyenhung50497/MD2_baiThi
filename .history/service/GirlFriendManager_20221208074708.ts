import {GirlFriend} from '../model/GirlFriend';
import { girlFriend } from '../.history/model/GirlFriend_20221207090852';

export class GirlFriendManager {
    listGirlFriend: GirlFriend[] = [];

    findALl(): GirlFriend[] {
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
        return this.listGirlFriends.push(girlFriend);
    }

    remove(index: number) {
        return this.listGirlFriends.splice(index, 1);
    }

    edit(index: number, girlFriend: GirlFriend) {
        return this.listGirlFriends[index] = girlFriend;
    }
}