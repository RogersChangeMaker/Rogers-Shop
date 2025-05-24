// import image from "./../phone.avif";

function CardComponent(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Product icon" />

      <div className={`${props.bookmarked ? 'bookmark' : 'hidden'}`} >
        <ion-icon name="bookmark"></ion-icon>
      </div>

      <div className="bottom-card">
        <p>{props.deviceName}</p>
        <p>...</p>
      </div>
    </div>
  );
}

export default CardComponent;
