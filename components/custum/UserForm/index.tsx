'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import {
  userForm as formSchema,
  userFormInterface,
  selectableOptions,
  ProfileFormProps,
} from '@/schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CITY } from '@/lib/city';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import crudOperations from '@/firebase/RealTime-Database/crud';

export function ProfileForm({ formData, params }: ProfileFormProps) {
  const form = useForm<userFormInterface>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      whatsappNumber: '',
    },
  });

  async function onSubmit(values: userFormInterface) {
    console.log(values);
    try {
      // Call the `crudOperations` function to create a new document
      await crudOperations('POST', 'user', { ...values, lang: params });

      // Show a success message to the user
      toast('We Had Sucessfully Recived Your Response', {
        description: 'Join The WhatsApp Community For Get updated',
        // action: {
        //   label: 'Undo',
        //   onClick: () => console.log('Undo'),
        // },
      });

      setTimeout(() => {
        window.open(
          'https://chat.whatsapp.com/FN0blhXJI0uIEtxHb7t58p',
          '_blank'
        );
      }, 1500);
    } catch (error) {
      // Handle any errors that occur during the CRUD operation
      console.error('Error creating event:', error);
      // Optionally, show an error message to the user
      toast('Failed to create event. Please try again later.', {
        description: 'Some Error Message',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={formData.name.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>{formData.name.filedLabel}</FormLabel>
              <FormControl>
                <Input placeholder={formData.name.placeHolder} {...field} />
              </FormControl>
              <FormDescription>
                {formData.name.filedDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={formData.whatsappNumber.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>{formData.whatsappNumber.filedLabel}</FormLabel>
              <FormControl>
                <Input
                  maxLength={10}
                  placeholder={formData.whatsappNumber.placeHolder}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {formData.whatsappNumber.filedDescription}.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={formData.area.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>{formData.area.filedLabel}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={formData.area.placeHolder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {CITY.map((cityName) => (
                    <SelectItem key={cityName} value={cityName}>
                      {cityName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                {formData.area.filedDescription}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={formData.sudarshanKriya.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3 py-4'>
              <FormLabel>{formData.sudarshanKriya.filedLabel}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'>
                  {selectableOptions.map((option) => (
                    <FormItem
                      key={option}
                      className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className='font-normal'>{option}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={formData.sahajSamadhi.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3 py-4'>
              <FormLabel>{formData.sahajSamadhi.filedLabel}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'>
                  {selectableOptions.map((option) => (
                    <FormItem
                      key={option}
                      className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className='font-normal'>{option}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={formData.volunteer.fieldName}
          render={({ field }) => (
            <FormItem className='space-y-3 py-4'>
              <FormLabel>{formData.volunteer.filedLabel}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'>
                  {selectableOptions.map((option) => (
                    <FormItem
                      key={option}
                      className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value={option} />
                      </FormControl>
                      <FormLabel className='font-normal'>{option}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='md:w-1/3 w-full' type='submit'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
