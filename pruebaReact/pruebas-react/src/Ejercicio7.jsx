function Articulo({ isPublished }) {
  let estado;
  if(isPublished){
    estado = "Publicado";
  } else {
    estado = "Borrador";
  }

  return <div>{estado}</div>;
}
export default function App() {
  return (
    <div>
      <Articulo isPublished={true} />
      <Articulo isPublished={false} />
    </div>
  );
}
