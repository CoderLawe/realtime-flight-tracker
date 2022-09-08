const FlightFeed = ({data}) => {
    console.log(data.data)
    return(
        <div>
            {
                data?.data.map((flight) => (
                    <>
                        <p className="text-white">{flight.airline.name}</p>
                    </>
                ))
            }
        </div>
    )
}

export default FlightFeed