import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = () => {
    const [phone, setPhone] = useState("");

    return (
        <div>
            <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputClass="!w-full py-6"
                containerClass="mt-1 !w-full"
                buttonClass="!border-r !border-gray-300"
                dropdownStyle={{
                    width: "410px",
                    left: "0",
                }}
            />
        </div>
    );
};

export default PhoneInputField;