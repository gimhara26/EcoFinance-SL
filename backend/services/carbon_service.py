class CarbonCalculator:

    GRID_ELECTRICITY_FACTOR = 0.43

    DIESEL_FACTOR = 2.68
    PETROL_FACTOR = 2.31
    LPG_FACTOR = 1.51
    NATURAL_GAS_FACTOR = 2.02

    TRANSPORT_FACTOR = 0.21

    WASTE_FACTOR = 0.45

    @staticmethod
    def calculate(business):

        # Scope 1

        scope1 = (
            business.diesel_liters * CarbonCalculator.DIESEL_FACTOR +
            business.petrol_liters * CarbonCalculator.PETROL_FACTOR +
            business.lpg_kg * CarbonCalculator.LPG_FACTOR +
            business.natural_gas_m3 * CarbonCalculator.NATURAL_GAS_FACTOR
        )

        # Scope 2

        scope2 = (
            business.grid_electricity_kwh *
            CarbonCalculator.GRID_ELECTRICITY_FACTOR
        )

        # Scope 3

        transport = (
            business.business_travel_km +
            business.employee_travel_km +
            business.freight_transport_km
        ) * CarbonCalculator.TRANSPORT_FACTOR

        waste = (
            business.general_waste_kg -
            business.recycled_waste_kg
        ) * CarbonCalculator.WASTE_FACTOR

        scope3 = transport + waste

        total = scope1 + scope2 + scope3

        return {

            "scope1": round(scope1, 2),
            "scope2": round(scope2, 2),
            "scope3": round(scope3, 2),
            "total_emission": round(total, 2)

        }