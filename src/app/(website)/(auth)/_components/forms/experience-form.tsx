'use client'
import NextButton from './button'
import { useForm } from '@/provider/form-provider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useDispatch, useSelector } from 'react-redux'
import { setRegistrationValue } from './AuthSlice'


export function ExperienceForm() {
  const { updateFormData, setStep } = useForm()
  
  const dispatch = useDispatch();
  const val = useSelector((state: any) => state);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("profession");
    console.log(val)
  };

  const handleRadioChange = (value: string) => {
    // saving in redux 
    dispatch(setRegistrationValue({ type: value }));

    // using contextApi
    updateFormData({ experience: value as 'CBD/HEMP' | 'Recreational Cannabis' })

    console.log(value)
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl  font-semibold text-[#6EBA6B]">Sign Up</h1>
        <p className="text-gray-500 text-xs">
          Continue to register as a customer or vendor, Please provide the
          information.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h2 className=" text-[32px] font-medium">
            What do you want to experience?
          </h2>
          <RadioGroup
            onValueChange={handleRadioChange}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="CBD/HEMP" id="cbd" />
              <Label htmlFor="cbd">CBD/HEMP</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Recreational Cannabis" id="recreational" />
              <Label htmlFor="recreational">Recreational Cannabis</Label>
            </div>
          </RadioGroup>
        </div>
        <NextButton disable={false} />
      </form>
    </div>
  );
}
