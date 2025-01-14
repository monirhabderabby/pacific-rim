import React, { FC } from 'react';

const CreditCardForm: FC = () => {
  return (
    <form className="flex flex-col mt-4 w-full text-base leading-tight text-zinc-400 max-md:max-w-full">
      {/* Cardholder Name */}
      <label htmlFor="cardholderName" className="sr-only">
        Cardholder Name
      </label>
      <input
        id="cardholderName"
        type="text"
        placeholder="Cardholder Name"
        className="flex-1 shrink self-stretch px-4 py-4 w-full rounded-lg border border-solid border-zinc-400 min-h-[48px] max-md:max-w-full text-black"
      />

      {/* Card Number */}
      <label htmlFor="cardNumber" className="sr-only">
        Card Number
      </label>
      <input
        id="cardNumber"
        type="text"
        placeholder="Card Number"
        className="flex-1 shrink self-stretch px-4 py-4 mt-4 w-full rounded-lg border border-solid border-zinc-400 min-h-[48px] max-md:max-w-full text-black"
      />

      <div className="flex flex-wrap gap-4 items-start mt-4 w-full whitespace-nowrap max-md:max-w-full">
        {/* Expiration Date */}
        <div className="flex-1 min-w-[240px]">
          <label htmlFor="expDate" className="sr-only">
            Expiration Date
          </label>
          <input
            id="expDate"
            type="text"
            placeholder="Exp.Date"
            className="w-full px-4 py-4 rounded-lg border border-solid border-zinc-400 min-h-[48px] text-black"
          />
        </div>

        {/* CVV */}
        <div className="flex-1 min-w-[240px]">
          <label htmlFor="cvv" className="sr-only">
            CVV
          </label>
          <input
            id="cvv"
            type="text"
            placeholder="CVV"
            className="w-full px-4 py-4 rounded-lg border border-solid border-zinc-400 min-h-[48px] text-black"
          />
        </div>
      </div>
    </form>
  );
};

export default CreditCardForm;
