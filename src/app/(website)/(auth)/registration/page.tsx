'use client'
import { MultiStepForm } from '../_components/multi-step-form'
import { Provider } from 'react-redux'
import {store} from '@/redux/store'
import { FormProvider } from '@/provider/form-provider'

export default function Page() {
  return (
    <FormProvider>
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    </FormProvider>
  )
}

