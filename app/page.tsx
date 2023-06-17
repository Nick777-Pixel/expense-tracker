"use client"

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import NetWorth from "@/components/elements/cards/networth";
import Transaction from "@/components/elements/cards/transaction";
import FormTesting from "@/components/elements/forms/form";

export default function IndexPage() {
    const [date, setDate] = React.useState<Date>()

    return (
        <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="w-full md:w-[50%] sticky top-3">
                <NetWorth />
            </div>
            <div className="flex flex-col gap-5 w-full">
                <Transaction />
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Recent Transasction</CardTitle>
                        <CardDescription>Recent transaction on your account.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}