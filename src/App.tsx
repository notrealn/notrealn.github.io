import React from "react";
import "./App.css";

export default class App extends React.Component {
  componentDidMount() {
    const canvas = document.getElementById("cavnas") as HTMLCanvasElement;
    const c = canvas?.getContext("2d");

    if (!canvas || !c) return;

    const size = 100;
    const direction = Math.random() * 2 * Math.PI;

    const box = {
      x: Math.random() * (canvas.width - size),
      y: Math.random() * (canvas.height - size),
      xVel: Math.cos(direction) * 10,
      yVel: Math.sin(direction) * 10,
    };

    const tick = () => {
      c.fillStyle = "rgba(255, 255, 255, .05)";
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = "#000000";
      c.fillRect(box.x, box.y, size, size);

      box.x += box.xVel;
      box.y += box.yVel;

      if (box.x > canvas.width - size) box.xVel *= -1;
      else if (box.x < 0) box.xVel *= -1;

      if (box.y > canvas.height - size) box.yVel *= -1;
      else if (box.y < 0) box.yVel *= -1;

      window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  }

  render() {
    return (
      <div className="App">
        <p>this is website</p>
        <canvas
          id="cavnas"
          width={window.innerWidth - 16}
          height="256"
        ></canvas>
      </div>
    );
  }
}
