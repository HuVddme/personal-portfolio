import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function useHeroTyping(name, roles) {
  const reducedMotion = useReducedMotion();
  const [frame, setFrame] = useState(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion !== false || paused) return;

    let timer;
    let nameLength = 0;
    let roleLength = 0;
    let roleIndex = 0;
    let deleting = false;

    const typeRole = () => {
      const word = roles[roleIndex];
      roleLength += deleting ? -1 : 1;
      setFrame({ name, role: word.slice(0, roleLength), naming: false });

      let delay = deleting ? 45 : 90;
      if (!deleting && roleLength === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && roleLength === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
      }
      timer = setTimeout(typeRole, delay);
    };

    const typeName = () => {
      nameLength += 1;
      const naming = nameLength < name.length;
      setFrame({ name: name.slice(0, nameLength), role: "", naming });
      timer = setTimeout(naming ? typeName : typeRole, naming ? 75 : 350);
    };

    // Start after hydration; prerendered HTML contains the complete text.
    timer = setTimeout(typeName, 350);
    return () => clearTimeout(timer);
  }, [name, roles, reducedMotion, paused]);

  const animated = reducedMotion === false && !paused;
  return {
    name: animated && frame ? frame.name : name,
    role: animated && frame ? frame.role : roles[0],
    naming: animated && frame ? frame.naming : false,
    animated,
    reducedMotion,
    paused,
    togglePaused: () => setPaused((value) => !value),
  };
}
