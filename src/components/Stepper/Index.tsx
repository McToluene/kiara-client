import { useState } from 'react';
import { Button, Container } from '@mui/material';

const Index = () => {
  const [active, setActive] = useState<number>(0);

  const handleNext = () => {
    setActive((prevStep) => prevStep + 1);
  };

  return (
    <div className='hidden md:hidden'>
      <div className="grid grid-cols-12 pt-20 pl-10">
        <div className="col-span-4 min-h-[calc(100vh-71px)]">
          <div className="grid gap-4 pt-10 gap-y-10">
            <div
              className={`grid gap-2 ${
                active >= 0 ? `font-bold bg-slate-600 p-4` : ``
              }`}
            >
              <h1>Date & Time</h1>
              <p>...</p>
            </div>
            <div
              className={`grid gap-2 ${
                active >= 1 ? `font-bold bg-slate-600 p-4` : ``
              }`}
            >
              <h1>About this practice </h1>
              <p>...</p>
            </div>
            <div
              className={`grid gap-2 ${
                active >= 2 ? `font-bold bg-slate-600 p-4` : ``
              }`}
            >
              <h1>Appointment type</h1>
              <p>...</p>
            </div>
            <div
              className={`grid gap-2 ${
                active >= 3 ? `font-bold bg-slate-600 p-4` : ``
              }`}
            >
              <h1>Personal details</h1>
              <p>...</p>
            </div>
          </div>
        </div>
        <div className="col-span-8">
          {active === 0 && (
            <>
              <h1>Step one</h1>
              <Button onClick={handleNext}>continue</Button>
            </>
          )}
          {active === 1 && (
            <>
              <h1>Step two</h1>
              <Button onClick={handleNext}>continue</Button>
            </>
          )}
          {active === 2 && (
            <>
              <h1>Step three</h1>
              <Button onClick={handleNext}>continue</Button>
            </>
          )}
          {active === 3 && (
            <>
              <h1>Step four</h1>
              {/* <Button>continue</Button> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
