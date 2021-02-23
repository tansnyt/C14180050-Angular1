import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  baris: string;
  kolom: string;

  turn: boolean = true;

  map = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  co0: number;
  co1: number;
  winner: String;

  reset() {
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        this.map[i][j] = "*";
      }
    }
    this.winner = "";
  }

  enter() {
    if (
      parseInt(this.baris) >= 0 &&
      parseInt(this.baris) <= 4 &&
      parseInt(this.kolom) >= 0 &&
      parseInt(this.kolom) <= 4
    ) {
      if (this.turn == true) {
        this.map[this.baris][this.kolom] = "0";
        this.turn = false;
      } else if (this.turn == false) {
        this.map[this.baris][this.kolom] = "1";
        this.turn = true;
      }

      // cek horizontal
      for (var i = 0; i < 5; i++) {
        this.co0 = 0;
        this.co1 = 0;
        for (var j = 0; j < 5; j++) {
          if (this.map[i][j] == "0") this.co0++;
          else if (this.map[i][j] == "1") this.co1++;
        }
        if (this.co0 == 5) this.winner = "User 0 WIN!";
        else if (this.co1 == 5) this.winner = "User 1 WIN!";
      }

      // cek vertikal
      for (var i = 0; i < 5; i++) {
        this.co0 = 0;
        this.co1 = 0;
        for (var j = 0; j < 5; j++) {
          if (this.map[j][i] == "0") this.co0++;
          else if (this.map[j][i] == "1") this.co1++;
        }
        if (this.co0 == 5) this.winner = "User 0 WIN!";
        else if (this.co1 == 5) this.winner = "User 1 WIN!";
      }
    } else alert("Index Baris atau Kolom Not Exist!");

    this.clearInput();
  }

  clearInput() {
    this.baris = ""; this.kolom = "";
  }
}
