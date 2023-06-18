import React from 'react';

import { Filter as FilterIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const TransactionPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items center">
                    <div>
                        <CardTitle className='mb-1.5'>Transactions</CardTitle>
                        <CardDescription>All of your transactions are listed here.</CardDescription>
                    </div>
                    <div>
                        <Button variant="ghost">
                            <FilterIcon className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
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
                <Separator className="my-4" />
                <div className="">
                    <div className="flex justify-end">
                        <div className="w-[50%]">
                            <Table className='w-full'>
                                <TableBody>
                                    <TableRow>
                                        <TableHead>Total Income</TableHead>
                                        <TableCell className="text-right text-green-500">Rp. 350.000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead>Total Expense</TableHead>
                                        <TableCell className="text-right text-red-500">Rp. - 250.000</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableHead></TableHead>
                                        <TableCell className="text-right text-green-500">Rp. 100.000</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TransactionPage;