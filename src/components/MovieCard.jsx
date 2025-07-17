const MovieCard = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-center">Contoh</h2>
          <p>11-12-2023</p>
          <p>9.2</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
