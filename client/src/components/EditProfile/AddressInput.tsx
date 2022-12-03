import React, { useContext, useState, useEffect } from "react";
import Input from "../UI/Input";
import AuthContext from "../../context/authContext";

interface Address {
  city: string
  province: string
  country: string
  postalCode: string
}

interface Props {
  passedData: (name: string, value: Address) => void
}

export default function AddressInput ({ passedData }: Props) {
  const { user } = useContext(AuthContext);
  const [address, setAddress] = useState<Address>({
    city: "",
    province: "",
    country: "",
    postalCode: "",
  });

  useEffect(() => {
    setAddress(user.address);
  }, [user.address]);

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "postalCode") {
      setAddress({ ...address, [name]: value.toUpperCase() });
      passedData("address", { ...address, [name]: value.toUpperCase() });

      return;
    }
    setAddress({ ...address, [name]: value });
    passedData("address", { ...address, [name]: value });
  };

  return (
    <div className="flex flex-col gap-2 mb-5">
      <Input
        onFocus={handleFocus}
        onChange={handleChange}
        value={address.city}
        label="City"
        name="city"
      />
      <Input
        onFocus={handleFocus}
        onChange={handleChange}
        value={address.province}
        label="Province"
        name="province"
      />
      <Input
        onFocus={handleFocus}
        onChange={handleChange}
        value={address.country}
        label="Country"
        name="country"
      />
      <Input
        onFocus={handleFocus}
        onChange={handleChange}
        value={address.postalCode}
        label="Postal Code (A1BC2D)"
        name="postalCode"
        maxLength={6}
      />
    </div>
  );
}

// city, province, country, postal code
