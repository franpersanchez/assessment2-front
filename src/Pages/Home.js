import FlightItem from "../components/FlightItem";
import MyForm from "../components/MyForm";

function Home(){
return(
    <div>
        <h1 className="presentation">Flights Booking</h1>
        <MyForm></MyForm>
        <FlightItem></FlightItem>
    </div>
    
)
}
export default Home