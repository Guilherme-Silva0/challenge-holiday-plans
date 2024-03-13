"use client";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import clsx from "clsx";
import { useState } from "react";
import { Loader } from "@/components/global/Loader";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
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
    setIsLoading(false);
  });

  return (
    <form onSubmit={handleFormSubmit}>
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
                type="email"
                disabled={isLoading}
                className={clsx(errors.email && "border-destructive")}
                {...register("email")}
              />
              {errors.email?.message && (
                <p className="text-destructive text-sm">
                  {errors.email?.message as string}
                </p>
              )}
            </div>
            <Button disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader size="small" color="white" />
              ) : (
                "Send Magic Link"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>{" "}
    </form>
  );
}
