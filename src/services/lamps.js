let checked = -1;

let check = false;
(function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
})(navigator.userAgent || navigator.vendor || window.opera);

class Lamps {
    lamps = [];
    canvas = null;
    offset = 10;
    radius = 10;

    Lamps(canvas) {
        this.canvas = canvas
    }

    findLamp(id) {
        return this.lamps[id]
    }

    update() {
        // const defaultData = {
        //     "1": {
        //         "amperage": 0.0245,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 1,
        //         "lampline": 1,
        //         "lampx": 577,
        //         "lampy": 642,
        //         "type": "lamp",
        //         "voltage": 206.54999999999998
        //     },
        //     "10": {
        //         "amperage": 0.0245,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 10,
        //         "lampline": 2,
        //         "lampx": 437,
        //         "lampy": 743,
        //         "type": "lamp",
        //         "voltage": 216.954
        //     },
        //     "11": {"connected": 0, "id": 11, "lampline": 2, "lampx": 468, "lampy": 730, "type": "lamp"},
        //     "12": {
        //         "amperage": 0.196,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 12,
        //         "lampline": 2,
        //         "lampx": 436,
        //         "lampy": 716,
        //         "type": "lamp",
        //         "voltage": 254.898
        //     },
        //     "13": {
        //         "amperage": 0.0,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 13,
        //         "lampline": 3,
        //         "lampx": 511,
        //         "lampy": 634,
        //         "type": "lamp",
        //         "voltage": 237.456
        //     },
        //     "14": {
        //         "amperage": 0.098,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 14,
        //         "lampline": 3,
        //         "lampx": 513,
        //         "lampy": 599,
        //         "type": "lamp",
        //         "voltage": 252.144
        //     },
        //     "15": {
        //         "amperage": 0.14700000000000002,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 15,
        //         "lampline": 3,
        //         "lampx": 515,
        //         "lampy": 563,
        //         "type": "lamp",
        //         "voltage": 259.488
        //     },
        //     "16": {
        //         "amperage": 0.29400000000000004,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 16,
        //         "lampline": 3,
        //         "lampx": 516,
        //         "lampy": 532,
        //         "type": "lamp",
        //         "voltage": 253.98
        //     },
        //     "17": {
        //         "amperage": 0.098,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 17,
        //         "lampline": 3,
        //         "lampx": 552,
        //         "lampy": 521,
        //         "type": "lamp",
        //         "voltage": 257.652
        //     },
        //     "18": {
        //         "amperage": 0.3185,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 18,
        //         "lampline": 3,
        //         "lampx": 553,
        //         "lampy": 487,
        //         "type": "lamp",
        //         "voltage": 243.576
        //     },
        //     "19": {
        //         "amperage": 0.2205,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 19,
        //         "lampline": 3,
        //         "lampx": 554,
        //         "lampy": 456,
        //         "type": "lamp",
        //         "voltage": 240.516
        //     },
        //     "2": {
        //         "amperage": 0.5145000000000001,
        //         "connected": 0,
        //         "enable": false,
        //         "id": 2,
        //         "lampline": 1,
        //         "lampx": 583,
        //         "lampy": 549,
        //         "type": "lamp",
        //         "voltage": 171.972
        //     },
        //     "20": {"connected": 0, "id": 20, "lampline": 3, "lampx": 555, "lampy": 421, "type": "lamp"},
        //     "21": {"connected": 0, "id": 21, "lampline": 4, "lampx": 425, "lampy": 636, "type": "lamp"},
        //     "22": {"connected": 0, "id": 22, "lampline": 4, "lampx": 380, "lampy": 635, "type": "lamp"},
        //     "23": {"connected": 0, "id": 23, "lampline": 4, "lampx": 380, "lampy": 574, "type": "lamp"},
        //     "24": {
        //         "amperage": 12.544,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 24,
        //         "lampline": 4,
        //         "lampx": 380,
        //         "lampy": 459,
        //         "type": "lamp",
        //         "voltage": 0.0
        //     },
        //     "25": {"connected": 0, "id": 25, "lampline": 4, "lampx": 325, "lampy": 459, "type": "lamp"},
        //     "26": {"connected": 0, "id": 26, "lampline": 4, "lampx": 270, "lampy": 459, "type": "lamp"},
        //     "27": {
        //         "amperage": 0.882,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 27,
        //         "lampline": 4,
        //         "lampx": 220,
        //         "lampy": 459,
        //         "type": "lamp",
        //         "voltage": 250.308
        //     },
        //     "28": {"connected": 0, "id": 28, "lampline": 4, "lampx": 220, "lampy": 574, "type": "lamp"},
        //     "29": {
        //         "amperage": 0.441,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 29,
        //         "lampline": 5,
        //         "lampx": 319,
        //         "lampy": 300,
        //         "type": "lamp",
        //         "voltage": 253.06199999999998
        //     },
        //     "3": {
        //         "amperage": 0.2695,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 3,
        //         "lampline": 1,
        //         "lampx": 616,
        //         "lampy": 550,
        //         "type": "lamp",
        //         "voltage": 189.108
        //     },
        //     "30": {
        //         "amperage": 0.41650000000000004,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 30,
        //         "lampline": 5,
        //         "lampx": 263,
        //         "lampy": 300,
        //         "type": "lamp",
        //         "voltage": 243.26999999999998
        //     },
        //     "31": {
        //         "amperage": 12.544,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 31,
        //         "lampline": 5,
        //         "lampx": 207,
        //         "lampy": 300,
        //         "type": "lamp",
        //         "voltage": 0.0
        //     },
        //     "32": {
        //         "amperage": 0.0245,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 32,
        //         "lampline": 5,
        //         "lampx": 151,
        //         "lampy": 300,
        //         "type": "lamp",
        //         "voltage": 251.53199999999998
        //     },
        //     "33": {
        //         "amperage": 0.1225,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 33,
        //         "lampline": 5,
        //         "lampx": 95,
        //         "lampy": 300,
        //         "type": "lamp",
        //         "voltage": 238.374
        //     },
        //     "34": {
        //         "amperage": 0.1225,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 34,
        //         "lampline": 5,
        //         "lampx": 90,
        //         "lampy": 350,
        //         "type": "lamp",
        //         "voltage": 236.844
        //     },
        //     "35": {"connected": 0, "id": 35, "lampline": 6, "lampx": 375, "lampy": 300, "type": "lamp"},
        //     "36": {"connected": 0, "id": 36, "lampline": 6, "lampx": 431, "lampy": 300, "type": "lamp"},
        //     "37": {"connected": 0, "id": 37, "lampline": 6, "lampx": 487, "lampy": 300, "type": "lamp"},
        //     "38": {"connected": 0, "id": 38, "lampline": 6, "lampx": 543, "lampy": 300, "type": "lamp"},
        //     "39": {"connected": 0, "id": 39, "lampline": 6, "lampx": 604, "lampy": 300, "type": "lamp"},
        //     "4": {
        //         "amperage": 0.2695,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 4,
        //         "lampline": 1,
        //         "lampx": 621,
        //         "lampy": 483,
        //         "type": "lamp",
        //         "voltage": 173.808
        //     },
        //     "40": {
        //         "amperage": 0.049,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 40,
        //         "lampline": 6,
        //         "lampx": 602,
        //         "lampy": 335,
        //         "type": "lamp",
        //         "voltage": 219.402
        //     },
        //     "41": {
        //         "amperage": 0.196,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 41,
        //         "lampline": 6,
        //         "lampx": 600,
        //         "lampy": 363,
        //         "type": "lamp",
        //         "voltage": 258.876
        //     },
        //     "42": {
        //         "amperage": 0.0245,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 42,
        //         "lampline": 6,
        //         "lampx": 598,
        //         "lampy": 389,
        //         "type": "lamp",
        //         "voltage": 252.756
        //     },
        //     "5": {
        //         "amperage": 0.1225,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 5,
        //         "lampline": 1,
        //         "lampx": 624,
        //         "lampy": 420,
        //         "type": "lamp",
        //         "voltage": 217.26
        //     },
        //     "6": {"connected": 0, "id": 6, "lampline": 2, "lampx": 638, "lampy": 732, "type": "lamp"},
        //     "7": {"connected": 0, "id": 7, "lampline": 2, "lampx": 635, "lampy": 785, "type": "lamp"},
        //     "71": {
        //         "amperage": 1.0045,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 71,
        //         "lampline": 1,
        //         "lampx": 536,
        //         "lampy": 724,
        //         "type": "generator",
        //         "voltage": 250.92
        //     },
        //     "72": {
        //         "amperage": 0.931,
        //         "connected": 0,
        //         "enable": true,
        //         "id": 72,
        //         "lampline": 2,
        //         "lampx": 586,
        //         "lampy": 724,
        //         "type": "generator",
        //         "voltage": 252.45
        //     },
        //     "73": {"connected": 0, "id": 73, "lampline": 3, "lampx": 460, "lampy": 664, "type": "generator"},
        //     "74": {"connected": 0, "id": 74, "lampline": 4, "lampx": 415, "lampy": 664, "type": "generator"},
        //     "75": {"connected": 0, "id": 75, "lampline": 5, "lampx": 309, "lampy": 235, "type": "generator"},
        //     "76": {"connected": 0, "id": 76, "lampline": 6, "lampx": 365, "lampy": 234, "type": "generator"},
        //     "8": {
        //         "amperage": 0.049,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 8,
        //         "lampline": 2,
        //         "lampx": 436,
        //         "lampy": 773,
        //         "type": "lamp",
        //         "voltage": 231.33599999999998
        //     },
        //     "9": {
        //         "amperage": 0.1225,
        //         "connected": 1,
        //         "enable": true,
        //         "id": 9,
        //         "lampline": 2,
        //         "lampx": 467,
        //         "lampy": 757,
        //         "type": "lamp",
        //         "voltage": 233.172
        //     }
        // }
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "/api/lamps_info", true);
        xmlhttp.send(null);
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                this.lamps = JSON.parse(xmlhttp.responseText);
            }
        }
        // this.lamps = defaultData
    }

    getColorByLine(line) {
        switch (line) {
            case 1:
                return "red";
            case 2:
                return "green";
            case 3:
                return "yellow";
            case 4:
                return "purple";
            case 5:
                return "blue";
            case 6:
                return "darkblue";
        }

    }

    renderRect(lamp) {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = "black";
        ctx.fillRect(lamp.lampx + 20, lamp.lampy + 20, 200, 100);
        ctx.font = "15px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("ID: " + lamp.id, lamp.lampx + 30, lamp.lampy + 50);
        ctx.fillText(lamp.ip, lamp.lampx + 30, lamp.lampy + 70);
    }

    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, 2000, 1000);
        for (const i in this.lamps) {
            const first = this.findLamp(i);
            if (first.type === 'lamp') {
                for (const a in this.lamps) {
                    const second = this.findLamp(a);
                    ctx.beginPath();
                    if (second.lampline === first.lampline && second.id === first.id + 1) {
                        ctx.strokeStyle = this.getColorByLine(first.lampline)
                        ctx.moveTo(first.lampx - this.radius, first.lampy - this.radius);
                        ctx.lineTo(second.lampx - this.radius, second.lampy - this.radius);
                        ctx.lineWidth = 4;

                        ctx.stroke();
                    }
                }
            } else if (first.type === 'generator') {
                let bil = false;
                for (const a in this.lamps) {
                    const second = this.findLamp(a);
                    if (second.lampline === first.lampline && bil === false) {
                        bil = true;
                        ctx.beginPath();
                        ctx.strokeStyle = this.getColorByLine(first.lampline)
                        ctx.moveTo(first.lampx, first.lampy);
                        ctx.lineTo(second.lampx - this.radius, second.lampy - this.radius);
                        ctx.lineWidth = 5;
                        ctx.stroke();
                    }
                }
            }
        }
        for (const i in this.lamps) {
            const lamp = this.findLamp(i)
            if (lamp.connected) {
                if (lamp.enable) {
                    ctx.fillStyle = "yellow";
                } else {
                    ctx.fillStyle = "blue";
                }
            } else {
                ctx.fillStyle = "red";
            }
            if (lamp.type === 'lamp') {
                ctx.beginPath();
                ctx.arc(lamp.lampx - this.radius, lamp.lampy - this.radius, this.radius, 0, Math.PI * 2, false);
                ctx.closePath();
                ctx.fill();
            } else if (lamp.type === 'generator') {
                ctx.fillRect(lamp.lampx - 17, lamp.lampy - 17, 34, 34);

            }
        }
        if (checked !== -1) {
            this.renderRect(checked);
        }
    }

    changeLamp(id) {
        let xmlhttp = new XMLHttpRequest();
        const lamp = this.findLamp(id);
        if (lamp.connected === true) {
            if (lamp.enable) {
                xmlhttp.open("GET", "/api/lampOff?lamp_id=" + lamp.id, true);
            } else {
                xmlhttp.open("GET", "/api/lampOn?lamp_id=" + lamp.id, true);
            }
            xmlhttp.send(null);
        }

    }

    mouseMove(mousex, mousey) {
        mousex += this.offset;
        mousey += this.offset;
        var minrast = 100000;
        var minlamp;
        for (const key in this.lamps) {
            const lamp = this.findLamp(key)
            let rasstoyanie = Math.sqrt(Math.pow(mousex - lamp.lampx, 2) + Math.pow(mousey - lamp.lampy, 2));
            if (rasstoyanie < minrast) {
                minrast = rasstoyanie;
                minlamp = lamp
            }
        }
        let rasstoyanie = Math.sqrt(Math.pow(mousex - minlamp.lampx, 2) + Math.pow(mousey - minlamp.lampy, 2));
        if (rasstoyanie <= this.radius * 1.5) {
            checked = minlamp;
            this.renderRect(minlamp);
        } else {
            checked = -1;
            this.render();
        }
    }

    mouseClick(mousex, mousey) {
        mousex += this.offset;
        mousey += this.offset;
        var minrast = 100000;
        var minrastnumber;
        for (const i in this.lamps) {
            var rasstoyanie = Math.sqrt(Math.pow(mousex - this.findLamp(i).lampx, 2) + Math.pow(mousey - this.findLamp(i).lampy, 2));
            if (rasstoyanie < minrast) {
                minrast = rasstoyanie;
                minrastnumber = i;
            }
        }
        var minlamp = this.findLamp(minrastnumber);
        if (minrast <= this.radius * 1.5) {
            this.changeLamp(minlamp.id);
        }
    }

}

export default Lamps;
