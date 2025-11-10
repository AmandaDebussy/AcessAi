import { useState } from "react";
import styles from './abnt.module.css'



interface ReferenceData {
  tipo: "livro" | "artigo" | "site";
  autor: string;
  titulo: string;
  subtitulo?: string;
  local?: string;
  editora?: string;
  ano?: string;
  url?: string;
  acessado?: string;
  revista?: string;
}

export default function AbntGenerator() {
  const [data, setData] = useState<ReferenceData>({
    tipo: "livro",
    autor: "",
    titulo: "",
    subtitulo: "",
    local: "",
    editora: "",
    ano: "",
    url: "",
    acessado: "",
    revista: "",
  });

  const [referencia, setReferencia ] = useState("");



  const gerarReferencia = () => {
    const { tipo, autor, titulo, subtitulo, local, editora, ano, url, acessado, revista } = data;

    let ref = "";

    switch (tipo) {
      case "livro":
        ref = `${autor.toUpperCase()}. ${titulo}${subtitulo ? ": " + subtitulo : ""}. ${local}: ${editora}, ${ano}.`;
        break;
      case "artigo":
        ref = `${autor.toUpperCase()}. ${titulo}${subtitulo ? ": " + subtitulo : ""}. ${revista}, ${local}, ${ano}.`;
        break;
      case "site":
        ref = `${autor.toUpperCase()}. ${titulo}. Disponível em: ${url}. Acesso em: ${acessado}.`;
        break;
      default:
        ref = "Tipo inválido.";
    }

    setReferencia(ref);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };


   const deleteReferencia = () =>{
    setReferencia('');
    setData((prev) => ({ ...prev }))
};


  const copiar = () => {
    if (referencia) {
      navigator.clipboard.writeText(referencia);
      alert("Referência copiada para a área de transferência!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gerador de Referências ABNT</h2>

      <label>Tipo de fonte:</label>
      <select name="tipo" value={data.tipo} onChange={handleChange} className={styles.select}>
        <option value="livro">Livro</option>
        <option value="artigo">Artigo</option>
        <option value="site">Site</option>
      </select>

      <input placeholder="Autor (ex: SILVA, João)" name="autor" value={data.autor} onChange={handleChange} className={styles.input} />
      <input placeholder="Título" name="titulo" value={data.titulo} onChange={handleChange} className={styles.input} />

      {data.tipo !== "site" && (
        <input placeholder="Subtítulo (opcional)" name="subtitulo" value={data.subtitulo} onChange={handleChange} className={styles.input} />
      )}

      {data.tipo === "livro" && (
        <>
          <input placeholder="Local (cidade)" name="local" value={data.local} onChange={handleChange} className={styles.input} />
          <input placeholder="Editora" name="editora" value={data.editora} onChange={handleChange} className={styles.input} />
          <input placeholder="Ano" name="ano" value={data.ano} onChange={handleChange} className={styles.input} />
        </>
      )}

      {data.tipo === "artigo" && (
        <>
          <input placeholder="Revista" name="revista" value={data.revista} onChange={handleChange} className={styles.input} />
          <input placeholder="Local (cidade)" name="local" value={data.local} onChange={handleChange} className={styles.input} />
          <input placeholder="Ano" name="ano" value={data.ano} onChange={handleChange} className={styles.input} />
        </>
      )}

      {data.tipo === "site" && (
        <>
          <input placeholder="URL (com https://)" name="url" value={data.url} onChange={handleChange} className={styles.input} />
          <input placeholder="Data de acesso (ex: 10 nov. 2025)" name="acessado" value={data.acessado} onChange={handleChange} className={styles.input} />
        </>
      )}

      <button onClick={gerarReferencia} className={styles.button}>Gerar Referência</button>

      {referencia && (
        <div className={styles.resultBox}>
          <p className={styles.resultText}>{referencia}</p>
          <button onClick={copiar} className={styles.copyButton}>Copiar</button>
          <button onClick={deleteReferencia} className={styles.DeleteButton}>Deletar</button>

        </div>
      )}
    </div>
  );
}
