import { useEffect, useState } from 'react'
import currency from './assets/currency.jpg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'
function App() {
  // states for input boxes
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${currency})`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox 
              label="from"
              amount={amount}
              currecyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
              </div>
              <div className='relative w-full h-0.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-slate-200 rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
                  Swap
                  </button>
              </div>
              <div className='w-full mb-1'>
              <InputBox 
              label="to"
              amount={convertedAmount}
              currecyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
              </div>
              <button className='w-full justify-center items-center bg-blue-400 text-white rounded-lg' type='submit'> 
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App

