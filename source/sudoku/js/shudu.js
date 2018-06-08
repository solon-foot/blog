/**
 * Created by zhangzhi on 16/6/16.
 */
'use strict'
function Model(key) {
    if (key == undefined || key == 0) {
        this.b = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    } else {
        this.b = [key];
    }

}

Model.prototype.value = function () {
    return this.b;
}

Model.prototype.size = function () {
    return this.b.length;

}

Model.prototype.set = function (key) {
    var size = this.size();
    for (var i = 0; i < size; i++) {
        if (this.b[i] == key) {
            this.b.splice(i, 1);
            return;

        }
    }
}


function Shudu(arr) {
    if (arr === undefined) {
        arr = new Array(9);
        for (var i = 0; i < 9; i++) {
            arr[i] = new Array(9);
            for (var j = 0; j < 9; j++) {
                arr[i][j] = 0
            }
        }
    }
    this.shudu = arr;
    this.b = new Array(81);
    for (var i = 0; i < 81; i++) {
        this.b[i] = new Model();
    }
}
Shudu.prototype.cal = function () {
    var temp = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            temp = this.shudu[i][j];
            if (temp != 0 && !this.setXYV(i, j, temp)) {
                return false;
            }
        }
    }
    //return true;
    return this.judge();
}

Shudu.prototype.judge = function () {
    var temp = 0;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            temp = this.shudu[i][j];

            if (temp == 0 && this.b[i * 9 + j].size() == 1) {
                if (this.setXYV(i, j, this.b[i * 9 + j].b[0])) {
                    return this.judge();
                } else {
                    return false;
                }
            }

        }

    }
    return true;

}

Shudu.prototype.setXYV = function (x, y, v) {
    this.shudu[x][y] = v;

    this.b[x * 9 + y] = new Model(v);
    var bb =this.b[x*9+y];
    for (var i = 0; i < 9; i++) {
        if (i != y) {// 横向排除

            bb = this.b[x * 9 + i];
            bb.set(v);
            if (bb.size() == 0) {
                return false;
            }
        }
        if (i != x) {// 排除列
            bb = this.b[i * 9 + y];
            bb.set(v);
            if (bb.size() == 0) {
                return false;
            }

        }
        if (Math.floor(i / 3) != x % 3 && i % 3 != y % 3) {

            bb = this.b[path[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i]];
            bb.set(v);
            if (bb.size() == 0) {
                return false;
            }
        }

    }

    return true;
}

Shudu.prototype.isOver = function () {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (this.shudu[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}

Shudu.prototype.copy = function() {
    return new Shudu(Array2D(this.shudu));
}

Shudu.prototype.toBString = function () {
    var sb = "";
    var s1, s2, s3;
    var b;
    sb += "╔═══════╤═══════╤═══════╦═══════╤═══════╤═══════╦═══════╤═══════╤═══════╗\n";
    for (var i = 0; i < 9; i++) {
        s1 = "║";
        s2 = "║";
        s3 = "║";
        for (var j = 0; j < 9; j++) {
            b = this.b[i * 9 + j].b;
            s1 += ' '+(b[0] || ' ')+' ' + (b[1] || ' ')+' ' + (b[2] || ' ')+' ';
            s2 += ' '+(b[3] || ' ')+' ' + (b[4] || ' ')+' ' + (b[5] || ' ')+' ';
            s3 += ' '+(b[6] || ' ')+' ' + (b[7] || ' ')+' ' + (b[8] || ' ')+' ';
            if (j == 2 || j == 5 || j == 8) {
                s1 += "║";
                s2 += "║";
                s3 += "║";
            } else {
                s1 += "│";
                s2 += "│";
                s3 += "│";
            }
        }
        sb += s1 + "\n" + s2 + "\n" + s3 + "\n";

        if (i == 8) {
            sb += "╚═══════╧═══════╧═══════╩═══════╧═══════╧═══════╩═══════╧═══════╧═══════╝\n";
        } else {
            if (i == 2 || i == 5) {
                // sb+=("┣━━╋━━╋━━╋━━╋━━┫\n");
                sb += "╠═══════╪═══════╪═══════╬═══════╪═══════╪═══════╬═══════╪═══════╪═══════╣\n";
            } else {
                sb += "╟───────┼───────┼───────╫───────┼───────┼───────╫───────┼───────┼───────╢\n";
            }
        }
    }

    return sb;
}

Shudu.prototype.toString = function () {
    var sb = "";

    sb += "╔═══╤═══╤═══╦═══╤═══╤═══╦═══╤═══╤═══╗\n";
    var temp = 0;
    for (var i = 0; i < 9; i++) {
        sb += "║";
        for (var j = 0; j < 9; j++) {
            temp = this.shudu[i][j];
            if (temp == undefined || temp == 0) {
                sb += "   ";
            } else {
                sb += " " + temp + " ";
                // sb+=(String.format("%02d ", temp));

            }
            if (j == 2 || j == 5 || j == 8) {
                sb += "║";
            } else {
                sb += "│";
            }

        }
        sb += ("\n");
        if (i == 8) {
            sb += "╚═══╧═══╧═══╩═══╧═══╧═══╩═══╧═══╧═══╝\n";
        } else {
            if (i == 2 || i == 5) {
                // sb+=("┣━━╋━━╋━━╋━━╋━━┫\n");
                sb += "╠═══╪═══╪═══╬═══╪═══╪═══╬═══╪═══╪═══╣\n";
            } else {
                sb += "╟───┼───┼───╫───┼───┼───╫───┼───┼───╢\n";
            }
        }
    }
    return sb;
}


function initPath() {
    var path = new Array(9);
    for (var i = 0; i < 9; i++) {
        path[i] = new Array(9);
        var temp = i % 3 * 3 + Math.floor(i / 3) * 27;
        for (var j = 0; j < 9; j++) {
            path[i][j] = temp + j % 3 + Math.floor(j / 3) * 9;
        }
    }
    return path;
}

var path = initPath();



function Array2D(copy) { //9*9
    var arr = new Array(9);
    for (var i = 0; i < 9; i++) {
        arr[i] = new Array(9);
        for (var j = 0; j < 9; j++) {
            arr[i][j] = copy[i][j];
        }
    }
    return arr;
}


function execute(game) {
    if (!game.cal()) {
        return null;
    }
    if (game.isOver()) {
        //throw new Error(game.toString());
        return game;
    }
    // 查找选择最少的那个进行下一轮循环
    var size = 2;
    var b = null;
    var i = 0;
    //这里需要修改
    end: while (size < 10) {

        for (i = 0; i < 81; i++) {
            b = game.b[i];
            if (b.size() == size) {
                break end;
            }
        }
        size++;
    }
    if (b == null || i == 81) {
        var sb = "";
        for (var j = 0; j < 81; j++) {
            sb += game.b[j].b[0] + " ";
            if (j % 9 == 8) {
                sb += "\n";
            }
        }
        throw new Error(sb);
    }
    return execute1(game, Math.floor(i / 9), i % 9, b);


}

function execute1(game, x, y, b) {// 尝试集合测试
    var size = b.size();
    var temp;
    for (var k = 0; k < size; k++) {
        temp = Array2D(game.shudu);
        temp[x][y] = b.b[k];
        var shuduTemp = execute(new Shudu(temp));
        if (shuduTemp) {
            return shuduTemp;
        }
    }

}
