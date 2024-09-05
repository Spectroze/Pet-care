import React from 'react'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/Textarea'
import { Button } from '../../../components/ui/button'
export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
                <div>
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground">
                        Have a question or need assistance? Contact us today.
                    </p>
                </div>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input type="text" placeholder="Name" className="w-full" />
                    <Input
                        type="email"
                        placeholder="Email"
                        className="w-full"
                    />
                    <Textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full col-span-1 sm:col-span-2"
                    />
                    <Button type="submit" className="w-full sm:col-span-2">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    )
}
