const Popup = (props) => {
  const { showPopup, setShowPopup, msg } = props;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="popup">
        <div className="popup-content">
          <h3 className="">{msg}</h3>
          <button onClick={togglePopup}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
