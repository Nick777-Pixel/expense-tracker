import React from 'react';

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { Calendar as CalendarIcon } from "lucide-react";
import FormTransaction from '../forms/form';


interface Props {
    className?: string;
    date?: Date;
    setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}


const Transaction = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>New Transaction</CardTitle>
                <CardDescription>Transaction on your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="expense">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="expense">Expense</TabsTrigger>
                        <TabsTrigger value="income">Income</TabsTrigger>
                    </TabsList>
                    <TabsContent value="expense">
                        <div className="m-4">
                            <FormTransaction />
                        </div>
                    </TabsContent>
                    <TabsContent value="income">
                        <div className="m-4">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="space-y-1">
                                    <Label htmlFor="from">To</Label>
                                    <Select name="account">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="account1">Account 1</SelectItem>
                                                <SelectItem value="account2">Account 2</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="amount">Amount</Label>
                                    <Input id="amount" name="amount" type="number" min={0} placeholder="IDR" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="category">Category</Label>
                                    <Select name="category">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="makan">Makan</SelectItem>
                                                <SelectItem value="entertiment">Entertimen</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="date">Date</Label>
                                    <div>
                                        <Popover>
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
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1 mt-5 mb-5">
                                <Label htmlFor="note">Note</Label>
                                <Textarea id="note" name="note" placeholder="Type your message here." />
                            </div>

                            <Button>Add Income</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

export default Transaction;