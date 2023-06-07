import React, { useState, useContext, useEffect } from "react";
import TextField from "../../../../components/TextField";
import SelectDropdown from "../../../../components/SelectDropDown/SelectDropDown";
import { BorrowerFormData } from "./BorrowersData";

const Collateral = ({ extractedFields, pdf }) => {
  const [collateralType, setCollateralType] = useState(undefined);
  const [pdfFile, setPdfFile] = useState(pdf);
  const [formFields, setFormFields] = useState({ ...extractedFields });
  const { value, setValue } = useContext(BorrowerFormData);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (pdfFile) {
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: value,
      }));
    } else {
      event.persist();
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: value,
      }));
      console.log(formFields);
    }
    
    console.log(value)
  };

  const collateralsType = [
    { id: 1, label: "Collateral 1", value: "Collateral 1" },
    { id: 2, label: "Collateral 2", value: "Collateral 2" },
    { id: 3, label: "Collateral 3", value: "Collateral 3" },
  ];
  useEffect(() => {
    console.log(value);
  }, [value]);

  console.log({ collateralType });
  return (
    <>
      <div className="grid grid-cols-2 items-center  w-full gap-7 px-8">
        <div>
          <SelectDropdown
            options={collateralsType}
            placeholder="Collateral Type"
            onChange={(val) => setCollateralType(val.value)}
          />
        </div>
        <TextField
          className="bg-white border-[#0252CC]"
          placeholder="Collateral Value"
          name="collateralValue"
          value={
            pdfFile
              ? formFields.collateralValue ||
                extractedFields.collateralValue ||
                ""
              : formFields.collateralValue || ""
          }
          onChange={(e) => {
            handleInputChange(e);
           setValue((prevValue) => ({
             ...prevValue,
             collateralValue: e.target.value,
           }));
            console.log(value);
          }}
        />
      </div>
      <div className="px-8 mt-24">
        <textarea
          className="bg-white border border-[#0252CC] w-full h-14 px-4 py-4 rounded"
          placeholder="Provide collateral information e.g location, car model, mileage e.t.c"
          name="collateralInfo"
          value={
            pdfFile
              ? formFields.collateralInfo ||
                extractedFields.collateralInfo ||
                ""
              : formFields.collateralInfo || ""
          }
          onChange={(e) => {
            handleInputChange(e);
             setValue((prevValue) => ({
               ...prevValue,
               collateralInfo: e.target.value,
             }));
          }}
        ></textarea>
      </div>
    </>
  );
};

export default Collateral;
