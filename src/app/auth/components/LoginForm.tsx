"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const form = useForm();
  const { toast } = useToast();

  const handlesubmit = form.handleSubmit(async (data) => {
    console.log(data.email);
    try {
      await signIn("sendgrid", { email: data.email, redirect: false });
      toast({
        title: "Magic link sent",
        description: "Check your email for the link",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error sending your magic link",
      });
    }
  });

  return (
    <form onSubmit={handlesubmit}>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register("email")}
              />
            </div>
            <Button className="w-full">Send Magic Link</Button>
          </div>
        </CardContent>
      </Card>{" "}
    </form>
  );
}
