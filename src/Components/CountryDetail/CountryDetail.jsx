import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
	// const { country, handleVisitedCountry, handleVisitedFlags } = props;
	return (
		<div>
			<h1>Country Details</h1>
			<hr />
			{/* <CountryData>
				country={country}
				handleVisitedCountry={handleVisitedCountry}
				handleVisitedFlags={handleVisitedFlags}
			</CountryData> */}
            <CountryData {...props} ></CountryData>
		</div>
	);
};

export default CountryDetail;
