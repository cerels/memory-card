import './Card.css'

export default function GameCard({ URL, name, onClick }) {
    return (
      <>
        <div className="game-card" onClick={onClick}>
          <img src={URL} alt={name} />
          <h4>
            <p>{name}</p>
          </h4>
        </div>
      </>
    );
  }