import './Card.css'

export default function GameCard({ URL, name }) {
    return (
      <>
        <div className="game-card">
          <img src={URL} alt={name} />
          <h4>
            <p>{name}</p>
          </h4>
        </div>
      </>
    );
  }