import React from "react";
import { ContactType, IContact } from "../Store/slices/contacts-slice";

const Form = ({
  setState,
  state,
}: {
  state: IContact | null;
  setState: (value: React.SetStateAction<IContact | null>) => void;
}) => {
  return (
    <section>
      <div className=" form-control w-full">
        <label htmlFor="name" className="label">
          <span className=" label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input block input-bordered w-full"
          value={state?.name}
          onChange={(e) => {
            setState(
              (prevState) =>
                ({ ...prevState, name: e.target.value } as IContact)
            );
          }}
        />
      </div>
      <div className=" form-control w-full">
        <label htmlFor="phone" className="label">
          <span className=" label-text">Phone Number</span>
        </label>
        <input
          type="text"
          placeholder="Contact"
          className="input input-bordered w-full"
          value={state?.phone}
          onChange={(e) => {
            setState(
              (prevState) =>
                ({ ...prevState, phone: e.target.value } as IContact)
            );
          }}
        />
      </div>
      <div className=" form-control w-full">
        <label htmlFor="address" className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          placeholder="enter address"
          className="input input-bordered w-full"
          value={state?.address}
          onChange={(e) => {
            setState(
              (prevState) =>
                ({ ...prevState, address: e.target.value } as IContact)
            );
          }}
        />
      </div>
      <section className="mt-2">
        <div className="form-control flex-row items-center gap-4">
          <label className="label cursor-pointer">
            <span className="label-text">{ContactType.HOME}</span>
          </label>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            value={ContactType.HOME}
            checked={state?.type === ContactType.HOME || !state?.type}
            onChange={(event) =>
              setState(
                (prev) =>
                  ({
                    ...prev,
                    type: event.target.checked
                      ? ContactType.HOME
                      : ContactType.OFFICE,
                  } as IContact)
              )
            }
          />
        </div>
        <div className="form-control flex-row items-center gap-4">
          <label className="label cursor-pointer">
            <span className="label-text">{ContactType.OFFICE}</span>
          </label>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            value={ContactType.OFFICE}
            checked={state?.type === ContactType.OFFICE}
            onChange={(event) =>
              setState(
                (prev) =>
                  ({
                    ...prev,
                    type: event.target.checked
                      ? ContactType.OFFICE
                      : ContactType.HOME,
                  } as IContact)
              )
            }
          />
        </div>
      </section>
    </section>
  );
};

export default Form;
