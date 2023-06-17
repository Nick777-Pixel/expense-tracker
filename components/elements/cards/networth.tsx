import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Accordion, AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion";

const NetWorth = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Net Worth</CardTitle>
                <CardDescription>Total of all your assets.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Cash</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>E-Wallet</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other components'
                            aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    );
};

export default NetWorth;