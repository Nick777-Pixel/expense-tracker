import React from 'react';

import * as z from 'zod';
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { Calendar as CalendarIcon } from "lucide-react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

interface Props {
    className?: string;
    formType?: string;
}

const FormTransaction = (props: Props) => {
    const [date, setDate] = React.useState<Date>()

    const formSchema = z.object({
        account: z.string().nonempty(),
        category: z.string().nonempty(),
        amount: z.string().nonempty().min(0).transform((val) => Number(val)),
        date: z.date().max(new Date(), { message: "Date cannot be in the future." }),
        note: z.string().optional(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            account: '',
            category: '',
            amount: 0,
            date: undefined,
            note: '',
        }
    });

    function onSubmit(value: z.infer<typeof formSchema>) {
        console.log(value);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Controller
                            name="account"
                            control={form.control}
                            rules={{ required: "Account is required." }}
                            render={({ field: { ref, ...field } }) => (
                                <FormItem>
                                    <FormLabel>{props.formType === "income" ? "To" : "From"}</FormLabel>
                                    <Select onValueChange={field.onChange} {...field}>
                                        <SelectTrigger ref={ref}>
                                            <SelectValue placeholder="Select Account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="cash">Cash</SelectItem>
                                                <SelectItem value="bank">Bank</SelectItem>
                                                <SelectItem value="credit">Credit Card</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-1">
                        <Controller
                            name="category"
                            control={form.control}
                            rules={{ required: "Category is required." }}
                            render={({ field: { ref, ...field } }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} {...field}>
                                        <SelectTrigger ref={ref}>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="food">Food</SelectItem>
                                                <SelectItem value="transportation">Transportation</SelectItem>
                                                <SelectItem value="insurance">Insurance</SelectItem>
                                                <SelectItem value="medical">Medical / Healthcare</SelectItem>
                                                <SelectItem value="utilities">Utilities</SelectItem>
                                                <SelectItem value="entertiment">Entertiment</SelectItem>
                                                <SelectItem value="shopping">Shopping</SelectItem>
                                                <SelectItem value="education">Education</SelectItem>
                                                <SelectItem value="others">Others</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-1">
                        <FormField control={form.control} name="date" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <Popover {...field} onOpenChange={(open) => {
                                    if (!open) {
                                        field.onChange(date);
                                    }
                                }}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <div className="space-y-1">
                        <FormField control={form.control} name="amount" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder="IDR" type='number' min={0} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                </div>
                <div className="mt-3">
                    <FormField control={form.control} name="note" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Note</FormLabel>
                            <Textarea id="note" placeholder="Type your message here." {...field} />
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <Button type="submit" className='mt-5'>
                    {props.formType === "income" ? "Add Income" : "Add Expense"}
                </Button>
            </form>
        </Form>
    );
};

export default FormTransaction;