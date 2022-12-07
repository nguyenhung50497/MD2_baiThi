import {GirlFriend} from './model/GirlFriend'
import { GfManager } from './service/GFManager'

let input = require('readline-sync');

function main() {
    let choice = -1;
    do {
        console.log(`---------------------------Menu-----------------------------
        1. Hiển thị danh sách
        2. Tìm kiếm theo tên gần đúng
        3. Thêm ny mới
        0. Thoát`);
        choice = input.question(`Enter choice:`);
        switch (choice) {
            case 1:
                showALlGf();
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    } while (choice !== 0)
}

function display(arr: )

function showALlGf() {

}