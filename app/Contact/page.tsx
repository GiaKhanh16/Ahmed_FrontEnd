"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-[60vh] font-inter antialiased dark bg-black text-white">
      <div className="container mx-auto px-4 pt-10 pb-20  max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">Contact Section</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Get in touch
          </h1>
          <p className="text-muted-foreground max-w-md">
            Write one or two welcoming sentences that encourage contact. Include
            your response time commitment and highlight your team&apos;s
            readiness to help.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 sm:gap-50">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                className="bg-transparent border-muted-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="bg-transparent border-muted-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message"
                className="min-h-[120px] bg-transparent border-muted-foreground/20 resize-none"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <Label htmlFor="privacy" className="text-sm">
                By selecting this you agree to our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </Label>
            </div>

            <Button className="w-full bg-white text-black hover:bg-gray-100">
              Send message
            </Button>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 bg-muted/10 p-8 rounded-2xl border border-muted-foreground/10">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg border border-muted-foreground/20">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Call us</h3>
                <p className="text-muted-foreground">+1 400 500 600</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg border border-muted-foreground/20">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Write an email</h3>
                <p className="text-muted-foreground">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg border border-muted-foreground/20">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-1">Visit our office</h3>
                <p className="text-muted-foreground">
                  192 Griffin Street, Gilbert, AZ 32521
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
