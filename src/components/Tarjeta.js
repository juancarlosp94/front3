
const Tarjeta = ({onButtonClick }) => {

    const handleButtonClick = (itemName) => {
        onButtonClick(itemName);
      };

    return (
    <div className="card">
      <div className="buttons">
      <button onClick={() => handleButtonClick('Twitter')}>Twitter</button>
      <button onClick={() => handleButtonClick('Youtube')}>Youtube</button>
      <button onClick={() => handleButtonClick('Facebook')}>Facebook</button>
      </div>
    </div>
    )
}

export default Tarjeta