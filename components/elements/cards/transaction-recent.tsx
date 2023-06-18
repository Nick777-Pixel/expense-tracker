import React from 'react';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';

const TransactionRecent = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>	Recent Transaction</CardTitle>
                <CardDescription>A list of your recent transactions.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table className='w-full'>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Account</TableHead>
                            <TableHead className="w-[100px]">Income</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Cash</TableCell>
                            <TableCell><Badge variant={'destructive'} className='lowercase'>Expense</Badge></TableCell>
                            <TableCell>Food</TableCell>
                            <TableCell>2023-06-01 10:32:02</TableCell>
                            <TableCell className="text-right">Rp. 50.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Cash</TableCell>
                            <TableCell><Badge variant={'destructive'} className='lowercase'>Expense</Badge></TableCell>
                            <TableCell>Transportation</TableCell>
                            <TableCell>2023-05-28 10:32:02</TableCell>
                            <TableCell className="text-right">Rp. 20.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Bank</TableCell>
                            <TableCell><Badge variant={'destructive'} className='lowercase'>Expense</Badge></TableCell>
                            <TableCell>Food</TableCell>
                            <TableCell>2023-05-23 10:32:02</TableCell>
                            <TableCell className="text-right">Rp. 30.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Cash</TableCell>
                            <TableCell><Badge variant={'destructive'} className='lowercase'>Expense</Badge></TableCell>
                            <TableCell>Medical / Healthcare</TableCell>
                            <TableCell>2023-05-21 10:32:02</TableCell>
                            <TableCell className="text-right">Rp. 150.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Bank</TableCell>
                            <TableCell><Badge variant={'default'} className="lowercase">Income</Badge></TableCell>
                            <TableCell>Services</TableCell>
                            <TableCell>2023-05-10 10:32:02</TableCell>
                            <TableCell className="text-right">Rp. 350.000</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TransactionRecent;