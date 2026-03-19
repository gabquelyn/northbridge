"use client";
import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import CustomSelect from "../CustomSelect";
import { RiInformation2Line } from "react-icons/ri";
import Input from "../Input";

export default function Mailing({
  setLocation,
  data,
  onChange,
}: {
  setLocation: (name: string, val: string) => void;
  data: IApplicationForm;
  onChange: inputHandler;
}) {
  const [country, setCountry] = useState<SelectOption | null>(null);
  const [state, setState] = useState<SelectOption | null>(null);
  const [city, setCity] = useState<SelectOption | null>(null);

  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));

  const states = State.getStatesOfCountry(country?.value).map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));

  const cities = City.getCitiesOfState(
    country?.value || "",
    state?.value || "",
  ).map((city) => ({ label: city.name, value: city.name }));

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
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          label="Country"
          option={country}
          options={countries}
          setOption={(e) => {
            setCountry(e);
            setState(null);
            setCity(null);
            setLocation("country", e?.label || "");
            setLocation("state", "");
            setLocation("city", "");
          }}
        />

        <CustomSelect
          label="State"
          option={state}
          options={states}
          setOption={(e) => {
            setState(e);
            setCity(null);
            setLocation("state", e?.label || "");
            setLocation("city", "");
          }}
        />

        <CustomSelect
          label="City"
          option={city}
          options={cities}
          setOption={(e) => {
            setCity(e);
            setLocation("city", e?.label || "");
          }}
        />
        <Input
          key={"unit"}
          name={"unit"}
          value={data.unit}
          type="text"
          onChange={onChange}
          label={"Unit"}
        />
        <div className="md:col-span-2">
          <Input
            key={"address"}
            name={"address"}
            value={data.unit}
            type="text"
            onChange={onChange}
            label={"Full Street Address"}
          />
        </div>
      </div>
    </div>
  );
}
