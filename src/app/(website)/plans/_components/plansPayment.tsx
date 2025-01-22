

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormMessage 
} from '@/components/ui/form'
import { IoCheckmarkCircle } from 'react-icons/io5'
import Image from 'next/image'

const formSchema = z.object({
  paymentMethod: z.enum(['credit-card', 'paypal']),
  cardholderName: z.string().min(2).optional(),
  cardNumber: z.string().regex(/^\d{16}$/).optional(),
  expDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/).optional(),
  cvv: z.string().regex(/^\d{3,4}$/).optional(),
 
})

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  price: number;

}


function PlansPayment({ isOpen, onClose, price }: PaymentModalProps) {

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        paymentMethod: 'credit-card',
      },
    });
  
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      const newSubmission = {
        ...values,
        chargedAmount: price, // Include the charged amount in the object
      };
       
      // Update the state with the new submission
      // setSubmittedData(newSubmission);
  
      console.log(newSubmission);
    };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[343px] lg:min-w-[650px] h-[668px] lg:h-[751px] p-[12px] lg:p-[40px] bg-[#E6EEF6] rounded-[12px]">
        <div className="">
          <div className='bg-white rounded-[12px] p-[20px] mb-[30px] lg:mb-[40px]'>
            <h3 className="text-[20px] lg:text-[26px] font-bold">Standard</h3>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between ">
                <div className='flex items-center gap-3 text-[16px] font-normal text-[#444444]'>
                    <span>
                        <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
                    </span>
                    <span>Auction/Listing</span>
                </div>
                <span className='text-[#0057A8] text-[15px] font-bold'>10</span>
              </div>
              <div className="flex justify-between">
              <div className='flex items-center gap-3 text-[16px] font-normal text-[#444444]'>
                    <span>
                        <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
                    </span>
                    <span>Bids</span>
                </div>
                <span className='text-[#0057A8] text-[15px] font-bold'>25</span>
              </div>
              <div className="flex justify-between">
              <div className='flex items-center gap-3 text-[16px] font-normal text-[#444444]'>
                    <span>
                        <IoCheckmarkCircle size={16}  className="text-[#2A6C2D] " />
                    </span>
                    <span>Messages</span>
                </div>
                <span className='text-[#0057A8] text-[15px] font-bold'>Unlimited</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t-[1px] border-[#000000]">
                <span className=' text-[16px] font-semibold text-[#444444]'>Charged</span>
                <span className='text-[#000000] font-medium text-[16px]'>₿{price}</span>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-3"
                      >
                        <div className={`flex items-center justify-between h-[52px] bg-[#ffffff] border-[#0057A8] rounded-md border p-4 ${field.value === 'credit-card' ? 'border-[#0057A8] bg-[#244b7210]' : ''}`}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit-card" id="credit-card"  className='h-[20px] w-[20px] border-[#0057A8] text-[#0057A8] fill-[#0057A8]'/>
                            <Label htmlFor="credit-card">Credit Card</Label>
                          </div>
                          <div className="flex space-x-2 items-center">
                            <Image src="/assets/img/cVisa.png"  width={37} height={11} alt="Visa" className="h-6" />
                            <Image src="/assets/img/mastercard.png"  width={39} height={30} alt="Mastercard" className="h-8" />
                          </div>
                        </div>
                        <div>
                            {form.watch('paymentMethod') === 'credit-card' && (
                                <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="cardholderName"
                                    render={() => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="Cardholder Name" {...form.register('cardholderName')}  className='border-[#D9D9D9] h-[48px] text--[#000000] text-[16px] placeholder:text-[#B0B0B0] placeholder:text-[16px] placeholder:font-normal'/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="cardNumber"
                                    render={() => (
                                    <FormItem>
                                        <FormControl>
                                        <Input placeholder="Card Number" {...form.register('cardNumber')} className='border-[#D9D9D9] h-[48px] text--[#000000] text-[16px] placeholder:text-[#B0B0B0] placeholder:text-[16px] placeholder:font-normal'/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />

                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                    control={form.control}
                                    name="expDate"
                                    render={() => (
                                        <FormItem>
                                        <FormControl>
                                            <Input placeholder="MM/YY" {...form.register('expDate')} className='border-[#D9D9D9] h-[48px] text--[#000000] text-[16px] placeholder:text-[#B0B0B0] placeholder:text-[16px] placeholder:font-normal'/>
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />

                                    <FormField
                                    control={form.control}
                                    name="cvv"
                                    render={() => (
                                        <FormItem>
                                        <FormControl>
                                            <Input placeholder="CVV" {...form.register('cvv')} className='border-[#D9D9D9] h-[48px] text--[#000000] text-[16px] placeholder:text-[#B0B0B0] placeholder:text-[16px] placeholder:font-normal'/>
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                </div>
                            )}
                        </div>
                        <div className={`flex items-center justify-between bg-[#FFFFFF] h-[52px] border-[#0057A8] rounded-md border p-4 ${field.value === 'paypal' ? 'border-[#0057A8] bg-[#244b7210]' : ''}`}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="paypal" id="paypal" className='h-[20px] w-[20px] border-[#0057A8] text-[#0057A8] fill-[#0057A8]'/>
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                          <Image src="/assets/img/ppLogo.png" width={62} height={15} alt="PayPal" className="h-6" />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

             
              

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default PlansPayment
