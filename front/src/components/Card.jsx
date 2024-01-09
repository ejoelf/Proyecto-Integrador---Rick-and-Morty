export default function Card(props) {
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Origin: {props.origin}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
