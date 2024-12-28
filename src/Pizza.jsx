const FALLBACK_IMG_URL = "https://picsum.photos/200";

const Pizza = ({ name, description, image }) => {
  return (
    <div className="pizza">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image ?? FALLBACK_IMG_URL} alt={name} />
    </div>
  );
};

export default Pizza;
