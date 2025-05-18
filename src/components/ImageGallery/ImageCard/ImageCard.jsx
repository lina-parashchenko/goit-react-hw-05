import css from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} width="200" />
    </div>
  );
}
