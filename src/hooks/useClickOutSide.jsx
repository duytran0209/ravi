import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [navToggle, setNavToggle] = useState(false);

  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setNavToggle(false);
      }
    }
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [dom]);
  return {
    navToggle,
    setNavToggle,
    nodeRef,
  };
}
