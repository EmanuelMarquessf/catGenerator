export default function CatCard(props) {
  const cat = {
    id: props.id,
    name: props.name,
    url: props.image,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }} key={cat.id}>
      <img
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
        src={cat.url}
        alt=""
      />
      <h2>{cat.name}</h2>
    </div>
  );
}
