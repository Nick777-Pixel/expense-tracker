import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import FormTransaction from '../forms/form';

interface Props {
    className?: string;
    date?: Date;
    setDate?: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const Transaction = () => {
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
                        <div className="m-4 mb-0 b-0">
                            <FormTransaction formType={"expense"} />
                        </div>
                    </TabsContent>
                    <TabsContent value="income">
                        <div className="m-4 mb-0 b-0">
                            <FormTransaction formType={"income"} />
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
};

export default Transaction;