import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Container, Magic } from "./const/MouseFollowStyles";

const App: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [prevX, setPrevX] = useState<number>(0);
  const [circleStyle, setCircleStyle] = useState({
    transform: "translate3d(-50%, -50%, 0) scaleX(-0.5,1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const deltaX = x - prevX;
    const newposX = x - 60;
    const newposY = e.clientY - 60;

    setCircleStyle({
      transform: `translate3d(${newposX}px, ${newposY}px, 0) scale(${
        deltaX >= 0 ? "-0.5,0.4" : "0.5,0.4"
      })`,
    });

    setPrevX(x);
  };

  useEffect(() => {
    const moveCircleAutomatically = (e: MouseEvent) => {
      const x = e.clientX;
      const deltaX = x - prevX;

      const newposX = x - 60;
      const newposY = e.clientY - 60;

      setCircleStyle({
        transform: `translate3d(${newposX}px, ${newposY}px, 0) scale(${
          deltaX >= 0 ? "-0.5,0.4" : "0.5,0.4"
        })`,
      });

      setPrevX(x);
    };

    document.addEventListener("mousemove", moveCircleAutomatically);

    return () => {
      document.removeEventListener("mousemove", moveCircleAutomatically);
    };
  }, [prevX]);

  return (
    <Container>
      <div className="body" onMouseMove={handleMouseMove}>
        <Magic
          ref={circleRef}
          style={{
            ...circleStyle,
          }}
        ></Magic>
      </div>
    </Container>
  );
};

export default App;
