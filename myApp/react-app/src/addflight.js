
function Addflight() {
    return (
        <div className="Addflight">
        <header className="Addflight-header">
            
            
    <h1>Add your flight details</h1>
    
    <label>
    Flight number:
    <input type="text" name="Flight_number" />
  </label>
  <br/>
  <label>
  DepartureTime:
    <input type="text" name="DepartureTime" />
  </label>
  <br/>
  <label>
  ArrivalTime
    <input type="text" name="ArrivalTime" />
  </label>
  <br/>
  <label>
  EconomySeats:
    <input type="text" name="EconomySeats" />
  </label>
  <br/>
    <label>
    BusinessSeats:
    <input type="text" name="BusinessSeats" />
  </label>
  <br/>
  <label>
  Airport:
    <input type="text" name="Airport" />
  </label>
            <form action="../../Addflight" method="post"
                className="form">
            <button type="submit">submit</button>
            </form>
        </header>
        </div>
    );
    }
    
    export default Addflight;
    