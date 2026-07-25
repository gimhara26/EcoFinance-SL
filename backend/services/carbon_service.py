class CarbonCalculator:

    # Emission Factors 
    # Values are approximate and can be updated later.

    ELECTRICITY_FACTOR = 0.43
    FUEL_FACTOR = 2.31
    TRANSPORT_FACTOR = 0.21
    WASTE_FACTOR = 0.45

    @staticmethod
    def calculate(
        electricity_kwh,
        fuel_liters,
        transport_distance,
        waste_kg
    ):

        electricity = float(electricity_kwh) * CarbonCalculator.ELECTRICITY_FACTOR
        fuel = float(fuel_liters) * CarbonCalculator.FUEL_FACTOR
        transport = float(transport_distance) * CarbonCalculator.TRANSPORT_FACTOR
        waste = float(waste_kg) * CarbonCalculator.WASTE_FACTOR
        total = ( electricity + fuel + transport + waste )

        return {

            "electricity_emission": round(electricity, 2),
            "fuel_emission": round(fuel, 2),
            "transport_emission": round(transport, 2),
            "waste_emission": round(waste, 2),
            "total_emission": round(total, 2)

        }