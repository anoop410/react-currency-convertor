import React from 'react'
import { useId } from 'react'

function InputBox(
    {
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currecyOptions = [],
        selectedCurrency = 'usd',
        amountDisabled = false,
        currecyDisabled = false,
        className = "",
    }
) {
    const id = useId()
  return (
    <div className={'bg-white p-3 rounded-lg text-sm flex ${className}'}>
        <div className='w-1/2'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>
            {label}
        </label>
        <input type="number" 
        id={id}
        className='outline-none w-full bg-transparent py-2'
        placeholder='Amount'
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        </div>
        <div className='w-1/2'>
            <p className='text-black/40 mb-2 w-full text-end'>
            CurrencyType
            </p>
            <select className='rounded-lg p-1 bg-gray-100 cursor-pointer outline-none float-end ' value={selectedCurrency} onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            disabled={currecyDisabled}
            >
            {currecyOptions.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox