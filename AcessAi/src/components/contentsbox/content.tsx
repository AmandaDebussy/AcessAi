import { useEffect } from "react";
import './comment.css'





declare global {
  interface Window {
    commentBox?: (projectId: string) => void;
  }
}

interface CommentsBoxProps {
  visible: boolean;
}

export default function CommentsBox({ visible }: CommentsBoxProps) {
  useEffect(() => {
    if (!visible) return; // só inicializa se estiver visível

    const script = document.createElement("script");
    script.src = "https://unpkg.com/commentbox.io/dist/commentBox.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setTimeout(() => {
        window.commentBox?.("5655006464180224-proj");
      }, 300);
    };

    return () => {
      const el = document.querySelector(".commentbox");
      if (el) el.innerHTML = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (


    <div
      className="commentbox"
      style={{
        marginTop: "2rem",
        maxWidth: "700px",
        margin: "auto",
      }}
    />


  );
}
