export default function Breed({name, image}) {
    return <div>
        <h3>{name}</h3>
        <img src={image.url} alt="imagen" />
        </div>
}