export default function CatCard(props) {
  const cat = {
    id: props.id,
    name: props.name,
    url: props.image,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: '#f2f2f2', border:'#cccccc 1px solid', borderRadius: '5px', padding: '1rem' }} key={cat.id}>
      <img
        style={{ width: "270px", height: "270px", objectFit: "cover" }}
        src={cat.url}
        alt=""
      />
      <h2 style={{margin: '0.5rem 0rem'}}>{cat.name}</h2>
    </div>
  );
}
