"use client";
import React, { useMemo } from "react";
import { Country, State, City } from "country-state-city";
import CustomSelect from "../CustomSelect";
import { RiInformation2Line } from "react-icons/ri";
import Input from "../Input";

function Mailing({
  setLocation,
  unit,
  street,
  onChange,
  location,
  disableEdit,
}: {
  unit: string;
  street: string;
  onChange: inputHandler;
  location: LocationData;
  setLocation: React.Dispatch<React.SetStateAction<LocationData>>;
  disableEdit?: boolean;
}) {
  const countries = useMemo(
    () =>
      Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.isoCode,
      })),
    [],
  );

  const states = useMemo(
    () =>
      State.getStatesOfCountry(location.country?.value).map((state) => ({
        label: state.name,
        value: state.isoCode,
      })),
    [location.country?.value],
  );

  const cities = useMemo(
    () =>
      City.getCitiesOfState(
        location?.country?.value || "",
        location?.state?.value || "",
      ).map((city) => ({ label: city.name, value: city.name })),
    [location?.country, location?.state],
  );

  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
        <RiInformation2Line className="text-primary" />
        <p>
          Select in order:{" "}
          <span className="font-medium text-gray-900">
            Country → State → City
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CustomSelect
          isDisabled={disableEdit}
          label="Country"
          option={location?.country}
          options={countries}
          setOption={(e) => {
            setLocation({
              country: e,
              state: null,
              city: null,
            });
          }}
        />

        <CustomSelect
          isDisabled={disableEdit}
          label="State"
          option={location?.state}
          options={states}
          setOption={(e) => {
            setLocation((prev) => ({ ...prev, state: e, city: null }));
          }}
        />

        <CustomSelect
          isDisabled={disableEdit}
          label="City"
          option={location?.city}
          options={cities}
          setOption={(e) => {
            setLocation((prev) => ({ ...prev, city: e }));
          }}
        />
        <Input
          key={"unit"}
          name={"unit"}
          value={unit}
          type="text"
          onChange={onChange}
          label={"Unit (Optional)"}
          readOnly={disableEdit}
        />
        <div className="md:col-span-2">
          <Input
            key={"address"}
            name={"street"}
            value={street}
            type="text"
            onChange={onChange}
            label={"Full Street Address"}
            readOnly={disableEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Mailing);
