import { Container } from '@mui/material';
import React, { useState } from 'react';

interface FormProps {
  formTitle: string;
  formComponent: React.ReactNode;
}

interface StepperProps {
  steps: string[];
  title: string[];
  subTitle?: string[];
  content?: (FormProps | React.ReactNode)[];
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  title,
  subTitle,
  content,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Container>
      <div className="flex flex-col items-start">
        <div className="">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-[36rem] mt-5">
              <div
                className={`flex-1 mt-2 ${
                  activeStep === index ? 'font-semibold' : 'font-normal'
                }`}
              >
                {step}
              </div>
              <div className='flex-1'>
                {activeStep === index && (
                  <>
                    <div className="font-bold text-lg">{title[index]}</div>
                    {subTitle && subTitle[activeStep] && (
                      <div>{subTitle[activeStep]}</div>
                    )}
                    {content &&
                      content[activeStep] &&
                      (content[activeStep] as FormProps).formComponent ? (
                      <div>{(content[activeStep] as FormProps).formComponent}</div>
                    ) : (
                      content && content[activeStep] && (
                        <div>{String(content[activeStep])}</div>
                      )
                    )}
                    <div className="mt-4 mx-auto">
                      <button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        className={`mr-2 py-2 px-4 rounded ${
                          activeStep === 0
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={activeStep === steps.length - 1}
                        className={`py-2 px-4 rounded ${
                          activeStep === steps.length - 1
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Stepper;
