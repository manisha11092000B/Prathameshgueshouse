import "./Rooms.css";
export default function Rooms() {
    return (
      <section className="rooms">
        <h2>Rooms & Pricing</h2>
        <div className="room-card">
          <h3>AC Room</h3>
          <p>₹3500 / Night</p>
        </div>
  
        <div className="room-card">
          <h3>Non-AC Room</h3>
          <p>₹2500 / Night</p>
        </div>
      </section>
    );
  }