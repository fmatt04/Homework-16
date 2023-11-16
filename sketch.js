let myLandscape;
let rand;

function setup() {
  createCanvas(400, 400);
  myLandscape = new landscape();
  myLandscape.display();
}

function draw() {
  
}

class landscape {
  constructor() {
  }

  display() {
    noStroke();
    for(let i = 0; i < 200; i++) {
      fill(255, 200, i+150);
      rect(0, i*2, 400, 2);
    }
    fill(243, 245, 181);
    ellipse(200, 100, 150);
    
    
    //skyscrapers
    fill(123, 158, 212);
    rect(0, 190, 170, 300);
    ellipse(10, 190, 20);
    ellipse(160, 190, 20);
    rect(10, 150, 150, 350);
    ellipse(85, 150, 150, 100)
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 4; j++) {
        this.lights();
        rect(20 + i*15, 140 + j*10, 10, 5);
      }
    }
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 20; j++) {
        this.lights();
        rect(12 + i*15, 190 + j*10, 10, 5);
      }
    }
    
    fill(123, 158, 212);
    rect(270, 100, 100, 300);
    triangle(270, 100, 370, 100, 370, 80);
    triangle(370, 80, 370, 400, 390, 400)
    triangle(270, 100, 270, 400, 250, 400);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 25; j++) {
        this.lights();
        rect(278 + i*15, 110 + j*10, 10, 5);
      }
    }
    
    
    //ground
    fill(0);
    rect(0, 350, 400, 50);
    
    //buildings
    fill(0, 45, 64);
    rect(0, 240, 70, 110);
    ellipse(35, 240, 70);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 18; j++) {
        this.lights();
        rect(6 + i*10, 240 + j*6, 7, 3);
      }
    }
    
    
    
    fill(0, 42, 67);
    rect(75, 210, 50, 140);
    triangle(75, 210, 125, 210, 125, 200);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 13; j++) {
        this.lights();
        rect(80 + i*15, 220 + j*10, 10, 5);
      }
    }
    
    
    fill(0, 40, 69);
    rect(130, 230, 80, 120);
    rect(130, 220, 25, 10);
    rect(185, 220, 25, 10);
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        this.lights();
        rect(136 + i*10, 245 + j*15, 7, 10);
      }
    }
    
    
    fill(0, 44, 65);
    rect(215, 200, 100, 150);
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 14; j++) {
        this.lights();
        rect(222 + i*15, 210 + j*10, 10, 5);
      }
    }
    
    
    fill(0, 47, 67);
    rect(320, 250, 50, 100);
    ellipse(345, 250, 50, 20);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 6; j++) {
        this.lights();
        rect(326 + i*10, 258 + j*15, 7, 10);
      }
    }
    
    
    fill(0, 47, 67);
    rect(375, 240, 50, 110);
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        this.lights();
        rect(380 + i*11, 250 + j*10, 7, 5);
      }
    }
  }

  lights() {
    rand = floor(random(5));
        if (rand == 0) {
          fill(95, 117, 150);
        }
        else {
          fill(185, 211, 250);
        }
  }
}