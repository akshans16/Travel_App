import { Header } from "components";

const Trips = () => {
    return (
        <main className="all-user wrapper">
            <Header title="Trips" description="View and Edit AI generated travel plans" 
            ctaText = "Create a trip"
            ctaUrl = "/trips/create-trip"
            />

        </main>
    );
};

export default Trips;
