import { useEffect, useRef} from "react";
import type { ReactNode } from "react";
import "./highlight.css";




interface HighlightTextProps {
  children: ReactNode;
}



export default function HighlightText({ children }: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.80 && rect.bottom > 0) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll(); // carrega a página
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <span ref={ref} className="highlight-text">
      {children}
    </span>
  );
}
